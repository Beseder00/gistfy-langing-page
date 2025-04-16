import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Parse the JSON data from the request
    const data = await request.json();
    
    // Log the received data (for development purposes)
    console.log('Received data:', data);
    
    // Process the data - add your custom logic here
    
    // Return a success response
    return NextResponse.json(
      { 
        success: true, 
        message: 'Data received successfully',
        receivedData: data 
      }, 
      { status: 200 }
    );
  } catch (error) {
    // Handle any errors
    console.error('Error processing request:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Failed to process the request' 
      }, 
      { status: 500 }
    );
  }
} 