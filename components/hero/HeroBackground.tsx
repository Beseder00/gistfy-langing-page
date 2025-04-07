import React from 'react';
import Image from 'next/image';

interface HeroBackgroundProps {
  className?: string;
}

export const HeroBackground: React.FC<HeroBackgroundProps> = ({ 
  className = '' 
}) => {
  return (
    <div className={`absolute inset-0 z-0 overflow-hidden ${className}`}>
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image 
          src="/images/background.jpeg" 
          alt="Background" 
          fill 
          priority
          className="object-cover"
        />
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#19b8a6]/70 to-[#ffae44]/80"></div>
      </div>
      
      {/* Dramatic light rays effect */}
      <div className="absolute top-0 left-0 right-0 h-[60%] bg-gradient-to-b from-white/10 to-transparent"></div>
      
      {/* Dynamic diagonal overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-[#004d41]/30 via-transparent to-transparent"></div>
      
      {/* Horizon with stronger contrast */}
      <div className="absolute top-[65%] left-0 right-0 h-[35%] bg-gradient-to-b from-[#ffae44]/50 to-[#ff8a20]/90"></div>
      
      {/* Abstract light patterns */}
      <div className="absolute top-[20%] left-[10%] w-[40%] h-[30%] bg-white/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-[20%] right-[15%] w-[25%] h-[20%] bg-white/5 rounded-full blur-3xl"></div>
      
      {/* Subtle texture overlay for depth */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjZmZmIj48L3JlY3Q+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiMwMDAiPjwvcmVjdD4KPC9zdmc+')] opacity-[0.02]"></div>
    </div>
  );
}; 