import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create transporter once outside the handler for better performance
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function POST(request: NextRequest) {
  try {
    const { name, phone, service, message } = await request.json();

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone' },
        { status: 400 }
      );
    }

    // Email to the user (confirmation)
    //     const userMailOptions = {
    //         from: `"Lahore Carpenter Services" <${process.env.SMTP_USER}>`,
    //         to: process.env.ADMIN_EMAIL,
    //         subject: 'We received your message – thank you!',
    //         html: `
    //     <h2>Hello ${name},</h2>
    //     <p>Thank you for contacting us. We have received your inquiry and will get back to you within 2 hours.</p>
    //     <h3>Your request summary:</h3>
    //     <ul>
    //       <li><strong>Name:</strong> ${name}</li>
    //       <li><strong>Phone:</strong> ${phone}</li>
    //       <li><strong>Service:</strong> ${service || 'Not specified'}</li>
    //       <li><strong>Message:</strong> ${message || 'No message provided'}</li>
    //     </ul>
    //     <p>Best regards,<br/>The Team</p>
    //   `,
    //     };

    // Email to admin (notification)
    const adminMailOptions = {
      from: `"Lahore Carpenter Services" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Message from ${name}`,
      html: `
                    <!DOCTYPE html>
                    <html>
                    <head>
                      <meta charset="utf-8">
                      <meta name="viewport" content="width=device-width, initial-scale=1.0">
                      <title>New Contact Form Submission</title>
                      <style>
                        /* General & responsive */
                        @media only screen and (max-width: 600px) {
                          .container { width: 100% !important; }
                          .inner-padding { padding: 20px 15px !important; }
                          .header-logo { height: auto !important; max-width: 180px !important; }
                          .summary-box { padding: 12px !important; }
                        }
                      </style>
                    </head>
                    <body style="margin:0; padding:0; background-color:#f4f7fb; font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;">
                      <table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" bgcolor="#f4f7fb">
                        <tr>
                          <td align="center" >
                            <!-- Main Container -->
                            <table width="100%" cellpadding="0" cellspacing="0" border="0" align="center" class="container" style="max-width:650px; width:100%; background:#ffffff; border-radius:20px; box-shadow:0 8px 20px rgba(0,0,0,0.05); overflow:hidden;">
                              
                              <!-- Header with brand -->
                              <tr>
                                <td bgcolor="#2C3E50" style="padding: 35px 40px 25px 40px; text-align:center;">
                                  <h1 style="margin:0; color:#ffffff; font-size:28px; font-weight:600; letter-spacing:-0.5px;">📬 New Inquiry</h1>
                                  <p style="margin:10px 0 0; color:#BDC3C7; font-size:14px;">Action required – respond within 2 hours</p>
                                </td>
                              </tr>
                              
                              <!-- Body -->
                              <tr>
                                <td class="inner-padding" style="padding: 40px 10px 30px 10px; background:#ffffff;">
                                  <p style="margin:0 0 10px 0; font-size:16px; color:#2C3E50;">Hello <strong style="color:#E67E22;">Admin</strong>,</p>
                                  <p style="margin:0 0 25px 0; font-size:15px; color:#5D6D7E;">You have received a new contact request. Details below:</p>
                                  
                                  <!-- Summary Card -->
                                  <table width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#F9FBFD; border-left:4px solid #E67E22; border-radius:12px; margin-bottom:30px;">
                                    <tr>
                                      <td style="padding: 20px 10px;">
                                        <h3 style="margin:0 0 15px 0; font-size:18px; color:#2C3E50;">👤 Client Information</h3>
                                        <table width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:14px; color:#34495E;">
                                          <tr>
                                            <td width="130" style="padding:8px 0; font-weight:600;">Full name:</td>
                                            <td style="padding:8px 0;">${name}</td>
                                          </tr>
                                          <tr>
                                            <td style="padding:8px 0; font-weight:600;">Phone number:</td>
                                            <td style="padding:8px 0;"><a href="tel:${phone}" style="color:#E67E22; text-decoration:none;">${phone}</a></td>
                                          </tr>
                                          <tr>
                                            <td style="padding:8px 0; font-weight:600;">Service required:</td>
                                            <td style="padding:8px 0;">${service || '<span style="color:#95A5A6;">Not specified</span>'}</td>
                                          </tr>
                                        </table>
                                      </td>
                                    </tr>
                                  </table>
                                  
                                  <!-- Message Section -->
                                  <div style="background:#FEF9E7; border-radius:12px; padding:20px 25px; margin-bottom:30px;">
                                    <p style="margin:0 0 8px 0; font-size:13px; text-transform:uppercase; letter-spacing:1px; color:#B7950B;">📝 Message</p>
                                    <p style="margin:0; font-size:15px; color:#2C3E50; line-height:1.6;">${message || '<em>No message provided</em>'}</p>
                                  </div>
                                  
                                  <!-- Call to action -->
                                  <table width="100%" cellpadding="0" cellspacing="0" border="0">
                                    <tr>
                                      <td align="center" style="padding-top:10px;">
                                        <a href="tel:${phone}" style="display:inline-block; background:#E67E22; color:#ffffff; text-decoration:none; padding:14px 32px; border-radius:40px; font-weight:600; font-size:15px;">Call client now</a>
                                        <p style="font-size:12px; color:#95A5A6; margin-top:18px;">Respond within 2 hours to maintain high service quality.</p>
                                      </td>
                                    </tr>
                                  </table>
                                </td>
                              </tr>
                              
                              <!-- Footer -->
                              <tr>
                                <td bgcolor="#F4F7FB" style="padding: 20px 40px; text-align:center; border-top:1px solid #E2E8F0;">
                                  <p style="margin:0; font-size:12px; color:#7F8C8D;">This is an automated message from your website contact form.</p>
                                  <p style="margin:5px 0 0; font-size:12px; color:#7F8C8D;">&copy; ${new Date().getFullYear()} Your Company Name – All rights reserved.</p>
                                </td>
                              </tr>
                            </table>
                          </td>
                        </tr>
                      </table>
                    </body>
                    </html>
                  `,
    };

    // Send both emails concurrently
    await Promise.all([
      // transporter.sendMail(userMailOptions),
      transporter.sendMail(adminMailOptions),
    ]);

    return NextResponse.json(
      { message: 'Emails sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Email sending error:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}