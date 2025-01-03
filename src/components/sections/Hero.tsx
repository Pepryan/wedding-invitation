import { motion } from 'framer-motion';
import { weddingConfig } from '../../config/wedding-config';
import { scrollAnimation, viewportSettings } from '../animations/scrollAnimations';

interface HeroProps {
  guestName?: string;
}

export default function Hero({ guestName }: HeroProps) {
  return (
    <motion.section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pb-20"
      variants={scrollAnimation}
      initial="offscreen"
      whileInView="onscreen"
      viewport={viewportSettings}
    >
      {/* Background Image with Animated Overlay */}
      <div
        className="absolute inset-0 bg-[url('/wedding-invitation/images/background/hero-bg.webp')] bg-cover bg-center bg-no-repeat"
        style={{
          maskImage: 'url(/wedding-invitation/images/background/hero-bg.webp)',
          maskPosition: 'center',
          maskRepeat: 'repeat'
        }}
      >
        <motion.div
          className="absolute inset-0 bg-black/40"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        />
        
        {/* Floating Flower Patterns */}
        <motion.img
          src="wedding-invitation/images/pattern/flower-1.webp"
          alt=""
          className="absolute top-[10%] left-[5%] w-16 opacity-80 z-20"
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [0, -40, 0], rotate: [0, 15, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut'
          }}
        />
        <motion.img
          src="wedding-invitation/images/pattern/flower-2.webp"
          alt=""
          className="absolute top-[20%] right-[10%] w-20 opacity-80 z-20"
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [0, -30, 0], rotate: [0, -10, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: 1
          }}
        />
        <motion.img
          src="wedding-invitation/images/pattern/flower-3.webp"
          alt=""
          className="absolute bottom-[15%] left-[15%] w-24 opacity-80 z-20"
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [0, -50, 0], rotate: [0, 20, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: 2
          }}
        />
        <motion.img
          src="wedding-invitation/images/pattern/flower-1.webp"
          alt=""
          className="absolute top-[5%] right-[20%] w-12 opacity-70 z-20"
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [0, -25, 0], rotate: [0, 10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: 0.5
          }}
        />
        <motion.img
          src="wedding-invitation/images/pattern/flower-2.webp"
          alt=""
          className="absolute bottom-[5%] right-[5%] w-16 opacity-70 z-20"
          initial={{ y: 0, rotate: 0 }}
          animate={{ y: [0, -35, 0], rotate: [0, -15, 0] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            repeatType: 'mirror',
            ease: 'easeInOut',
            delay: 1.5
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/10 backdrop-blur-md p-6 rounded-2xl relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <motion.img
            src="wedding-invitation/images/pattern/flower-1.webp"
            alt=""
            className="absolute -top-8 -left-8 w-16 opacity-50"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
          <motion.img
            src="wedding-invitation/images/pattern/flower-2.webp"
            alt=""
            className="absolute -bottom-8 -right-8 w-20 opacity-50"
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.7, duration: 1 }}
          />
          
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 rounded-2xl"
            initial={{ boxShadow: '0 0 0 rgba(255,255,255,0.1)' }}
            animate={{ boxShadow: '0 0 20px rgba(255,255,255,0.3)' }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut'
            }}
          />
          {guestName && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white/90 text-xl mb-6"
            >
              Dear {guestName},
            </motion.p>
          )}
          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/80 text-xl mb-4"
          >
              You are invited to our wedding.
          </motion.p>

          <motion.div className="space-y-4">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="text-4xl md:text-6xl font-serif text-white"
            >
              {weddingConfig.couple.bride.name}
            </motion.h1>
            
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 1.2, type: 'spring', stiffness: 100 }}
              className="text-2xl md:text-3xl text-white/80"
            >
              &
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1 }}
              className="text-4xl md:text-6xl font-serif text-white"
            >
              {weddingConfig.couple.groom.name}
            </motion.h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-white/90 text-lg mt-4"
          >
            {new Date(weddingConfig.event.akad.date).toLocaleDateString('id-ID', {
              day: 'numeric',
              month: 'long',
              year: 'numeric'
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <div className="animate-bounce">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </motion.div>
    </motion.section>
  );
}
