import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor?: string;
  className?: string;
  index?: number;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  iconColor = '#00a693',
  className = '',
  index = 0,
}) => {
  return (
    <div 
      className={`relative group bg-white text-gray-800 p-4 sm:p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up ${className}`}
      style={{ animationDelay: `${800 + (index * 100)}ms` }}
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#ffc06b]/20 to-[#00b4a2]/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500"></div>
      <div className="relative">
        <div 
          className="inline-flex items-center justify-center p-2 sm:p-3 rounded-xl mb-3 sm:mb-5 bg-gradient-to-br from-white to-gray-50"
          style={{ boxShadow: `0 4px 12px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(255, 255, 255, 0.8), inset 0 -2px 3px ${iconColor}30` }}
        >
          <div style={{ color: iconColor }}>{icon}</div>
        </div>
        <h3 className="text-lg sm:text-xl font-bold mb-1 sm:mb-2">{title}</h3>
        <p className="text-sm sm:text-base text-gray-600">{description}</p>
      </div>
    </div>
  );
};

interface FeatureCardsProps {
  features: Array<{
    title: string;
    description: string;
    icon: React.ReactNode;
    iconColor?: string;
  }>;
  className?: string;
}

export const FeatureCards: React.FC<FeatureCardsProps> = ({
  features,
  className = '',
}) => {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 ${className}`}>
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          iconColor={feature.iconColor}
          index={index}
        />
      ))}
    </div>
  );
}; 