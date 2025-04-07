import { NextResponse } from 'next/server';

// The API key should be in an environment variable in production
const MAILER_LITE_API_KEY = process.env.MAILER_LITE_API_KEY || "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiNjNlOWMwZjBjNTcyMzY0MmY2ZTQ4Yzk5ZGY5MTA2Yzc2YzJkNmI3ZDNjMjlkNmU3NTJhMjViMjViNTZjOTM5Njk0ZmQ4YjgwNGQ3ZmFkMzUiLCJpYXQiOjE3NDQwMTcyNzAuMTY1NTkyLCJuYmYiOjE3NDQwMTcyNzAuMTY1NTk1LCJleHAiOjQ4OTk2OTA4NzAuMTU4OTQzLCJzdWIiOiIxNDAyMDU1Iiwic2NvcGVzIjpbXX0.UuTSqwZ8uO1XvScrS6dHpbh730YR8Tt5Ijk9KtH-FrbNAQERpM543vjEg3Gm6WmYe3Btla77IwriV7fenTqJxHn-W2vFAeiJtazd0LQY_EWROL6-6hsfp2OtlL_uW8LBdLf1-ASqrA6LkXpDBUuekPbtYo5Lu4yOjjE8MpGLeTmX99JNc5GGM5JNjo7lushLrKO4jejiOhozp6cKBw64pERRttxYs4GELRccZG-piRWG5vSOe-b_KnPrrY_weZQIIS152m86Wj14RNxVlORqjvN20vmeFcmx5yFx58gXgNzJVELYpu0LCH60hFB7S1vL1vmYEt1gGa_407h4I0POQglhTw--bzzcqZZSUVLKX7ZBQ1XSnK0fSDnntTe5UAKaLkvFjPzOAFeMzBG7-7bExmJH8_1i285NSnWJdbN1uvHS4ohkAcmYArIDQHJt0VJf9IJnwDvAEBLKAK39W-MGulySGoeCsx4AfLeKm95rWX0vKio2Dc-CTwyuaCYzrNLXKRLJ5TUn7OHHs3VQmaJW2C5u5du4VIuTFqjsCw_pLz0vtiJ1XDypgOlbI6oPkQdlFzWUmATY70IMkTOS2i0r-zUcygz4SYSaO62YvsUasJCeY9RwiP5FsJqT5feQO1oS9zGQV01jhOq-Tv922gh6LmGr1p-SG2svbk5DxWpxkuo";

export async function POST(request: Request) {
  try {
    console.log("API Route called, API Key available:", !!MAILER_LITE_API_KEY);
    console.log("API Key starts with:", MAILER_LITE_API_KEY.substring(0, 10) + "...");
    
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