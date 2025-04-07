import React from 'react';
import { HeroBackground } from './HeroBackground';
import { HeroTitle } from './HeroTitle';
import { EmailSubscription } from './EmailSubscription';
import { FeatureCards } from './FeatureCards';
import { CountdownTimer } from './CountdownTimer';
import { BadgeCheck, Heart, BarChart, Zap, Users } from 'lucide-react';

interface HeroProps {
  title?: string;
  description?: string;
  badgeText?: string;
  email: string;
  setEmail: (email: string) => void;
  onSubmit: () => void;
  isSubmitting?: boolean;
  countdownData?: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  };
  className?: string;
}

export const Hero = ({
  title = 'VibeIndex',
  description = 'VibeIndex turns the top 40 AI & robotics sources into actionable insights—helping vibe coders make sharper daily decisions and win!',
  badgeText = 'Coming Soon',
  email,
  setEmail,
  onSubmit,
  isSubmitting = false,
  countdownData = { days: 0, hours: 0, minutes: 0, seconds: 0 },
  className = '',
}: HeroProps) => {
  const features = [
    {
      title: 'Real-time Sentiment',
      description: 'Track AI market sentiment in real-time across 40+ sources',
      icon: <Heart className="text-pink-500" />,
      iconColor: '#ff6b8b',
    },
    {
      title: 'Trend Analysis',
      description: 'Identify emerging trends before they hit mainstream awareness',
      icon: <BarChart className="text-blue-500" />,
      iconColor: '#3b82f6',
    },
    {
      title: 'Signal-focused',
      description: 'Cut through the noise with high-signal, actionable insights',
      icon: <Zap className="text-yellow-500" />,
      iconColor: '#eab308',
    },
  ];

  return (
    <section className={`relative min-h-screen w-full flex flex-col items-center justify-center overflow-hidden px-4 py-16 md:py-24 ${className}`}>
      <HeroBackground />
      
      {/* Badge */}
      <div className="flex items-center gap-1 bg-white/10 backdrop-blur-sm px-3 py-1 rounded-full mb-4 text-white">
        <BadgeCheck className="h-4 w-4 text-indigo-400" />
        <span className="text-sm font-medium">{badgeText}</span>
      </div>
      
      {/* Title and Description */}
      <div className="text-center space-y-4 mb-6 relative z-10 max-w-3xl">
        <HeroTitle>{title}</HeroTitle>
        <p className="text-white/90 mx-auto max-w-xl text-base sm:text-lg md:text-xl leading-relaxed">
          {description}
        </p>
      </div>
      
      {/* Countdown Timer */}
      <div className="mb-8">
        <CountdownTimer 
          days={countdownData.days}
          hours={countdownData.hours}
          minutes={countdownData.minutes}
          seconds={countdownData.seconds}
        />
      </div>
      
      {/* Email Subscription */}
      <div className="w-full max-w-xl mb-8 md:mb-10">
        <EmailSubscription 
          email={email} 
          setEmail={setEmail} 
          onSubmit={onSubmit}
          isSubmitting={isSubmitting}
        />
        <p className="text-white/80 text-center text-xs mt-2 flex items-center justify-center">
          <Users className="mr-1 h-3 w-3 opacity-80" />
          Join over 500 vibe coders and AI builders getting an edge
        </p>
      </div>
      
      {/* Feature Cards */}
      <div className="w-full max-w-5xl">
        <FeatureCards features={features} columns={{ sm: 1, md: 3, lg: 3 }} />
      </div>
    </section>
  );
}; 