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
  isSubmitting?: boolean;
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
  isSubmitting = false,
  title = {
    prefix: 'Track the',
    highlight: 'Vibe Coding',
    suffix: 'Market!',
  },
  description = 'VibeIndex analyses the top 40 AI & robotics sources to generate market metrics and a personallized daily brief—helping vibe coders make sharper daily decisions and win!',
  badgeText = 'From Anywhere',
  className = '',
}) => {
  const features = [
    {
      title: 'Market Intelligence',
      description: 'We generate signals by cross-analyzing 40 trusted and insightful sources',
      icon: <Shield className="h-6 w-6" />,
      iconColor: '#00a693',
    },
    {
      title: 'Tech Trends',
      description: 'Spot emerging vibe coding patterns before they hit mainstream channels',
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
    <section className="min-h-screen bg-gradient-to-b from-[#00b4a2] via-[#00b4a2] to-[#ffc06b] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Animated gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00b4a2]/10 to-[#ffc06b]/20 animate-pulse-subtle"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-white/10 animate-float-particle"></div>
        <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-white/10 animate-float-particle [animation-delay:2s]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-5 h-5 rounded-full bg-white/10 animate-float-particle [animation-delay:4s]"></div>
        
        {/* Additional light effects */}
        <div className="absolute top-1/2 left-1/2 w-[500px] h-[500px] rounded-full bg-white/5 blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-[#ffc06b]/10 blur-2xl"></div>
      </div>

      <HeroBackground />

      <div className="relative text-center flex flex-col items-center z-10 pt-20 md:pt-24 px-0 sm:px-2 pb-24 w-full">
        {/* Badge with enhanced animation */}
        <div className="relative mb-2">
          <span className="inline-block mx-auto bg-white/20 text-white px-5 py-2 rounded-full text-sm backdrop-blur-sm animate-fade-in-up hover:bg-white/30 transition-all duration-300 cursor-default shadow-lg border border-white/20">
            {badgeText}
          </span>
          <div className="absolute inset-0 bg-white/5 rounded-full blur-xl animate-pulse-subtle"></div>
        </div>
        
        {/* Title with enhanced animation */}
        <div className="animate-fade-in-up [animation-delay:200ms] relative mb-2 md:mb-8 w-full">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent animate-shimmer"></div>
          <HeroTitle 
            prefix={title.prefix}
            highlight={title.highlight}
            suffix={title.suffix}
          />
        </div>
        
        {/* Description with glass effect */}
        <div className="animate-fade-in-up [animation-delay:400ms] w-full max-w-[98%] sm:max-w-2xl transform hover:scale-[1.02] transition-all duration-500 mb-8 sm:mb-8 md:mb-8">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-white/95 to-white/50 rounded-[20px] blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
            <div className="relative text-gray-900 mx-auto bg-white/95 backdrop-blur-sm rounded-[20px] px-3 sm:px-5 py-4 shadow-sm border border-white/50 hover:shadow-lg transition-all duration-500">
              <div className="absolute -top-2.5 left-3 sm:left-5 px-3 py-1 bg-[#00a693] text-white text-xs font-semibold rounded-full shadow-sm">
                What we do
              </div>
              <div className="pt-1">
                <p className="text-base sm:text-lg font-medium leading-relaxed">
                  <span className="text-[#00a693] font-bold">VibeIndex</span> analyses the top 40 AI & robotics sources to generate 
                  <span className="relative inline-block mx-0.5 sm:mx-1 px-1 sm:px-2 py-0.5 bg-gradient-to-r from-[#ffc06b]/20 to-[#00a693]/10 rounded-md animate-soft-pulse">
                    market metrics
                  </span> 
                  and a
                  <span className="relative inline-block mx-0.5 sm:mx-1 px-1 sm:px-2 py-0.5 bg-gradient-to-r from-[#00a693]/10 to-[#ffc06b]/20 rounded-md animate-soft-pulse-delayed">
                    personallized daily brief
                  </span> 
                  —helping vibe coders make sharper daily decisions and win! <span className="animate-sparkle">✨</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Email subscription with enhanced animation */}
        <div className="animate-fade-in-up [animation-delay:600ms] w-full max-w-[98%] sm:max-w-lg transform hover:scale-[1.01] transition-all duration-500">
          <EmailSubscription
            email={email}
            setEmail={setEmail}
            onSubmit={onSubmit}
            isSubmitting={isSubmitting}
          />
        </div>

        {/* Feature cards with enhanced animation */}
        <div className="mt-12 w-full max-w-6xl mx-auto px-2 sm:px-4 animate-fade-in-up [animation-delay:800ms]">
          <FeatureCards features={features} />
        </div>
      </div>
    </section>
  );
}; 