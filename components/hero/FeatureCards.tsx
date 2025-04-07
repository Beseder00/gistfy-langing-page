import React from 'react';
import { FeatureCard as FeatureCardComponent } from './FeatureCard';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor?: string;
  bgColor?: string;
  textColor?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  iconColor = '#00a693',
  bgColor = '#ffffff',
  textColor = '#004d41'
}) => {
  return (
    <div className="bg-white/95 p-6 sm:p-8 rounded-lg shadow-lg hover:shadow-xl transition-all hover:translate-y-[-2px] border border-[#004d41]/5 relative overflow-hidden group">
      <div 
        className="text-[#004d41] font-bold text-lg sm:text-xl mb-3 flex items-center relative z-10"
        style={{ color: textColor }}
      >
        <div className="mr-3 h-7 w-7 sm:h-8 sm:w-8 flex items-center justify-center bg-white p-1.5 rounded-lg" style={{ color: iconColor }}>
          {icon}
        </div>
        {title}
      </div>
      <p 
        className="leading-relaxed text-sm sm:text-base relative z-10"
        style={{ color: textColor }}
      >
        {description}
      </p>
      <div className="absolute top-0 right-0 h-16 w-16 bg-gradient-to-bl from-[#ffffff]/20 to-transparent transform rotate-12 -translate-y-1/2 translate-x-1/2 rounded-full opacity-50"></div>
    </div>
  );
};

interface FeatureCardsProps {
  features: FeatureCardProps[];
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
}

export const FeatureCards: React.FC<FeatureCardsProps> = ({
  features,
  columns = { sm: 1, md: 2, lg: 2 }
}) => {
  const getGridCols = () => {
    let classes = 'grid-cols-1';
    if (columns.sm) classes += ` sm:grid-cols-${columns.sm}`;
    if (columns.md) classes += ` md:grid-cols-${columns.md}`;
    if (columns.lg) classes += ` lg:grid-cols-${columns.lg}`;
    return classes;
  };

  return (
    <div className={`grid ${getGridCols()} gap-6 max-w-5xl mx-auto mt-8 opacity-100 transition-opacity`}>
      {features.map((feature, index) => (
        <FeatureCardComponent key={index} {...feature} />
      ))}
    </div>
  );
}; 