import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor?: string;
  bgColor?: string;
  textColor?: string;
  className?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  iconColor = '#00a693',
  bgColor = '#ffffff',
  textColor = '#004d41',
  className
}) => {
  return (
    <div className="bg-white/95 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px] border border-[#004d41]/5 relative overflow-hidden group">
      <div 
        className="text-[#004d41] font-bold text-lg sm:text-xl mb-3 flex items-start relative z-10"
        style={{ color: textColor }}
      >
        <div 
          className="mr-3 h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center bg-white p-1.5 rounded-lg" 
          style={{ 
            color: iconColor,
            boxShadow: `0 2px 4px ${iconColor}30, inset 0 1px 2px rgba(255,255,255,0.9)`,
            background: `linear-gradient(to bottom, white, ${iconColor}05)`,
            border: `1px solid ${iconColor}15`
          }}
        >
          {icon}
        </div>
        <div className="text-left">{title}</div>
      </div>
      <p 
        className="leading-relaxed text-sm sm:text-base relative z-10 text-left"
        style={{ color: textColor }}
      >
        {description}
      </p>
      <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-[#ffffff]/20 to-transparent transform rotate-12 -translate-y-1/2 translate-x-1/2 rounded-full opacity-50"></div>
    </div>
  );
}; 