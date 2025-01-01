import Image from 'next/image';
import { motion } from 'framer-motion';
import { weddingConfig } from '../../config/wedding-config';
import { Instagram, Facebook, Twitter } from '../shared/SocialIcons';
import { activeTheme } from '../../config/theme-config';
import { scrollAnimation, viewportSettings } from '../animations/scrollAnimations';

type ThemeStyle = React.CSSProperties & {
  '--theme-primary': string;
  '--theme-accent': string;
}

const PhotoContainer = ({ photo, name, aspectRatio, isBride }: { 
  photo: string; 
  name: string; 
  aspectRatio: "1:1" | "portrait";
  isBride: boolean;
}) => {
  const themeStyle: ThemeStyle = {
    '--theme-primary': activeTheme.primary,
    '--theme-accent': activeTheme.accent,
  };

  return (
    <div className={`relative mx-auto mb-6 ${
      aspectRatio === "1:1"
        ? "w-72 h-72 md:w-80 md:h-80"
        : "w-72 h-96 md:w-80 md:h-[28rem]"
    }`}>
      <div className={`absolute inset-0 rounded-full border-2 border-primary
        before:absolute before:inset-[-12px] before:rounded-full before:border-2 before:border-dashed
        before:border-accent
        after:absolute after:inset-[-24px] after:rounded-full after:border-2
        after:border-primary/30
        photo-frame-animation`}
        style={themeStyle}>
      </div>
      
      <div className={`absolute inset-[-40px] ${isBride ? 'bride-flowers' : 'groom-ornaments'}`}
        style={themeStyle}>
      </div>
      
      <div className={`absolute inset-[-20px] ${isBride ? 'bride-petals' : 'groom-details'}`}
        style={themeStyle}>
      </div>
      
      {/* Frame Decoration */}
      {weddingConfig.couple.bride.photo.frame && (
        <motion.div
          className="absolute inset-[-40px] z-20 pointer-events-none"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          whileInView={aspectRatio === "portrait" ? {
            scale: [1, 1.03, 1],
            transition: {
              duration: 6,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut'
            }
          } : {
            rotate: [0, 5, -5, 0],
            scale: [1, 1.02, 1],
            transition: {
              duration: 8,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut'
            }
          }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image
            src={isBride ?
              weddingConfig.couple.bride.photo.frame[aspectRatio] :
              weddingConfig.couple.groom.photo.frame[aspectRatio]
            }
            alt=""
            fill
            className={`object-contain opacity-80 ${
              aspectRatio === "portrait" ? "scale-[1.3] mask-radial" : "scale-[1.1]"
            }`}
            style={aspectRatio === "portrait" ? {
              maskImage: 'radial-gradient(circle at center, white 80%, transparent 95%)'
            } : { transform: 'scale(1.1)' }}
          />
        </motion.div>
      )}

      <div className="absolute inset-4 rounded-full overflow-hidden
        shadow-[0_0_30px_rgba(0,0,0,0.15)]
        transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(0,0,0,0.2)]
        before:absolute before:inset-0 before:z-10 before:rounded-full
        before:shadow-[inset_0_0_20px_rgba(0,0,0,0.1)]">
        {/* Main Photo */}
        <div className="relative w-full h-full">
          <Image
            src={photo}
            alt={name}
            fill
            className={`object-cover rounded-full transform transition-all duration-300
              hover:scale-110
              ${aspectRatio === "portrait" ? "object-top" : "object-center"}`}
          />
        </div>
      </div>
    </div>
  );
}

export default function CoupleProfile() {
  return (
    <motion.section 
      className="py-20 bg-gradient-to-b from-transparent to-gray-50"
      variants={scrollAnimation}
      initial="offscreen"
      whileInView="onscreen"
      viewport={viewportSettings}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif mb-4">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</h2>
          <p className="text-gray-600">In the Name of Allah, the Most Beneficent, the Most Merciful</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div 
            className="text-center relative"
            variants={scrollAnimation}
            initial="offscreen"
            whileInView="onscreen"
            viewport={viewportSettings}
          >
            <PhotoContainer 
              photo={weddingConfig.couple.bride.photo.url}
              name={weddingConfig.couple.bride.name}
              aspectRatio={weddingConfig.couple.bride.photo.aspectRatio as "1:1" | "portrait"}
              isBride={true}
            />
            <h3 className="text-3xl font-serif mb-4 mt-10">{weddingConfig.couple.bride.name}</h3>
            <p className="text-gray-600 mb-4">{weddingConfig.couple.bride.parents}</p>
            <p className="text-gray-500 mb-4">{weddingConfig.couple.bride.about}</p>
            <div className="flex justify-center gap-4">
              {weddingConfig.couple.bride.socialMedia?.instagram && (
                <Instagram url={weddingConfig.couple.bride.socialMedia.instagram} />
              )}
              {weddingConfig.couple.bride.socialMedia?.facebook && (
                <Facebook url={weddingConfig.couple.bride.socialMedia.facebook} />
              )}
              {weddingConfig.couple.bride.socialMedia?.twitter && (
                <Twitter url={weddingConfig.couple.bride.socialMedia.twitter} />
              )}
            </div>
          </motion.div>

          <motion.div 
            className="text-center relative"
            variants={scrollAnimation}
            initial="offscreen"
            whileInView="onscreen"
            viewport={viewportSettings}
          >
            <PhotoContainer 
              photo={weddingConfig.couple.groom.photo.url}
              name={weddingConfig.couple.groom.name}
              aspectRatio={weddingConfig.couple.groom.photo.aspectRatio as "1:1" | "portrait"}
              isBride={false}
            />
            <h3 className="text-3xl font-serif mb-4 mt-10">{weddingConfig.couple.groom.name}</h3>
            <p className="text-gray-600 mb-4">{weddingConfig.couple.groom.parents}</p>
            <p className="text-gray-500 mb-4">{weddingConfig.couple.groom.about}</p>
            <div className="flex justify-center gap-4">
              {weddingConfig.couple.groom.socialMedia.instagram && (
                <Instagram url={weddingConfig.couple.groom.socialMedia.instagram} />
              )}
              {weddingConfig.couple.groom.socialMedia.facebook && (
                <Facebook url={weddingConfig.couple.groom.socialMedia.facebook} />
              )}
              {weddingConfig.couple.groom.socialMedia.twitter && (
                <Twitter url={weddingConfig.couple.groom.socialMedia.twitter} />
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
