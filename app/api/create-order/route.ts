import { NextRequest, NextResponse } from 'next/server';

// NOTE: This is a placeholder API route for Razorpay order creation
// The user mentioned they have an existing backend endpoint
// This serves as a reference implementation

// In production, you would:
// 1. Install Razorpay SDK: npm install razorpay
// 2. Import Razorpay: import Razorpay from 'razorpay';
// 3. Initialize with your keys from environment variables

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();

    if (!amount || amount < 100) {
      return NextResponse.json(
        { error: 'Invalid amount. Minimum donation is ₹100' },
        { status: 400 }
      );
    }

    // PLACEHOLDER: Replace with actual Razorpay integration
    // Example implementation:
    /*
    const razorpay = new Razorpay({
      key_id: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const options = {
      amount: amount * 100, // Convert to paise
      currency: 'INR',
      receipt: `receipt_${Date.now()}`,
      notes: {
        purpose: 'IRPC Donation',
        timestamp: new Date().toISOString(),
      },
    };

    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      orderId: order.id,
      amount: order.amount,
      currency: order.currency,
    });
    */

    // Temporary mock response for development
    console.log('⚠️ MOCK RAZORPAY ORDER - Replace with actual implementation');

    return NextResponse.json({
      orderId: `order_mock_${Date.now()}`,
      amount: amount * 100,
      currency: 'INR',
      note: 'This is a mock order. Implement actual Razorpay integration.',
    });

  } catch (error) {
    console.error('Error creating Razorpay order:', error);
    return NextResponse.json(
      { error: 'Failed to create order' },
      { status: 500 }
    );
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  );
}
