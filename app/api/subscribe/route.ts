import { NextResponse } from 'next/server';

// The API key should be in an environment variable in production
const MAILER_LITE_API_KEY = process.env.MAILER_LITE_API_KEY || "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiOGFjYzQzZTlkMjcwNTg4NDExNGNhMDdjOTViNDE1NTEwNzliODdkZTA2NDJjNGJiODRhMDhkOWExYzg4M2RiZjZmYzAxZTdmYjdjNzQ0YWYiLCJpYXQiOjE3NDQ4MTMyMzQuNDgyNzgyLCJuYmYiOjE3NDQ4MTMyMzQuNDgyNzksImV4cCI6NDkwMDQ4NjgzNC40NzI2NDQsInN1YiI6IjE0NjAxMzIiLCJzY29wZXMiOltdfQ.hszV6nonBt8xRPWdKj_utwfmEDIB1hG13fyXuQ4q2Indj00Oih9n4sQ_vogKs1XU3Sx60gDZZOnF3MNEMVVt0mzBD6lxws5s8IGicJtR2pgcaEv76vtnK7qjHZR0MYnDu_hTrbTrcpug5fEuaJ-FBrDp-BZhRVxdqbeZBg_RemWfC95IYVLZTtMCS4zFXmwKAC5VN7Sbx9kuKfjSQhhcmrlzZziY24kLaL-7DF60Kq_PXxHJ8LfmqhiuHoUIszVilNTcaxK56v5Q6BbQeQFLvRGKAFs7Zs8Fs-yzauZ95tDnWQ5fj3Egh_TeihZPmyonihVrWG6gWQ-cw1IDRIuhsRbF1GnbfhlgBSvEBjZKDUPB8I3JyIKOv4YeLcTp5QmfML1phJLoMjXqGEWW-yrGEhV1-plK9X2-xfM4m_Mp-eNFQME9PjbjQl0sVtW1HpZ3n5UB-yTfgp6xUy0IYvY4aP5DTLsyXawpPp5msFHC1FzPYvcrZ8UiCubPWxxrkhIiTz2X2XoNm7dHIxDP_qtuaZzz5my_kYJ4yzmRsD3l-iR16y49d2OYhVKOp_QXplZ7_N2cwL0QxZCp-9nrW2oCY68so9SjEqzWDn6BTwHmZ7W1g94CPudCjgLh1rhm5PoKRPxHBfIeq7AmruNh6JscFub99eXJQdX_Sll9H6Mn3Q8";

export async function POST(request: Request) {
  try {
    console.log("API Route called, API Key available:", !!MAILER_LITE_API_KEY);
    console.log("API Key starts with:", MAILER_LITE_API_KEY.substring(0, 10) + "...");
    
    const { email, coupon } = await request.json();
    
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
    if (coupon) {
      console.log(`Coupon code provided: ${coupon}`);
    }
    
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
          status: "active",
          fields: coupon ? { coupon } : undefined
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