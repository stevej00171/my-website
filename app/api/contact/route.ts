import { Resend } from "resend";
import { createClient } from "@supabase/supabase-js";

const resend = new Resend(process.env.RESEND_API_KEY!);

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_ANON_KEY!
);

export async function POST(req: Request) {
  try {
    const { name, email, phone, service } = await req.json();

    // Save to Supabase (optional, will work if configured)
    await supabase.from("leads").insert([
      {
        name,
        email,
        phone,
        service,
      },
    ]);

    // Send email to YOU
    const result = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "stevej00171@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h2>New Lead</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
      `,
    });

    // Auto-reply to user
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
    console.error("ERROR:", error);

    return new Response(JSON.stringify({ error: "fail" }), {
      status: 500,
    });
  }
}