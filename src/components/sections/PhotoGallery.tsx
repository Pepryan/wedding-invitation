import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { weddingConfig } from '@/config/wedding-config';

export default function PhotoGallery() {
  const { currentTheme } = useTheme();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <section className="py-20" style={{ backgroundColor: currentTheme.background }}>
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-3xl md:text-4xl font-serif mb-12"
          style={{ color: currentTheme.text }}
        >
          Our Love Story in Pictures
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {weddingConfig.gallery.prewedding.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square cursor-pointer"
              onClick={() => setSelectedImage(photo.url)}
            >
              <Image
                src={photo.url}
                alt={photo.caption}
                fill
                className="object-cover rounded-lg hover:opacity-90 transition-opacity"
              />
            </motion.div>
          ))}
        </div>

        {/* Modal for full-size image view */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center"
               onClick={() => setSelectedImage(null)}>
            <div className="relative w-11/12 h-11/12">
              <Image
                src={selectedImage}
                alt="Full size"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
} 