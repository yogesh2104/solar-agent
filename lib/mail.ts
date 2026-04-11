import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASSWORD,
  },
});

const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";

export const sendPasswordResetEmail = async (email: string, token: string) => {
  const resetLink = `${baseUrl}/reset-password?token=${token}`;

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: email,
    subject: "Reset your password",
    html: `
      <div style="font-family: 'Segoe UI', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #0f172a; border-radius: 16px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #6366f1, #8b5cf6, #a855f7); padding: 40px 30px; text-align: center;">
          <h1 style="color: #fff; margin: 0; font-size: 28px; font-weight: 700;">Password Reset</h1>
          <p style="color: rgba(255,255,255,0.85); margin-top: 8px; font-size: 15px;">You requested to reset your password</p>
        </div>
        <div style="padding: 40px 30px; text-align: center;">
          <p style="color: #94a3b8; font-size: 15px; line-height: 1.6; margin-bottom: 30px;">
            Click the button below to set a new password. This link will expire in <strong style="color: #e2e8f0;">1 hour</strong>.
          </p>
          <a href="${resetLink}" style="display: inline-block; background: linear-gradient(135deg, #6366f1, #8b5cf6); color: #fff; text-decoration: none; padding: 14px 40px; border-radius: 10px; font-weight: 600; font-size: 16px; letter-spacing: 0.5px;">
            Reset Password
          </a>
          <p style="color: #64748b; font-size: 13px; margin-top: 30px; line-height: 1.5;">
            If you didn't request this, you can safely ignore this email.
          </p>
        </div>
      </div>
    `,
  });
};
