import nodemailer from "nodemailer";

export async function POST(req) {
  const { Name, email, subject, message } = await req.json();
  let transporter = nodemailer.createTransport({
    host: "premium145.web-hosting.com",
    port: 465,
    secure: true,
    auth: {
      user: "info@urido.co.uk",
      pass: "RO8maT9C2uZx",
    },
  });

  const htmlContent = `
    <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
      <h2 style="color: #007BFF; text-align: center;">New Contact Form Submission</h2>
      <hr style="border: 1px solid #eee;">
      <p><strong>Name:</strong> ${Name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <p><strong>Message:</strong></p>
      <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; border: 1px solid #eee;">
        <p style="margin: 0;">${message}</p>
      </div>
      <hr style="border: 1px solid #eee;">
      <p style="text-align: center; color: #777; font-size: 0.9em;">This email was sent from the contact form on your website.</p>
    </div>
  `;

  let mailOptions = {
    from: `"${Name}" <info@urido.co.uk>`,
    to: "support@urido.co.uk",
    subject: subject,
    html: htmlContent, 
    replyTo: email,
  };

  try {
    await transporter.sendMail(mailOptions);
    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}