import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, service } = await req.json();

    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "stevej00171@gmail.com", // 👈 CHANGE THIS
      subject: "New Contact Form Submission",
      html: `
        <h2>New Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
      `,
    });

    await resend.emails.send({
  from: "onboarding@resend.dev",
  to: email,
  subject: "We received your request",
  html: `
    <p>Hi ${name},</p>
    <p>Thanks for reaching out. We’ll contact you shortly.</p>
    <p>- SteveLaw Investments</p>
  `,
});

    console.log("EMAIL SENT:", result);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });

  } catch (error) {
    console.error("EMAIL ERROR:", error);
    return new Response(JSON.stringify({ error: "fail" }), {
      status: 500,
    });
  }
}

