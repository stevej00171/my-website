import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const data = await req.json();

  const { name, email, phone, service } = data;

  // ✅ Email to YOU
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "stevej00171@gmail.com", // make sure this is correct
    subject: "New Investment Inquiry",
    html: `
      <h3>New Lead</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Service:</strong> ${service}</p>
    `,
  });

  // ✅ Auto-reply to USER
  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: email,
    subject: "We Received Your Request",
    html: `
      <h2>Thank you for contacting SteveLaw Investments</h2>
      <p>Hi ${name},</p>
      <p>We’ve received your request and will contact you shortly.</p>
      <p>— SteveLaw Investments</p>
    `,
  });

  // ✅ MUST be last
  return NextResponse.json({ success: true });
}