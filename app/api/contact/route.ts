
import { NextResponse } from "next/server";
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

    // Log the reservation (replace with a Cloudflare-compatible email service like Resend later)
    console.log("New reservation:", { name, email, phone, guests, date, requests });

    // TODO: Integrate with Resend, Mailgun, or Cloudflare Email Workers
    // For now, simulate success
    await new Promise((resolve) => setTimeout(resolve, 500));

    return NextResponse.json({ success: true, message: "Reservation received!" });
  } catch (error) {
    console.error("Error processing reservation:", error);
    return NextResponse.json(
      { success: false, message: "Failed to process reservation." },
      { status: 500 }
    );
  }
}
