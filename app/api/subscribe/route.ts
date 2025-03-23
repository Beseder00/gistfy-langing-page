import { NextResponse } from 'next/server';

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

    // In a production application, you would:
    // 1. Save to database
    // 2. Send to email service provider like Mailchimp, ConvertKit, etc.
    // 3. Log analytics
    // 4. Send confirmation email
    
    // For now, we'll just log it (this will be visible in the server logs)
    console.log(`Subscription request received for: ${email}`);

    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
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