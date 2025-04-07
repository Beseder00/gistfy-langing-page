import React from 'react';

interface HeroTitleProps {
  prefix?: string;
  highlight?: string;
  suffix?: string;
  prefixColor?: string;
  highlightColor?: string;
  suffixColor?: string;
  className?: string;
}

export const HeroTitle: React.FC<HeroTitleProps> = ({
  prefix = 'Track the',
  highlight = 'Vibe Coding',
  suffix = 'Market.',
  prefixColor = '#ffffff',
  highlightColor = '#ffb347',
  suffixColor = '#ffffff',
  className = '',
}) => {
  return (
    <div className="relative">
      {/* Very subtle background gradient for better contrast */}
      <div className="absolute inset-0 bg-[#004d41]/15 blur-xl rounded-full -z-10"></div>
      
      <h1 className={`hero-title-text text-center text-[2.5rem] xs:text-[3rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 sm:mb-8 leading-[1] tracking-tighter w-full max-w-[100%] px-2 mx-auto relative z-10 ${className}`}>
        <span style={{ 
          color: prefixColor,
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
        }} className="block sm:inline">{prefix}</span>{' '}
        <span className="block my-2 sm:inline sm:my-0 relative" 
          style={{ 
            color: highlightColor,
            textShadow: '0 1px 3px rgba(0, 0, 0, 0.25)'
          }}>
          {highlight}
          <span className="absolute -inset-1 bg-gradient-to-r from-[#ffb347]/0 via-[#ffb347]/10 to-[#ffb347]/0 blur-sm -z-10 rounded-lg hidden sm:block"></span>
        </span>{' '}
        <span style={{ 
          color: suffixColor,
          textShadow: '0 1px 3px rgba(0, 0, 0, 0.3)'
        }} className="block sm:inline">{suffix}</span>
      </h1>
    </div>
  );
}; 