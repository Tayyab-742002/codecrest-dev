import { NextResponse } from "next/server";
import { Resend } from "resend";
import { render } from "@react-email/render";
import { ContactSubmissionEmail } from "@/src/emails/contact-submission";
import {
  CONTACT_EMAIL,
  CONTACT_DISPLAY_NAME,
} from "@/src/lib/constants/contact";

export const runtime = "nodejs";

type ContactRequestBody = {
  name?: string;
  email?: string;
  message?: string;
};

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 500 }
      );
    }

    /**
     * Resend requires the **sender** domain (`from`) to be a verified domain in your Resend account.
     * You can still deliver to Gmail/Outlook/etc via `to`.
     */
    const toEmail = (process.env.CONTACT_TO_EMAIL ?? CONTACT_EMAIL).trim();
    const fromEmail = process.env.RESEND_FROM_EMAIL?.trim();
    const fromName =
      (process.env.RESEND_FROM_NAME ?? CONTACT_DISPLAY_NAME).trim();

    if (!toEmail) {
      return NextResponse.json(
        { error: "Recipient email is not configured." },
        { status: 500 }
      );
    }

    if (!fromEmail) {
      return NextResponse.json(
        {
          error:
            "Sender email is not configured. Set RESEND_FROM_EMAIL to an address on your verified domain (e.g. no-reply@yourdomain.com).",
        },
        { status: 500 }
      );
    }

    if (/@gmail\.com$/i.test(fromEmail)) {
      return NextResponse.json(
        {
          error:
            "Invalid RESEND_FROM_EMAIL: gmail.com cannot be used as a sender domain in Resend. Use an address on your verified domain for the FROM field; Gmail can be used as the TO recipient.",
        },
        { status: 500 }
      );
    }

    const body = (await request.json()) as ContactRequestBody;
    const name = body.name?.trim();
    const email = body.email?.trim();
    const message = body.message?.trim();

    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Name, email, and message are required.",
        },
        { status: 400 }
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // Render the React email component to HTML
    const emailHtml = await render(
      ContactSubmissionEmail({
        name,
        email,
        message,
        inboxEmail: toEmail,
        brandName: fromName,
      })
    );

    const result = await resend.emails.send({
      from: `${fromName} <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New contact inquiry from ${name}`,
      html: emailHtml,
    });

    // Check if Resend returned an error
    if (result.error) {
      console.error("Resend API error:", result.error);
      return NextResponse.json(
        {
          error: result.error.message || "Failed to send email. Please check your Resend configuration.",
        },
        { status: 500 }
      );
    }

    console.log("Email sent successfully:", result.data);

    return NextResponse.json(
      { success: true, message: "Message sent successfully." },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";
    return NextResponse.json(
      {
        error: `We could not send your message: ${errorMessage}. Please check your Resend API key and domain verification.`,
      },
      { status: 500 }
    );
  }
}

