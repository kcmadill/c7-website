import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import { NextRequest, NextResponse } from "next/server";

const sns = new SNSClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const TO_NUMBER = "+18018670627";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const name = body?.data?.name ?? "Unknown";
    const email = body?.data?.email ?? "Unknown";
    const company = body?.data?.company ?? "";
    const message = body?.data?.message ?? "";

    const sms = [
      `New C7 inquiry`,
      `From: ${name}${company ? ` @ ${company}` : ""}`,
      `Email: ${email}`,
      `Message: ${message.slice(0, 100)}${message.length > 100 ? "..." : ""}`,
    ].join("\n");

    await sns.send(
      new PublishCommand({
        PhoneNumber: TO_NUMBER,
        Message: sms,
      })
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("SNS error:", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
