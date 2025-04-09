import React from 'react';

interface HeroTitleProps {
  title: {
    prefix?: string;
    highlight?: string;
    suffix?: string;
  };
  badgeText: string;
}

export function HeroTitle({ title, badgeText }: HeroTitleProps) {
  return (
    <div className="text-center">
      {/* Badge */}
      <div className="mt-8 mb-6">
        <span className="inline-block bg-white/20 text-white px-4 py-1.5 rounded-full text-sm backdrop-blur-sm">
          {badgeText}
        </span>
      </div>
      
      {/* Title */}
      <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-extrabold text-white leading-[1.1] tracking-tight">
        <span className="inline-block mb-2">
          <span className="text-white drop-shadow-sm">{title.prefix} </span>
          <span className="text-[#ffc06b] drop-shadow-sm">{title.highlight}</span>
        </span>
        <span className="block drop-shadow-sm">{title.suffix}</span>
      </h1>
    </div>
  );
} 