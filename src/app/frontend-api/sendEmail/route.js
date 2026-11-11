import nodemailer from "nodemailer";
import sanitizeHtml from "sanitize-html";
import { contactFormSchema } from "@/core/utils/validation.schema";
// import { sendEmailRateLimiter } from "@/core/utils/rate-limit";

const MAX_BODY_BYTES = 32 * 1024;

const readJsonBodyWithLimit = async (req, maxBytes) => {
  if (!req.body) {
    throw new Error("Missing body");
  }

  const reader = req.body.getReader();
  const decoder = new TextDecoder();
  let receivedBytes = 0;
  let bodyText = "";

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    if (value) {
      receivedBytes += value.byteLength;
      if (receivedBytes > maxBytes) {
        try {
          await reader.cancel("Request too large");
        } catch {
          // Ignore cancellation errors; we're rejecting the request anyway.
        }
        throw new Error("Request too large");
      }
      bodyText += decoder.decode(value, { stream: true });
    }
  }

  bodyText += decoder.decode();
  return JSON.parse(bodyText);
};

const SUBJECT_LABELS = {
  complaintaboutdriver: "Complaint About Driver",
  lostitem: "Lost Item",
  technicalsupport: "Technical Support",
  paymentissue: "Payment Issue",
  bookingproblem: "Booking Problem",
  other: "Other",
};

const formatSubject = (rawSubject) => {
  const cleaned = (rawSubject || "").replace(/[\r\n]/g, "").trim();
  const normalizedKey = cleaned.toLowerCase().replace(/\s+/g, "");
  return SUBJECT_LABELS[normalizedKey] || cleaned;
};

const firstZodIssueMessage = (zodError) => {
  const first = zodError?.issues?.[0];
  return first?.message || "Invalid input";
};

// const isValidIp = (ip) => {
//   const ipv4Regex = /^(\d{1,3}\.){3}\d{1,3}$/;
//   const ipv6Regex = /^([\da-f]{1,4}:){7}[\da-f]{1,4}$/i;
//   return ipv4Regex.test(ip) || ipv6Regex.test(ip);
// };

// const getClientIp = (req) => {
//   const headers = [
//     "cf-connecting-ip",
//     "x-real-ip",
//     "x-forwarded-for",
//     "x-client-ip",
//     "x-cluster-client-ip",
//     "forwarded",
//   ];

//   for (const header of headers) {
//     const value = req.headers.get(header);
//     if (value) {
//       const ip = value.split(",")[0].trim();
//       if (isValidIp(ip)) {
//         return ip;
//       }
//     }
//   }

//   return "unknown";
// };

// const hashString = (str) => {
//   let hash = 0;
//   for (let i = 0; i < str.length; i += 1) {
//     hash = (hash << 5) - hash + str.charCodeAt(i);
//     hash |= 0;
//   }
//   return Math.abs(hash).toString(36);
// };

// const getClientIdentifier = (req) => {
//   const ip = getClientIp(req);
//   const userAgent = req.headers.get("user-agent") || "unknown";
//   const userAgentHash = hashString(userAgent.substring(0, 100));

//   if (ip !== "unknown") {
//     return `ip:${ip}:ua:${userAgentHash}`;
//   }

//   return `ua:${userAgentHash}`;
// };

const verifyCaptcha = async (token, secret) => {
  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret,
          response: token,
        }),
      }
    );

    const result = await response.json();
    return result.success === true;
  } catch (error) {
    console.error("CAPTCHA verification error:", error);
    return false;
  }
};

