import Image from 'next/image';
import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding-config';
import { Instagram, Facebook, Twitter } from '@/components/shared/SocialIcons';

export default function CoupleProfile() {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-gray-50">
      <div className="container mx-auto px-4">
        {/* Bismillah */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-serif mb-4">بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم</h2>
          <p className="text-gray-600">In the Name of Allah, the Most Beneficent, the Most Merciful</p>
        </div>

        {/* Couple Profiles */}
        <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Bride */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 mx-auto mb-6">
              <Image
                src={weddingConfig.couple.bride.photo}
                alt={weddingConfig.couple.bride.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-serif mb-2">{weddingConfig.couple.bride.name}</h3>
            <p className="text-gray-600 mb-4">{weddingConfig.couple.bride.parents}</p>
            <p className="text-gray-500 mb-4">{weddingConfig.couple.bride.about}</p>
            <div className="flex justify-center gap-4">
              {weddingConfig.couple.bride.socialMedia.instagram && (
                <Instagram url={weddingConfig.couple.bride.socialMedia.instagram} />
              )}
              {weddingConfig.couple.bride.socialMedia.facebook && (
                <Facebook url={weddingConfig.couple.bride.socialMedia.facebook} />
              )}
              {weddingConfig.couple.bride.socialMedia.twitter && (
                <Twitter url={weddingConfig.couple.bride.socialMedia.twitter} />
              )}
            </div>
          </motion.div>

          {/* Groom */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative w-64 h-64 mx-auto mb-6">
              <Image
                src={weddingConfig.couple.groom.photo}
                alt={weddingConfig.couple.groom.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="text-3xl font-serif mb-2">{weddingConfig.couple.groom.name}</h3>
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
    </section>
  );
}
