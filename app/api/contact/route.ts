import { Resend } from "resend";
import twilio from "twilio";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

const TO_EMAIL = "operations@c7-cits.com";
const TO_PHONES = ["+18018670627", "+18018952270"];

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, email, company, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
  }

  const smsBody = [
    `New C7 inquiry`,
    `From: ${name}${company ? ` @ ${company}` : ""}`,
    `Email: ${email}`,
    `Message: ${message.slice(0, 100)}${message.length > 100 ? "..." : ""}`,
  ].join("\n");

  const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

  const results = await Promise.allSettled([
    // Email via Resend
    resend.emails.send({
      from: "C7 Website <operations@c7-cits.com>",
      to: TO_EMAIL,
      subject: `New inquiry from ${name}`,
      html: `
        <h2>New contact form submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${company ? `<p><strong>Company:</strong> ${company}</p>` : ""}
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br/>")}</p>
      `,
    }),

    // SMS via Twilio — send to both numbers
    ...TO_PHONES.map(to =>
      twilioClient.messages.create({
        to,
        from: process.env.TWILIO_FROM_NUMBER,
        body: smsBody,
      })
    ),
  ]);

  const emailOk = results[0].status === "fulfilled";
  const smsOk = results.slice(1).some(r => r.status === "fulfilled");

  if (!emailOk) console.error("Email failed:", JSON.stringify(results[0]));
  results.slice(1).forEach((r, i) => {
    if (r.status === "fulfilled") console.log(`SMS result ${i}:`, JSON.stringify(r));
    else console.error(`SMS failed ${i}:`, JSON.stringify(r));
  });

  return NextResponse.json({ ok: emailOk || smsOk });
}
