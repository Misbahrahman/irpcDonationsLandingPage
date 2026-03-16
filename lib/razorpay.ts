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

// Open Razorpay checkout (simplified - no backend order creation)
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

    // Razorpay options - direct payment without order creation
    const options: RazorpayOptions = {
      key: 'rzp_live_RSC2DE2QNKnazG',
      amount: amount * 100, // Convert to paise
      currency: 'INR',
      name: 'IRPC India',
      description: 'Donation',
      image: 'https://irpcindia.com/wp-content/uploads/2020/11/cropped-irpc-logo-copy-2.png',
      handler: onSuccess,
      prefill: {
        name: '',
        email: '',
        contact: '',
      },
      theme: {
        color: '#6366f1',
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
