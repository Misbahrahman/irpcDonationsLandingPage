import { RazorpayOptions, RazorpayResponse } from '@/types/donation';

// Load Razorpay script
export const loadRazorpayScript = (): Promise<boolean> => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = 'https://checkout.razorpay.com/v1/checkout.js';
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
};

// Create Razorpay order
export const createRazorpayOrder = async (amount: number): Promise<any> => {
  try {
    const response = await fetch('/api/create-order', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount }),
    });

    if (!response.ok) {
      throw new Error('Failed to create order');
    }

    return await response.json();
  } catch (error) {
    console.error('Error creating order:', error);
    throw error;
  }
};

// Open Razorpay checkout
export const openRazorpayCheckout = async (
  amount: number,
  onSuccess: (response: RazorpayResponse) => void,
  onFailure?: (error: any) => void
): Promise<void> => {
  try {
    // Load Razorpay script
    const isLoaded = await loadRazorpayScript();
    if (!isLoaded) {
      throw new Error('Failed to load Razorpay SDK');
    }

    // Create order
    const orderData = await createRazorpayOrder(amount);

    // Razorpay options
    const options: RazorpayOptions = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '',
      amount: amount * 100, // Convert to paise
      currency: 'INR',
      name: 'Islamic Research & Propagation Center',
      description: 'Support Dawah & Change Lives',
      order_id: orderData.orderId,
      handler: onSuccess,
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      theme: {
        color: '#1E4ED8',
      },
    };

    const razorpay = new window.Razorpay(options);

    razorpay.on('payment.failed', (response: any) => {
      if (onFailure) {
        onFailure(response.error);
      }
    });

    razorpay.open();
  } catch (error) {
    console.error('Razorpay checkout error:', error);
    if (onFailure) {
      onFailure(error);
    }
  }
};

// Format currency
export const formatCurrency = (amount: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};
