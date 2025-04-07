import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Users } from "lucide-react";

interface EmailSubscriptionProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
  buttonText?: string;
  inputPlaceholder?: string;
  buttonBgColor?: string;
  buttonHoverColor?: string;
  inputBgColor?: string;
  inputTextColor?: string;
}

export const EmailSubscription: React.FC<EmailSubscriptionProps> = ({
  email,
  setEmail,
  onSubmit,
  isSubmitting = false,
  buttonText = 'Join',
  inputPlaceholder = 'Enter your email',
  buttonBgColor = '#ff8a20',
  buttonHoverColor = '#e67400',
  inputBgColor = '#ffffff',
  inputTextColor = '#004d41',
}) => {
  return (
    <div className="flex flex-col gap-2 w-full max-w-lg px-1 mb-0 relative">
      {/* Email label */}
      <div className="text-white text-base font-semibold mb-0.5 px-1 flex items-center">
        <Mail className="mr-2 h-4 w-4" />
        Get early access:
      </div>
      
      <div className="relative">
        <Input
          type="email"
          placeholder={inputPlaceholder}
          className="py-4 px-4 text-base border-2 border-white/30 focus:border-[#ff8a20] rounded-lg shadow-md font-medium focus:outline-none focus:ring-1 focus:ring-[#ff8a20]/30 transition-all duration-300"
          style={{ backgroundColor: inputBgColor, color: inputTextColor }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      
      <Button
        className="py-3 w-full rounded-lg font-bold shadow-md transition-all duration-300 text-base text-white relative overflow-hidden"
        style={{ 
          backgroundColor: buttonBgColor
        }}
        onClick={onSubmit}
        disabled={isSubmitting}
      >
        <span className="relative z-10 flex items-center justify-center">
          {isSubmitting ? 'Subscribing...' : buttonText}
          {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
        </span>
      </Button>
      
      <p className="text-white/80 text-center text-xs mt-1 flex items-center justify-center">
        <Users className="mr-1 h-3 w-3 opacity-80" />
        Join over 500 vibe coders and AI builders getting an edge
      </p>
    </div>
  );
}; 