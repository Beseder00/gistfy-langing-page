import React from 'react';
import { cn } from '@/lib/utils';
import { FeatureCard } from './FeatureCard';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor?: string;
  bgColor?: string;
  textColor?: string;
}

interface FeatureCardsProps {
  features: Feature[];
  columns?: {
    sm?: number;
    md?: number;
    lg?: number;
  };
  className?: string;
}

export const FeatureCards: React.FC<FeatureCardsProps> = ({
  features,
  columns = { sm: 1, md: 2, lg: 3 },
  className = '',
}) => {
  const getGridCols = () => {
    const { sm = 1, md = 2, lg = 3 } = columns;
    return `grid grid-cols-1 sm:grid-cols-${sm} md:grid-cols-${md} lg:grid-cols-${lg}`;
  };

  return (
    <div className={cn(getGridCols(), 'gap-6 md:gap-8', className)}>
      {features.map((feature, index) => (
        <FeatureCard
          key={feature.title}
          title={feature.title}
          description={feature.description}
          icon={feature.icon}
          iconColor={feature.iconColor}
          bgColor={feature.bgColor}
          textColor={feature.textColor}
        />
      ))}
    </div>
  );
}; 