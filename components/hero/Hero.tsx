import React from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroTitle } from './HeroTitle';
import { EmailSubscription } from './EmailSubscription';
import { FeatureCards } from './FeatureCards';
import { Shield, Sparkles, Users } from 'lucide-react';
import { VibeComputer } from '@/components/custom-icons';

interface HeroProps {
  email: string;
  setEmail: (email: string) => void;
  onSubmit: () => void;
  countdown: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  title?: {
    prefix?: string;
    highlight?: string;
    suffix?: string;
  };
  description?: string;
  badgeText?: string;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  email,
  setEmail,
  onSubmit,
  countdown,
  title = {
    prefix: 'Track the',
    highlight: 'Vibe Coding',
    suffix: 'Market From Anywhere!',
  },
  description = 'VibeIndex turns the top 40 AI & robotics sources into actionable insights—helping vibe coders make sharper daily decisions and win!',
  badgeText = 'AI + Robotics Market Intelligence',
  className = '',
}) => {
  const features = [
    {
      title: 'Market Intelligence',
      description: 'We generate signals by cross-analyzing 40 trusted and insightful sources',
      icon: <Shield />,
      iconColor: '#00a693',
    },
    {
      title: 'Tech Trends',
      description: 'Spot emerging vibe coding patterns before they hit mainstream channels',
      icon: <Sparkles />,
      iconColor: '#ff8a20',
    },
    {
      title: 'Vibe Coder Hub',
      description: 'Discuss market signals and strategies with our elite vibe coding community',
      icon: <VibeComputer />,
      iconColor: '#8a4fff',
    },
    {
      title: 'Expert Insights',
      description: 'Analysis from leading vibe coding leaders, investors and innovators',
      icon: <Users />,
      iconColor: '#00a693',
    },
  ];

  return (
    <section className={`pt-24 xs:pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-24 md:pb-32 px-3 sm:px-4 relative overflow-hidden ${className}`}>
      <HeroBackground />

      <div className="relative text-center flex flex-col items-center z-10 max-w-full sm:max-w-6xl mx-auto">
        <span className="inline-block mx-auto bg-[#004d41]/40 text-white px-4 py-1.5 rounded-full text-sm font-semibold mb-3 sm:mb-4 mt-4 sm:mt-6 shadow-sm backdrop-blur-sm">
          {badgeText}
        </span>
        
        <HeroTitle 
          prefix={title.prefix}
          highlight={title.highlight}
          suffix={title.suffix}
        />
        
        <p className="text-[#002a25] text-sm sm:text-base md:text-lg mb-6 sm:mb-8 max-w-[95%] sm:max-w-xl md:max-w-2xl leading-relaxed font-medium bg-gradient-to-b from-white/95 to-white/85 rounded-xl px-4 sm:px-6 py-3 sm:py-4 shadow-lg border border-[#004d41]/10 transform hover:scale-[1.01] transition-all duration-300 tracking-wide">
          {description}
        </p>

        <div className="w-full max-w-xl mx-auto bg-white/10 rounded-xl p-2 sm:p-3 border border-white/30 shadow-lg transition-all duration-300 mb-8 mt-2 relative z-10 overflow-hidden">
          <EmailSubscription
            email={email}
            setEmail={setEmail}
            onSubmit={onSubmit}
          />
        </div>

        <div className="mt-6 md:mt-8"></div>
        <FeatureCards features={features} />
      </div>
    </section>
  );
}; 