import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { phone, subject, bookingDetails, userEmail,userName } = await req.json();
    let transporter = nodemailer.createTransport({
      host: "premium145.web-hosting.com",
      port: 465,
      secure: true,
      auth: {
        user: "info@urido.co.uk",
        pass: "RO8maT9C2uZx",
      },
    });

    let mailOptions = {
      from: `"${userName}" <info@urido.co.uk>`,
      to: "support@urido.co.uk",
      subject: subject,
      html: `
      <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 650px; margin: auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 8px rgba(0,0,0,0.05); background: #ffffff;">
        <!-- Header Section -->
        <div style="background: linear-gradient(135deg, #1e88e5, #1565c0); padding: 25px; text-align: center;">
          <h2 style="color: #ffffff; margin: 0; font-weight: 600; letter-spacing: 0.5px;">New Booking Request</h2>
        </div>
        
        <!-- Contact Information Section -->
        <div style="padding: 25px 30px; background-color: #f8f9fa; border-bottom: 1px solid #e9ecef;">
          <h3 style="color: #424242; margin-top: 0; font-size: 18px; margin-bottom: 15px;">Contact Information</h3>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 10px 0; width: 160px;">
                <div style="display: flex; align-items: center;">
                  <span style="background: #e3f2fd; border-radius: 50%; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px;">
                    <span style="color: #1e88e5; font-size: 14px;">📞</span>
                  </span>
                  <span style="color: #757575; font-weight: 500;">Contact Number:</span>
                </div>
              </td>
              <td style="padding: 10px 0;"><span style="color: #424242; font-weight: 400;">${phone}</span></td>
            </tr>
            <tr>
              <td style="padding: 10px 0;">
                <div style="display: flex; align-items: center;">
                  <span style="background: #e3f2fd; border-radius: 50%; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px;">
                    <span style="color: #1e88e5; font-size: 14px;">📧</span>
                  </span>
                  <span style="color: #757575; font-weight: 500;">Email:</span>
                </div>
              </td>
              <td style="padding: 10px 0;"><span style="color: #424242; font-weight: 400;">${userEmail}</span></td>
            </tr>
            <tr>
              <td style="padding: 10px 0;">
                <div style="display: flex; align-items: center;">
                  <span style="background: #e3f2fd; border-radius: 50%; width: 28px; height: 28px; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px;">
                    <span style="color: #1e88e5; font-size: 14px;">🏷️</span>
                  </span>
                  <span style="color: #757575; font-weight: 500;">Subject:</span>
                </div>
              </td>
              <td style="padding: 10px 0;"><span style="color: #424242; font-weight: 400;">${subject}</span></td>
            </tr>
          </table>
        </div>
        
        <!-- Booking Details Section -->
        <div style="padding: 25px 30px;">
          <div style="margin-bottom: 20px;">
            <h3 style="color: #424242; margin-top: 0; font-size: 18px; display: flex; align-items: center;">
              <span style="background: #e3f2fd; border-radius: 50%; width: 32px; height: 32px; display: inline-flex; align-items: center; justify-content: center; margin-right: 10px;">
                <span style="color: #1e88e5; font-size: 16px;">📝</span>
              </span>
              Booking Details
            </h3>
          </div>
          
          ${generateBookingTable(bookingDetails)}
        </div>
        
        <!-- Footer -->
        <div style="background-color: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
          <p style="color: #757575; margin: 0; font-size: 14px;">Thank you for your booking request!</p>
        </div>
      </div>
      `,
      replyTo: userEmail,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Booking email sent successfully" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending booking email:", error);
    return new Response(
      JSON.stringify({ error: "Failed to send booking email" }),
      { status: 500 }
    );
  }
}

function generateBookingTable(details) {
  if (!details || typeof details !== "object") return "<p>No booking details provided.</p>";

  let rows = Object.entries(details)
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return `
          <tr>
            <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #f8f9fa; width: 180px; color: #757575; font-weight: 500;">${capitalize(key)}</td>
            <td style="padding: 12px 15px; border: 1px solid #e0e0e0; color: #424242;">${value.join(", ")}</td>
          </tr>
        `;
      } else if (typeof value === "object") {
        return `
          <tr>
            <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #f8f9fa; width: 180px; color: #757575; font-weight: 500;">${capitalize(key)}</td>
            <td style="padding: 12px 15px; border: 1px solid #e0e0e0; color: #424242;">${formatNestedDetails(value)}</td>
          </tr>
        `;
      }
      return `
        <tr>
          <td style="padding: 12px 15px; border: 1px solid #e0e0e0; background-color: #f8f9fa; width: 180px; color: #757575; font-weight: 500;">${capitalize(key)}</td>
          <td style="padding: 12px 15px; border: 1px solid #e0e0e0; color: #424242;">${value}</td>
        </tr>
      `;
    })
    .join("");

  return `
    <table style="width: 100%; border-collapse: collapse; border-radius: 8px; overflow: hidden; box-shadow: 0 0 0 1px #e0e0e0;">
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
}

function formatNestedDetails(nestedObj) {
  return Object.entries(nestedObj)
    .map(([key, value]) => `<div style="margin-bottom: 5px;"><span style="color: #757575; font-weight: 500;">${capitalize(key)}:</span> <span style="color: #424242;">${value}</span></div>`)
    .join("");
}

function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}