import React, { useState } from 'react';
import { ArrowRight, Mail, Sparkles, CheckCircle2 } from 'lucide-react';

interface EmailSubscriptionProps {
  email: string;
  setEmail: (email: string) => void;
  coupon: string;
  setCoupon: (coupon: string) => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
  className?: string;
}

export function EmailSubscription({ email, setEmail, coupon, setCoupon, onSubmit, isSubmitting = false, className = '' }: EmailSubscriptionProps) {
  const [error, setError] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async () => {
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address');
      return;
    }

    setError('');
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, coupon }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Error submitting email');
      }

      setIsSuccess(true);
      setEmail('');
      setCoupon('');
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
      console.error('Error submitting email:', err);
    }
  };

  if (isSuccess) {
    return (
      <div className={`flex flex-col items-center justify-center gap-4 ${className}`}>
        <div className="bg-green-50 text-green-700 rounded-2xl p-6 text-center">
          <CheckCircle2 className="h-12 w-12 mx-auto mb-4 text-green-500" />
          <h3 className="text-lg font-semibold mb-2">Thanks for subscribing!</h3>
          <p className="text-sm text-green-600">We'll keep you updated on our latest features and releases.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="relative group">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 transition-colors group-focus-within:text-[#00b4a2]" />
        <input
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
          placeholder="Enter your email"
          className={`w-full pl-10 pr-4 py-3.5 rounded-2xl bg-white/95 backdrop-blur-sm border-2 ${error ? 'border-red-300' : 'border-transparent'} shadow-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#00b4a2]/20 focus:ring-1 focus:ring-[#00b4a2]/20 transition-all duration-200`}
        />
        {error && <p className="absolute -bottom-6 left-0 text-xs text-red-500">{error}</p>}
      </div>
      <div className="relative group">
        <input
          type="text"
          value={coupon}
          onChange={(e) => setCoupon(e.target.value)}
          placeholder="Coupon code (optional)"
          className="w-full pl-4 pr-4 py-3.5 rounded-2xl bg-white/95 backdrop-blur-sm border-2 border-transparent shadow-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#00b4a2]/20 focus:ring-1 focus:ring-[#00b4a2]/20 transition-all duration-200 mt-2"
        />
      </div>
      <div className="w-full text-left text-xs text-blue-700 bg-blue-50 rounded px-3 py-2 mb-2">
        🎉 <b>Special Offer:</b> Enter your coupon code above for lifetime access!
      </div>
      
      <button
        onClick={handleSubmit}
        disabled={isSubmitting}
        className={`relative w-full bg-gradient-to-r from-[#00b4a2] to-[#00a693] text-white font-semibold py-3.5 px-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00b4a2]/20 group overflow-hidden ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        <span className="relative flex items-center justify-center gap-2">
          {isSubmitting ? 'Subscribing...' : 'Get Early Access'}
          <Sparkles className="h-4 w-4 opacity-70 group-hover:opacity-100 transition-opacity" />
        </span>
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
      </button>
      <div className="flex items-center gap-2 justify-center text-sm">
        <div className="h-px flex-1 bg-white/10" />
        <p className="text-white/70">
          Join over <span className="text-white font-medium">500</span> vibe coders who have gained a competitive edge
        </p>
        <div className="h-px flex-1 bg-white/10" />
      </div>
    </div>
  );
} 