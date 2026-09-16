import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();

        console.log("Received contact form:", body);

        const { name, email, subject, message } = body;

        const { data, error } = await resend.emails.send({
            from: "Gauri & Sankalpananda <onboarding@resend.dev>",
            to: [process.env.CONTACT_RECEIVER_EMAIL!],
            replyTo: email,
            subject: subject || "New contact form message",
            text: `
                Name: ${name}
                Email: ${email}

                Message:
                ${message}
            `,
        });

        if (error) {
            console.error("Resend error:", error);

            return NextResponse.json(
                { message: "Failed to send email." },
                { status: 500 }
            );
        }

        console.log("Email sent:", data);

        return NextResponse.json(
            { message: "Message sent successfully." },
            { status: 200 }
        );
    } catch (error) {
        console.error("Contact API error:", error);

        return NextResponse.json(
            { message: "Something went wrong." },
            { status: 500 }
        );
    }
}