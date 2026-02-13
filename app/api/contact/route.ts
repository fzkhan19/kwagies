
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(10),
  guests: z.string(),
  date: z.string(),
  requests: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, phone, guests, date, requests } = formSchema.parse(body);

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.ethereal.email",
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === "465", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || "ethereal_user",
        pass: process.env.SMTP_PASS || "ethereal_pass",
      },
    });

    const mailOptions = {
      from: process.env.SMTP_FROM || '"Kwagies Website" <noreply@kwagies.com>',
      to: process.env.SMTP_TO || "reservations@kwagies.com",
      subject: `New Reservation from ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Guests: ${guests}
        Date: ${new Date(date).toLocaleDateString()}
        Requests: ${requests || "None"}
      `,
      html: `
        <h1>New Reservation Request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Guests:</strong> ${guests}</p>
        <p><strong>Date:</strong> ${new Date(date).toLocaleDateString()}</p>
        <p><strong>Special Requests:</strong> ${requests || "None"}</p>
      `,
    };

    if (!process.env.SMTP_USER) {
      console.log("Simulating email send (no credentials provided):", mailOptions);
      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      return NextResponse.json({ success: true, message: "Reservation simulated!" });
    }

    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully!");

    return NextResponse.json({ success: true, message: "Reservation email sent!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send reservation." },
      { status: 500 }
    );
  }
}
