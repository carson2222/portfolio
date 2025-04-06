import { NextRequest, NextResponse } from "next/server";
// import { WebhookClient } from "discord.js";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();

  if (!name || !email || !message) {
    return new Response("Missing required fields", { status: 400 });
  }
  const webhookUrl = process.env.CONTACT_WEBHOOK;
  if (!webhookUrl) {
    return new Response("Webhook URL not configured", { status: 500 });
  }

  try {
    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: `New contact form submission from ${name} (${email}):\n\n${message}`,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message to Discord");
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending Discord webhook:", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
