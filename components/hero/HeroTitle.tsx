import React from 'react';

interface HeroTitleProps {
  prefix?: string;
  highlight?: string;
  suffix?: string;
}

export const HeroTitle: React.FC<HeroTitleProps> = ({
  prefix = 'Track the',
  highlight = 'Vibe Coding',
  suffix = 'Market!',
}) => {
  return (
    <h1 className="text-center text-[3.5rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6rem] font-extrabold mb-0 sm:mb-2 leading-tight tracking-tight w-full mx-auto hero-title-text">
      <div className="flex flex-col items-center justify-center w-full text-center">
        <div className="w-full text-center mb-0 md:mb-2">
          <span className="inline-block text-white filter drop-shadow-[0_2px_20px_rgba(0,0,0,0.15)]">{prefix}</span>
        </div>
        <div className="w-full text-center pb-0 sm:pb-2">
          <span className="bg-gradient-to-r from-[#ffb347] to-[#ffa73d] inline-block text-transparent bg-clip-text filter drop-shadow-[0_2px_20px_rgba(0,0,0,0.15)] leading-[1.15] pb-0">{highlight}</span>
        </div>
        <div className="w-full text-center pb-0">
          <span className="text-white filter drop-shadow-[0_2px_20px_rgba(0,0,0,0.15)]">{suffix}</span>
        </div>
      </div>
    </h1>
  );
}; 