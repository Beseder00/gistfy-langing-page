import { NextResponse } from 'next/server';

// In a production environment, this should be stored in environment variables
// Add this to your .env.local file:
// MAILER_LITE_API_KEY=your_api_key_here
const MAILER_LITE_API_KEY = process.env.MAILER_LITE_API_KEY || "YOUR_MAILERLITE_API_KEY_HERE";

export async function POST(request: Request) {
  try {
    // Check if API key is properly configured
    if (!MAILER_LITE_API_KEY || MAILER_LITE_API_KEY === "YOUR_MAILERLITE_API_KEY_HERE") {
      console.error("MailerLite API key not configured");
      return NextResponse.json(
        { message: 'Email service not configured. Please set up the API key.' },
        { status: 503 }
      );
    }
    
    console.log("API Route called, API Key available:", !!MAILER_LITE_API_KEY);
    
    const { email } = await request.json();
    
    // Validate email
    if (!email || typeof email !== 'string' || !email.includes('@')) {
      console.error("Invalid email format:", email);
      return NextResponse.json(
        { message: 'Invalid email address' },
        { status: 400 }
      );
    }

    // Log it for debugging
    console.log(`Subscription request received for: ${email}`);
    
    try {
      // Add subscriber to MailerLite
      console.log("Attempting to call MailerLite API...");
      const response = await fetch("https://connect.mailerlite.com/api/subscribers", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json",
          "Authorization": `Bearer ${MAILER_LITE_API_KEY}`
        },
        body: JSON.stringify({
          email: email,
          status: "active"
        })
      });
      
      const result = await response.json();
      
      if (!response.ok) {
        console.error("MailerLite API error status:", response.status);
        console.error("MailerLite API error details:", result);
        throw new Error(result.message || "Error adding subscriber to MailerLite");
      }
      
      console.log("MailerLite API success:", result);
      return NextResponse.json(
        { message: 'Subscription successful', email },
        { status: 200 }
      );
    } catch (apiError) {
      console.error("Error calling MailerLite API:", apiError);
      // Return a more specific error for API issues
      return NextResponse.json(
        { message: 'Error connecting to email service. Your subscription was not processed.' },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error('Error processing subscription:', error);
    
    return NextResponse.json(
      { message: 'Error processing your request' },
      { status: 500 }
    );
  }
} 