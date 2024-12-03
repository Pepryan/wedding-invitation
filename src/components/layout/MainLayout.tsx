import { useState, useEffect } from 'react';
import { weddingConfig } from '@/config/wedding-config';
import MusicPlayer from '../features/MusicPlayer';
import Footer from './Footer';
import { motion } from 'framer-motion';

interface MainLayoutProps {
  children: React.ReactNode;
  guestName?: string;
}

export default function MainLayout({ children, guestName }: MainLayoutProps) {
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
      <div className="fixed inset-0 flex items-center justify-center min-h-screen bg-cover bg-center"
           style={{ backgroundImage: 'url(wedding-invitation/images/background/hero-bg.jpg)' }}>
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center p-8 max-w-xl mx-auto">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl">
            <h3 className="text-xl text-white/80 mb-4 font-light">
              {guestName ? `Dear ${guestName},` : 'The Wedding of'}
            </h3>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-8">
              {weddingConfig.couple.bride.name} & {weddingConfig.couple.groom.name}
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
