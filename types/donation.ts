export interface DonationAmount {
  value: number;
  label: string;
}

export interface RazorpayOptions {
  key: string;
  amount: number;
  currency: string;
  name: string;
  description: string;
  image?: string;
  order_id?: string;
  handler: (response: RazorpayResponse) => void;
  prefill?: {
    name?: string;
    email?: string;
    contact?: string;
  };
  theme?: {
    color: string;
  };
}

export interface RazorpayResponse {
  razorpay_payment_id: string;
  razorpay_order_id: string;
  razorpay_signature: string;
}

export interface DonationFormData {
  amount: number;
  name?: string;
  email?: string;
  phone?: string;
}

export interface ImpactStat {
  value: string;
  label: string;
  icon?: React.ReactNode;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}
