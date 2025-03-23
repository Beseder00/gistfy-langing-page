import { NextResponse } from 'next/server';

// The API key should be in an environment variable in production
const MAILER_LITE_API_KEY = process.env.MAILER_LITE_API_KEY || "YOUR_API_KEY_HERE";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    // Validate email
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log it for debugging
    console.log(`Subscription request received for: ${email}`);
    
    try {
      // Add subscriber to MailerLite
      const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${MAILER_LITE_API_KEY}`
        },
        body: JSON.stringify({
          email: email,
          groups: ["gistify-waitlist"], // Replace with your actual group ID
          status: "active"
        })
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        console.error("MailerLite API error:", result);
        throw new Error(result.message || "Error adding subscriber to MailerLite");
      }
      
      console.log("MailerLite API success:", result);
    } catch (apiError) {
      console.error("Error calling MailerLite API:", apiError);
      // We'll still return success to the user
    }
    
    // Return success
    return NextResponse.json(
      { message: 'Subscription successful', email },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing subscription:', error);
    
    return NextResponse.json(
      { message: 'Error processing your request' },
      { status: 500 }
    );
  }
} 