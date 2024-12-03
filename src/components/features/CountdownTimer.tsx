import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding-config';
import { activeTheme } from '@/config/theme-config';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(weddingConfig.event.akad.date) - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft();

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { label: 'days', value: timeLeft.days },
    { label: 'hours', value: timeLeft.hours },
    { label: 'minutes', value: timeLeft.minutes },
    { label: 'seconds', value: timeLeft.seconds },
  ];

  if (!weddingConfig.specialFeatures.countdownTimer) {
    return null;
  }

  return (
    <div className="relative py-16" style={{ backgroundColor: activeTheme.background }}>
      <div className="absolute inset-0 opacity-10" style={{ 
        backgroundImage: 'url("wedding-invitation/images/pattern/subtle-pattern.webp")',
        backgroundRepeat: 'repeat' 
      }} />
      
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-2xl md:text-3xl font-serif mb-8"
          style={{ color: activeTheme.text }}
        >
          Counting Down to Our Special Day
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {timeUnits.map(({ label, value }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className="bg-white rounded-lg shadow-lg p-6 transform hover:scale-105 transition-transform duration-300"
                   style={{ borderColor: activeTheme.accent, borderWidth: '1px' }}>
                <div className="text-4xl md:text-5xl font-bold mb-2" 
                     style={{ color: activeTheme.primary }}>
                  {value.toString().padStart(2, '0')}
                </div>
                <div className="text-sm md:text-base capitalize" 
                     style={{ color: activeTheme.text }}>
                  {label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
