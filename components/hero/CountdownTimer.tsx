import React from 'react';

interface CountdownTimerProps {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  bgColor?: string;
  textColor?: string;
  labelColor?: string;
  labelBgColor?: string;
}

export const CountdownTimer: React.FC<CountdownTimerProps> = ({
  days,
  hours,
  minutes,
  seconds,
  bgColor = '#004d41',
  textColor = '#fffadc',
  labelColor = '#fffadc',
  labelBgColor = '#004d41',
}) => {
  const timeUnits = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ];

  return (
    <div className="flex justify-center space-x-3 sm:space-x-4 mb-8 sm:mb-10 mt-2 sm:mt-4 relative">
      {/* Subtle glow effect behind the timer */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#004d41]/5 to-transparent blur-lg -z-10 rounded-lg"></div>
      
      {timeUnits.map((item, index) => (
        <div key={index} className="flex flex-col items-center group">
          <div 
            className="text-lg sm:text-xl font-bold w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center shadow-lg relative overflow-hidden transform transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: bgColor }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent"></div>
            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <span className="relative z-10" style={{ color: textColor }}>
              {item.value < 10 ? `0${item.value}` : item.value}
            </span>
          </div>
          <span 
            className="mt-1 text-xs px-2 py-1 rounded text-center font-medium transform transition-all duration-300 group-hover:scale-110"
            style={{ backgroundColor: labelBgColor, color: labelColor }}
          >
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );
}; 