export async function POST(req) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.toLowerCase().includes("application/json")) {
      return new Response(
        JSON.stringify({ message: "Content-Type must be application/json" }),
        { status: 415, headers: { "Content-Type": "application/json" } }
      );
    }

    const contentLength = req.headers.get("content-length");
    if (contentLength) {
      const length = Number(contentLength);
      if (Number.isFinite(length) && length > MAX_BODY_BYTES) {
        return new Response(JSON.stringify({ message: "Request too large" }), {
          status: 413,
          headers: { "Content-Type": "application/json" },
        });
      }
    }

    // if (sendEmailRateLimiter) {
    //   const identifier = getClientIdentifier(req);
    //   const { success, limit, remaining, reset } =
    //     await sendEmailRateLimiter.limit(identifier);

    //   if (!success) {
    //     const retryAfterSeconds = Math.max(
    //       0,
    //       Math.ceil((reset - Date.now()) / 1000)
    //     );

    //     return new Response(
    //       JSON.stringify({
    //         message: `Too many requests. Please try again in ${Math.ceil(
    //           retryAfterSeconds / 60
    //         )} minute(s).`,
    //         code: "RATE_LIMITED",
    //       }),
    //       {
    //         status: 429,
    //         headers: {
    //           "Content-Type": "application/json",
    //           "Retry-After": String(retryAfterSeconds),
    //           "X-RateLimit-Limit": String(limit),
    //           "X-RateLimit-Remaining": String(remaining),
    //           "X-RateLimit-Reset": String(reset),
    //         },
    //       }
    //     );
    //   }
    // } else {
    //   console.warn(
    //     "Rate limiting disabled: Upstash not configured or failed to initialize."
    //   );
    // }

    let rawBody;
    try {
      rawBody = await readJsonBodyWithLimit(req, MAX_BODY_BYTES);
    } catch (error) {
      const message =
        error instanceof Error && error.message === "Request too large"
          ? "Request too large"
          : "Invalid JSON";
      const status =
        error instanceof Error && error.message === "Request too large"
          ? 413
          : 400;
      return new Response(JSON.stringify({ message }), {
        status,
        headers: { "Content-Type": "application/json" },
      });
    }

    const parsed = contactFormSchema.safeParse(rawBody);
    if (!parsed.success) {
      return new Response(
        JSON.stringify({ message: firstZodIssueMessage(parsed.error) }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const { Name, email, subject, message, captchaToken } = parsed.data;

    const captchaSecret = process.env.CLOUDFLARE_TURNSTILE_SECRET_KEY;
    if (!captchaSecret) {
      console.error("CLOUDFLARE_TURNSTILE_SECRET_KEY not configured");
      return new Response(
        JSON.stringify({ message: "Server configuration error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const isCaptchaValid = await verifyCaptcha(captchaToken, captchaSecret);
    if (!isCaptchaValid) {
      return new Response(
        JSON.stringify({ message: "CAPTCHA verification failed" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    const cleanName = (Name || "").replace(/[\r\n]/g, "").trim();
    const cleanSubject = formatSubject(subject);
    const cleanEmail = (email || "")
      .replace(/\s/g, "")
      .replace(/[\r\n]/g, "");

    const purifiedMessage = sanitizeHtml(message || "", {
      allowedTags: sanitizeHtml.defaults.allowedTags,
      allowedAttributes: {},
    });

    const htmlMessage = purifiedMessage.replace(/\n/g, "<br>");

    const emailHost = process.env.EMAIL_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const emailUser = process.env.EMAIL;
    const emailPassword = process.env.EMAIL_PASSWORD;
    const toEmail = process.env.TO_EMAIL;

    if (!emailHost || !smtpPort || !emailUser || !emailPassword || !toEmail) {
      console.error("Email configuration missing in environment variables");
      return new Response(
        JSON.stringify({ message: "Server configuration error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const port = Number(smtpPort);
    if (!Number.isFinite(port)) {
      console.error("SMTP_PORT must be a valid number");
      return new Response(
        JSON.stringify({ message: "Server configuration error" }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      );
    }

    const transporter = nodemailer.createTransport({
      host: emailHost,
      port,
      secure: port === 465,
      auth: {
        user: emailUser,
        pass: emailPassword,
      },
    });

    const mailOptions = {
      from: `"${cleanName}" <${emailUser}>`,
      to: toEmail,
      subject: cleanSubject,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
          <h2 style="color: #ff9d00; text-align: center;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #eee;">
          <p><strong>Name:</strong> ${cleanName}</p>
          <p><strong>Email:</strong> ${cleanEmail}</p>
          <p><strong>Subject:</strong> ${cleanSubject}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #eee;">
            <p style="margin: 0;">${htmlMessage}</p>
          </div>
          <hr style="border: 1px solid #eee;">
          <p style="text-align: center; color: #777; font-size: 0.9em;">This email was sent from the contact form on your website.</p>
        </div>
      `,
      replyTo: cleanEmail,
    };

    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Submission Error:", error);
    return new Response(
      JSON.stringify({ message: "Failed to process request" }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
