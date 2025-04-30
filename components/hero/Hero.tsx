import React, { useState } from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroTitle } from './HeroTitle';
import { EmailSubscription } from './EmailSubscription';
import { FeatureCards } from './FeatureCards';
import { Newspaper, Sparkles, Users, Mail } from 'lucide-react';
import { VibeComputer } from '@/components/custom-icons';
import { motion, useInView } from 'framer-motion';
import { FiCode, FiGithub, FiShare2 } from 'react-icons/fi';

interface HeroProps {
  email: string;
  setEmail: (email: string) => void;
  coupon: string;
  setCoupon: (coupon: string) => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
  title?: {
    prefix?: string;
    highlight?: string;
    suffix?: string;
  };
  description?: React.ReactNode;
  badgeText?: string;
  className?: string;
  subtitle?: string;
}

export const Hero: React.FC<HeroProps> = ({
  email,
  setEmail,
  coupon,
  setCoupon,
  onSubmit,
  isSubmitting = false,
  title = {
    prefix: 'Spot the',
    highlight: 'Next AI',
    suffix: 'Opportunity',
  },
  description = 'Built for Vibe Coders and Soloentrepreneurs who think ahead. iVibeTrends helps you spot trends early, and apply them to real-world problems.',
  badgeText = 'From Anywhere',
  className = '',
  subtitle,
}) => {
  const [isSubmittingState, setIsSubmittingState] = useState(isSubmitting);
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const features = [
    {
      title: "Daily Brief",
      description: "Get ahead of competitors with our AI that analyzes the top sources, delivering personalized insights before your morning coffee",
      icon: <Mail className="w-6 h-6" />,
      iconColor: "#10B981"
    },
    {
      title: "Tech Trends",
      description: "Spot emerging vibe coding market opportunities before they hit mainstream channels",
      icon: <Sparkles className="w-6 h-6" />,
      iconColor: "#F59E0B"
    },
    {
      title: "Vibe Coder Hub",
      description: "Discuss market signals and strategies with our elite vibe coding community",
      icon: <Users className="w-6 h-6" />,
      iconColor: "#8B5CF6"
    },
    {
      title: "Expert Insights",
      description: "Rank content of the day's best analysis from leading vibe coding leaders, investors and innovators",
      icon: <VibeComputer className="w-6 h-6" />,
      iconColor: "#06B6D4"
    }
  ];

  return (
    <motion.section
      ref={ref}
      className={`relative overflow-hidden min-h-screen bg-gradient-to-b from-[#00b4a2] via-[#00b4a2] to-[#ffc06b] ${className}`}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
    >
      <HeroBackground />
      
      <motion.div 
        className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24"
        variants={itemVariants}
      >
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            variants={itemVariants}
          >
            <HeroTitle 
              title={title}
              badgeText={badgeText}
            />
          </motion.div>
          <motion.div 
            className="mt-6 mb-8"
            variants={itemVariants}
          >
            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed font-medium drop-shadow-sm max-w-3xl mx-auto">
              {subtitle || description}
            </p>
          </motion.div>
          
          <motion.div
            variants={itemVariants}
            className="mt-10 flex justify-center items-center"
          >
            <EmailSubscription
              email={email}
              setEmail={setEmail}
              coupon={coupon}
              setCoupon={setCoupon}
              onSubmit={onSubmit}
              isSubmitting={isSubmittingState}
              className="max-w-md w-full mx-auto"
            />
          </motion.div>
        </div>
        
        <motion.div 
          className="mt-16"
          variants={itemVariants}
        >
          <FeatureCards
            features={features}
            columns={{ sm: 1, md: 2, lg: 2 }}
            className="gap-6 md:gap-8"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}; 