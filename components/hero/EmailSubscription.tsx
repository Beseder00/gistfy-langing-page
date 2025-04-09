import React from 'react';
import { ArrowRight, Mail, Sparkles } from 'lucide-react';

interface EmailSubscriptionProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
  className?: string;
}

export function EmailSubscription({ email, setEmail, onSubmit, isSubmitting = false, className = '' }: EmailSubscriptionProps) {
  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      <div className="relative group">
        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 transition-colors group-focus-within:text-[#00b4a2]" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full pl-10 pr-4 py-3.5 rounded-2xl bg-white/95 backdrop-blur-sm border-2 border-transparent shadow-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:border-[#00b4a2]/20 focus:ring-1 focus:ring-[#00b4a2]/20 transition-all duration-200"
        />
      </div>
      
      <div className="space-y-3">
        <button
          onClick={onSubmit}
          disabled={isSubmitting}
          className="relative w-full bg-gradient-to-r from-[#00b4a2] to-[#00a693] text-white font-semibold py-3.5 px-6 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#00b4a2]/20 group overflow-hidden"
        >
          <span className="relative flex items-center justify-center gap-2">
            Get Early Access
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
    </div>
  );
} 