import React from 'react';
import { ArrowRight, Mail } from 'lucide-react';

interface EmailSubscriptionProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
  className?: string;
}

export const EmailSubscription: React.FC<EmailSubscriptionProps> = ({
  email,
  setEmail,
  onSubmit,
  isSubmitting = false,
  className = '',
}) => {
  return (
    <div className={`w-full ${className}`}>
      <div className="backdrop-blur-sm bg-white/10 rounded-2xl shadow-xl p-3 sm:p-5 border border-white/20">
        <div className="flex items-center gap-2 mb-3 text-white">
          <Mail className="h-5 w-5" />
          <span className="font-medium">Get Your Competitive Edge:</span>
        </div>
        
        <div className="relative">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 sm:p-4 pr-14 sm:pr-20 rounded-xl bg-white/95 border border-white/50 shadow-inner text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-[#ffc06b]/50 transition-all duration-300"
          />
          
          <button
            onClick={onSubmit}
            disabled={isSubmitting}
            className="absolute right-1 sm:right-1.5 top-1 sm:top-1.5 px-2.5 sm:px-3.5 py-2 sm:py-2.5 rounded-lg bg-gradient-to-r from-[#ffbc60] to-[#ffc06b] text-white font-medium hover:from-[#ffc06b] hover:to-[#ffd08e] transition-all duration-300 flex items-center gap-1 group shadow-lg hover:shadow-[#ffc06b]/30"
          >
            <span>Join</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
        
        <p className="text-white/80 text-xs sm:text-sm mt-3 text-center">
          <span className="inline-block mr-1">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 inline" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </span>
          Join over 500 vibe coders and AI builders getting an edge
        </p>
      </div>
    </div>
  );
}; 