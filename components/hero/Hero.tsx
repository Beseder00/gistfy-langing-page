import React from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroTitle } from './HeroTitle';
import { EmailSubscription } from './EmailSubscription';
import { FeatureCards } from './FeatureCards';
import { Newspaper, Sparkles, Users, Mail } from 'lucide-react';
import { VibeComputer } from '@/components/custom-icons';

interface HeroProps {
  email: string;
  setEmail: (email: string) => void;
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
}

export const Hero: React.FC<HeroProps> = ({
  email,
  setEmail,
  onSubmit,
  isSubmitting = false,
  title = {
    prefix: 'Spot the',
    highlight: 'Next AI',
    suffix: 'Opportunity',
  },
  description = 'Built for Vibe Coders who think ahead. VibeIndex helps you spot trends early, and apply them to real-world problems.',
  badgeText = 'From Anywhere',
  className = '',
}) => {
  const features = [
    {
      title: 'Daily Brief',
      description: 'Get ahead of competitors with our AI that analyzes the top sources, delivering personalized insights before your morning coffee',
      icon: <Newspaper className="h-6 w-6" />,
      iconColor: '#00a693',
    },
    {
      title: 'Tech Trends',
      description: 'Spot emerging vibe coding market opportunities before they hit mainstream channels',
      icon: <Sparkles className="h-6 w-6" />,
      iconColor: '#ffbc60',
    },
    {
      title: 'Vibe Coder Hub',
      description: 'Discuss market signals and strategies with our elite vibe coding community',
      icon: <VibeComputer className="h-6 w-6" />,
      iconColor: '#8a4fff',
    },
    {
      title: 'Expert Insights',
      description: 'Rank content of the day\'s best analysis from leading vibe coding leaders, investors and innovators',
      icon: <Users className="h-6 w-6" />,
      iconColor: '#00a693',
    },
  ];

  return (
    <section className={`relative overflow-hidden min-h-screen bg-gradient-to-b from-[#00b4a2] via-[#00b4a2] to-[#ffc06b] ${className}`}>
      <HeroBackground />
      
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-24">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <HeroTitle 
            title={title}
            badgeText={badgeText}
          />
          <div className="mt-6 mb-8">
            <p className="text-base sm:text-lg lg:text-xl text-white leading-relaxed font-medium drop-shadow-sm max-w-3xl mx-auto">
              {description}
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-2 mt-8">
            <EmailSubscription
              email={email}
              setEmail={setEmail}
              onSubmit={onSubmit}
              className="max-w-md w-full"
            />
          </div>
        </div>
        
        <div className="mt-20">
          <FeatureCards
            features={features}
            columns={{ sm: 1, md: 2, lg: 2 }}
            className="max-w-5xl mx-auto gap-8"
          />
        </div>
      </div>
    </section>
  );
}; 