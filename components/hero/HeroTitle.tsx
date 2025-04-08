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
    <h1 className="text-center text-[3.5rem] sm:text-5xl md:text-6xl lg:text-[5.5rem] xl:text-[6rem] font-extrabold mb-0 sm:mb-2 leading-[0.95] sm:leading-tight tracking-tight w-full mx-auto hero-title-text">
      <div className="flex flex-col items-center justify-center w-full text-center">
        <div className="w-full text-center mb-0 md:mb-1">
          <span className="inline-block text-white filter drop-shadow-[0_2px_20px_rgba(0,0,0,0.15)]">{prefix}</span>
        </div>
        <div className="w-full text-center pb-0">
          <span className="bg-gradient-to-r from-[#ffc06b] to-[#ffbc60] inline-block text-transparent bg-clip-text filter drop-shadow-[0_2px_20px_rgba(0,0,0,0.15)] leading-[1.05] pb-0">{highlight}</span>{' '}
          <span className="text-white filter drop-shadow-[0_2px_20px_rgba(0,0,0,0.15)]">{suffix}</span>
        </div>
      </div>
    </h1>
  );
}; 