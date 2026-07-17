import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, phone, eventType, message } = body;

    const textMessage = `*New Inquiry Details:*\nName: ${name}\nPhone: ${phone}\nEvent Type: ${eventType}\nMessage: ${message}`;

    // 1. Send via Telegram (Requires TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID)
    const telegramToken = process.env.TELEGRAM_BOT_TOKEN;
    const telegramChatId = process.env.TELEGRAM_CHAT_ID;
    
    let telegramStatus = "Skipped";
    if (telegramToken && telegramChatId) {
      const tgUrl = `https://api.telegram.org/bot${telegramToken}/sendMessage`;
      const tgRes = await fetch(tgUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: telegramChatId, text: textMessage }),
      });
      telegramStatus = tgRes.ok ? "Success" : "Failed";
    }

    // 2. Send via Twilio SMS (Requires TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER, DESTINATION_PHONE_NUMBER)
    const twilioSid = process.env.TWILIO_ACCOUNT_SID;
    const twilioToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioFrom = process.env.TWILIO_PHONE_NUMBER;
    const twilioTo = process.env.DESTINATION_PHONE_NUMBER || "+916295530167";

    let twilioStatus = "Skipped";
    if (twilioSid && twilioToken && twilioFrom) {
      const twilioUrl = `https://api.twilio.com/2010-04-01/Accounts/${twilioSid}/Messages.json`;
      const twilioData = new URLSearchParams();
      twilioData.append("To", twilioTo);
      twilioData.append("From", twilioFrom);
      twilioData.append("Body", `New Inquiry Details:\nName: ${name}\nPhone: ${phone}\nEvent Type: ${eventType}\nMessage: ${message}`);

      const twilioRes = await fetch(twilioUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Basic ' + Buffer.from(`${twilioSid}:${twilioToken}`).toString('base64'),
        },
        body: twilioData.toString(),
      });
      twilioStatus = twilioRes.ok ? "Success" : "Failed";
    }

    // 3. Send via Email using Web3Forms (Requires WEB3FORMS_ACCESS_KEY)
    const web3formsKey = process.env.WEB3FORMS_ACCESS_KEY;
    let emailStatus = "Skipped";
    
    if (web3formsKey) {
      const emailRes = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: web3formsKey,
          subject: "New Inquiry from Bodhuboron",
          name: name,
          phone: phone,
          eventType: eventType,
          message: message,
        }),
      });
      emailStatus = emailRes.ok ? "Success" : "Failed";
    }

    // Check if at least one method succeeded
    const isSuccess = 
      telegramStatus === "Success" || 
      twilioStatus === "Success" || 
      emailStatus === "Success";

    if (!isSuccess) {
      return NextResponse.json({ 
        success: false, 
        error: "No notification services are configured or all failed.",
        statuses: { telegram: telegramStatus, twilio: twilioStatus, email: emailStatus } 
      }, { status: 500 });
    }

    return NextResponse.json({ 
      success: true, 
      statuses: { telegram: telegramStatus, twilio: twilioStatus, email: emailStatus } 
    });
  } catch (error) {
    console.error("Error sending inquiry:", error);
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 });
  }
}
