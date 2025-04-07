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
  suffix = 'Market From Anywhere!',
  prefixColor = '#ffffff',
  highlightColor = '#ffb347',
  suffixColor = '#ffffff',
  className = '',
}) => {
  // Split the suffix to make 'From Anywhere!' smaller
  const mainSuffix = suffix.split('From')[0]; // "Market "
  const smallerText = suffix.includes('From') ? `From${suffix.split('From')[1]}` : ''; // "From Anywhere!"

  return (
    <div className="relative">
      {/* Enhanced background gradient for better contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#004d41]/25 to-[#004d41]/5 blur-xl rounded-full -z-10"></div>
      
      <h1 className={`hero-title-text text-center text-[2.5rem] xs:text-[3rem] sm:text-5xl md:text-5xl lg:text-6xl xl:text-6xl font-extrabold mb-6 sm:mb-8 leading-[1.1] sm:leading-[1.05] tracking-tight w-full max-w-[100%] px-2 mx-auto relative z-10 ${className}`}>
        {/* Mobile layout: stacked */}
        <div className="sm:hidden flex flex-col items-center justify-center gap-y-1">
          <span 
            style={{ 
              color: prefixColor, 
              textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)' 
            }} 
            className="bg-gradient-to-b from-white to-white/85 bg-clip-text"
          >
            {prefix}
          </span>
          
          <div className="flex items-center gap-x-2">
            <span 
              style={{ 
                color: highlightColor, 
                textShadow: '0 3px 6px rgba(0, 0, 0, 0.3)'
              }}
              className="bg-gradient-to-b from-[#ffb347] to-[#ff8a20] bg-clip-text"
            >
              {highlight}
            </span>
            <span 
              style={{ 
                color: suffixColor, 
                textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)'
              }}
              className="bg-gradient-to-b from-white to-white/85 bg-clip-text"
            >
              {mainSuffix}
            </span>
          </div>
          
          <span 
            className="text-[60%] font-bold opacity-90 bg-white/15 py-1 px-2 rounded-full mt-0.5 tracking-wide" 
            style={{ 
              color: suffixColor,
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.15)'
            }}
          >
            {smallerText}
          </span>
        </div>
        
        {/* Desktop layout: inline */}
        <div className="hidden sm:block">
          <span 
            style={{ 
              color: prefixColor, 
              textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)' 
            }} 
            className="bg-gradient-to-b from-white to-white/85 bg-clip-text"
          >
            {prefix}
          </span>{' '}
          
          <span 
            className="relative" 
            style={{ 
              color: highlightColor, 
              textShadow: '0 3px 6px rgba(0, 0, 0, 0.3)'
            }}
          >
            <span className="relative z-10 bg-gradient-to-b from-[#ffb347] to-[#ff8a20] bg-clip-text">
              {highlight}
            </span>
            <span className="absolute -inset-1 bg-gradient-to-r from-[#ffb347]/0 via-[#ffb347]/20 to-[#ffb347]/0 blur-md -z-10 rounded-lg"></span>
          </span>{' '}
          
          <span 
            style={{ 
              color: suffixColor, 
              textShadow: '0 3px 6px rgba(0, 0, 0, 0.4)'
            }}
            className="bg-gradient-to-b from-white to-white/85 bg-clip-text"
          >
            {mainSuffix}
          </span>
          
          <span 
            className="text-[50%] font-bold opacity-95 bg-white/15 py-1 px-3 rounded-full ml-1 inline-block align-middle translate-y-[-8px] tracking-wide" 
            style={{ 
              color: suffixColor,
              textShadow: '0 1px 2px rgba(0, 0, 0, 0.3)',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.15)'
            }}
          >
            {smallerText}
          </span>
        </div>
      </h1>
    </div>
  );
}; 