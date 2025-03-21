import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Invalid email address" }, { status: 400 })
    }

    const MAILER_LITE_API_KEY = process.env.MAILER_LITE_API_KEY

    if (!MAILER_LITE_API_KEY) {
      return NextResponse.json({ error: "API key not configured" }, { status: 500 })
    }

    const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${MAILER_LITE_API_KEY}`,
      },
      body: JSON.stringify({
        email: email,
        // You can add more fields here like:
        // groups: ['group_id'],
        // status: 'active',
        // fields: { name: 'John Doe' }
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return NextResponse.json({ error: data.message || "Failed to subscribe" }, { status: response.status })
    }

    return NextResponse.json({ message: "Successfully subscribed to newsletter" }, { status: 201 })
  } catch (error) {
    console.error("Subscription error:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

