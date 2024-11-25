import { useState, useEffect } from 'react';
import { weddingConfig } from '@/config/wedding-config';
import MusicPlayer from '../features/MusicPlayer';
import Footer from './Footer';
import { Playfair_Display, Great_Vibes, Montserrat } from 'next/font/google';
import { motion, AnimatePresence } from 'framer-motion';

const primary = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-primary',
  display: 'swap',
});

const secondary = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-secondary',
  display: 'swap',
});

const decorative = Great_Vibes({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-decorative',
  display: 'swap',
});

export default function MainLayout({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const handleStartExperience = () => {
    setHasInteracted(true);
    setIsPlaying(true);
  };

  useEffect(() => {
    if (!hasInteracted) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [hasInteracted]);

  if (!hasInteracted) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-50"
        >
          <div 
            className="fixed inset-0 flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
            style={{ 
              backgroundImage: 'url(/images/background/hero-bg.jpg)',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
              // backgroundBlend: 'overlay'
            }}
          >
            <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"></div>
            <div className="relative z-10 text-center p-8 max-w-xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl border border-white/20">
                <h3 className={`${decorative.variable} font-decorative text-2xl text-white/90 mb-4`}>
                  The Wedding of
                </h3>
                <h1 className={`${secondary.variable} font-secondary text-4xl md:text-5xl text-white mb-2`}>
                  {weddingConfig.couple.bride.fullName}
                </h1>
                <h2 className={`${decorative.variable} font-decorative text-3xl text-white/90 my-4`}>
                  &
                </h2>
                <h1 className={`${secondary.variable} font-secondary text-4xl md:text-5xl text-white mb-8`}>
                  {weddingConfig.couple.groom.fullName}
                </h1>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleStartExperience}
                  className="w-full px-8 py-4 bg-white/20 hover:bg-white/30 text-white rounded-full
                           transition-all border border-white/30 backdrop-blur-sm"
                >
                  Open Invitation
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    );
  }

  return (
    <>
      <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <div className="relative">
        {children}
        <Footer />
      </div>
    </>
  );
}
