import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export const dynamic = 'force-dynamic';
export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message, botcheck } = body;

    // Honeypot anti-spam check
    if (botcheck) {
      return NextResponse.json({ success: true, message: 'Message received.' });
    }

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Please provide all required fields (name, email, message).' },
        { status: 400 }
      );
    }

    const user = process.env.EMAIL_USER || 'dkalharafernando@gmail.com';
    const rawPass = process.env.EMAIL_PASS || '';
    const pass = rawPass.replace(/\s+/g, '');

    if (!pass) {
      console.error('EMAIL_PASS environment variable is not defined.');
      return NextResponse.json(
        { success: false, message: 'Email service credentials not configured.' },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user,
        pass,
      },
    });

    const emailSubject = `[Portfolio Dispatch] ${subject ? subject : 'New Inquiry'} from ${name}`;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0b0f19; color: #f8fafc; border-radius: 16px; overflow: hidden; border: 1px solid #1e293b; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.5);">
        <div style="background: linear-gradient(135deg, #7c3aed 0%, #06b6d4 100%); padding: 24px 30px;">
          <div style="font-size: 11px; text-transform: uppercase; letter-spacing: 2px; color: rgba(255, 255, 255, 0.85); font-weight: 700;">DINUSHA DEV.STUDIO // DISPATCH ALERT</div>
          <h2 style="margin: 8px 0 0 0; color: #ffffff; font-size: 22px; font-weight: 800;">New Contact Inquiry Received</h2>
        </div>
        
        <div style="padding: 28px 30px; background: #0f172a;">
          <div style="margin-bottom: 20px; padding: 16px; background: rgba(255, 255, 255, 0.03); border-radius: 12px; border: 1px solid rgba(255, 255, 255, 0.08);">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 6px 0; color: #94a3b8; font-size: 13px; font-weight: 600; width: 90px;">From:</td>
                <td style="padding: 6px 0; color: #f8fafc; font-size: 14px; font-weight: 700;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #94a3b8; font-size: 13px; font-weight: 600;">Email:</td>
                <td style="padding: 6px 0; color: #38bdf8; font-size: 14px;"><a href="mailto:${email}" style="color: #38bdf8; text-decoration: none; font-weight: 600;">${email}</a></td>
              </tr>
              ${
                subject
                  ? `<tr>
                <td style="padding: 6px 0; color: #94a3b8; font-size: 13px; font-weight: 600;">Subject:</td>
                <td style="padding: 6px 0; color: #a78bfa; font-size: 14px; font-weight: 600;">${subject}</td>
              </tr>`
                  : ''
              }
            </table>
          </div>

          <div style="margin-bottom: 24px;">
            <div style="font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; color: #94a3b8; font-weight: 700; margin-bottom: 10px;">Message Scope:</div>
            <div style="background: rgba(0, 0, 0, 0.35); border-left: 3px solid #7c3aed; padding: 16px 20px; border-radius: 8px; color: #e2e8f0; font-size: 14px; line-height: 1.7; white-space: pre-wrap;">${message}</div>
          </div>

          <div style="border-top: 1px solid rgba(255, 255, 255, 0.08); padding-top: 18px; display: flex; justify-content: space-between; align-items: center; font-size: 12px; color: #64748b;">
            <span>Origin: Dinusha Dev.Studio Portfolio</span>
            <span>Direct Reply Configured</span>
          </div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: `"Portfolio Dispatch" <${user}>`,
      to: user,
      replyTo: `${name} <${email}>`,
      subject: emailSubject,
      text: `New contact dispatch from ${name} (${email}):\n\nSubject: ${subject || 'N/A'}\n\nMessage:\n${message}`,
      html: htmlContent,
    });

    return NextResponse.json({
      success: true,
      message: 'Message delivered directly to Dinusha’s inbox!',
    });
  } catch (error: any) {
    console.error('Error dispatching contact email:', error);
    return NextResponse.json(
      {
        success: false,
        message: error?.message || 'Failed to dispatch email. Please try again.',
      },
      { status: 500 }
    );
  }
}
