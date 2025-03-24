import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    // Log the email
    console.log(`Test subscription received for: ${email}`);
    
    // Always return success
    return NextResponse.json(
      { message: 'Test subscription successful', email },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error in test subscription:', error);
    
    return NextResponse.json(
      { message: 'Error processing your test request' },
      { status: 500 }
    );
  }
} 