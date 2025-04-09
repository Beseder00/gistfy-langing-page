import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor: string;
}

function FeatureCard({ title, description, icon, iconColor }: FeatureCardProps) {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
        <div 
          className="shrink-0 p-2.5 rounded-xl shadow-sm ring-1 ring-black/5 mb-2 sm:mb-0"
          style={{ 
            backgroundColor: `${iconColor}15`,
            color: iconColor,
            boxShadow: `0 2px 4px ${iconColor}10, inset 0 1px 2px ${iconColor}15`
          }}
        >
          {icon}
        </div>
        <div className="text-center sm:text-left">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1.5 sm:mb-2">{title}</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}

interface FeatureCardsProps {
  features: {
    title: string;
    description: string;
    icon: React.ReactNode;
    iconColor: string;
  }[];
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
  className?: string;
}

export function FeatureCards({ features, columns = { sm: 1, md: 2, lg: 2 }, className = '' }: FeatureCardsProps) {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 ${className}`}>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          iconColor={feature.iconColor}
        />
      ))}
    </div>
  );
} 