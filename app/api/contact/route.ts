import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, message } = body;

    // Basic validation (prevents crashes / bad requests)
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Missing fields" },
        { status: 400 }
      );
    }

    // Send email
    const response = await resend.emails.send({
      from: "Website Contact <onboarding@resend.dev>", // safe test sender
      to: ["info@mjf-finance.com"],
      subject: `New Contact Message from ${name}`,
      reply_to: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    return NextResponse.json({ success: true, response });

  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}