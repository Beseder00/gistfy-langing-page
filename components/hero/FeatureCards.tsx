import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconColor?: string;
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
  columns = { sm: 1, md: 2, lg: 2 },
  className = '',
}) => {
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 10,
      },
    },
  };

  const getGridCols = () => {
    const { sm = 1, md = 2, lg = 2 } = columns;
    return `grid grid-cols-1 sm:grid-cols-${sm} md:grid-cols-${md} lg:grid-cols-${lg}`;
  };

  return (
    <div className={cn(getGridCols(), className)}>
      {features.map((feature, index) => (
        <motion.div
          key={feature.title}
          className="relative p-6 bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 shadow-xl"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          custom={index}
        >
          <motion.div
            className="mb-4 inline-block"
            variants={iconVariants}
            style={{ color: feature.iconColor }}
          >
            {feature.icon}
          </motion.div>
          <h3 className="text-xl font-semibold text-white mb-2">
            {feature.title}
          </h3>
          <p className="text-white/80">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}; 