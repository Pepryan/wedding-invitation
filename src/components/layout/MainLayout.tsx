import React, { useState, useEffect } from 'react';
import { weddingConfig } from '../../config/wedding-config';
import MusicPlayer from '../features/MusicPlayer';
import Footer from './Footer';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { ErrorBoundary } from 'react-error-boundary';
import QuranicVerses from '../sections/QuranicVerses';

interface MainLayoutProps {
  children: React.ReactNode;
  guestName?: string;
}

function ErrorFallback({ error }: { error: Error }) {
  return (
    <div role="alert" className="p-8 text-center">
      <h2 className="text-2xl font-bold text-wedding-text mb-4">Something went wrong</h2>
      <p className="text-wedding-text/80">{error.message}</p>
    </div>
  );
}

export default function MainLayout({ children, guestName }: MainLayoutProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const [_isLoading, setIsLoading] = useState(true);

  const handleStartExperience = () => {
    setHasInteracted(true);
    setIsPlaying(true);
  };

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

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
      <div className="fixed inset-0 flex items-center justify-center min-h-screen bg-[url('/wedding-invitation/images/background/hero-bg.webp')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
        <div className="relative z-10 text-center p-8 max-w-xl mx-auto">
          <motion.div 
            className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl text-white/80 mb-4 font-light">
              {guestName ? `Dear ${guestName},` : 'You are invited to our wedding.'}
            </h3>
            <h1 className="text-4xl md:text-5xl font-serif text-white mb-4">
              {guestName ? `We are getting married!` : `${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name}`}
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
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Head>
        <title>{`${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name} Wedding`}</title>
        <meta name="description" content={`Wedding invitation for ${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name}`} />
      </Head>
      
      <MusicPlayer isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
      <div className="relative overflow-x-hidden">

        {/* Animated Background */}
        <div className="fixed inset-0 bg-[url('/wedding-invitation/images/pattern/subtle-pattern.webp')] bg-repeat bg-[length:100px] md:bg-[length:200px] opacity-50 animate-move-bg z-10"></div>

        {/* Main Content */}
        <div className="relative z-30">
          {React.Children.map(children, (child, _index) => (
            <section className="relative">
              {child}
            </section>
          ))}
          <div>
            <QuranicVerses />
          </div>
          <Footer />
        </div>
      </div>
    </ErrorBoundary>
  );
}
