import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding-config';
import { activeTheme } from '@/config/theme-config';
import { useRouter } from 'next/router';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Gallery() {
  const { basePath } = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [_imagesLoaded, setImagesLoaded] = useState(0);

  const handleImageLoad = () => {
    setImagesLoaded(prev => prev + 1);
  };

  const slides = weddingConfig.gallery.prewedding.map(photo => ({
    src: `${basePath}${photo.url}`,
    alt: photo.caption,
  }));

  return (
    <section className="py-20" style={{ backgroundColor: activeTheme.background }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif mb-4" style={{ color: activeTheme.text }}>
            Pre-Wedding Photos
          </h2>
        </motion.div>

        <motion.div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-4">
          {weddingConfig.gallery.prewedding.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ margin: "0px 0px -50px 0px" }}
              transition={{
                duration: 0.8,
                ease: "easeInOut",
                delay: index * 0.1
              }}
              className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              onClick={() => {
                setPhotoIndex(index);
                setIsOpen(true);
              }}
            >
              <Image
                src={`${basePath}${photo.url}`}
                alt="Pre-wedding photo"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
                priority={index < 2}
                loading={index < 2 ? "eager" : "lazy"}
                quality={index < 2 ? 85 : 65}
                onLoad={handleImageLoad}
                placeholder="blur"
                blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQdHx4eHRoaHSQrJyEwPENDPzE2O0FBNi5QREZXUFM4UjdqWGB2foVzfHJUQkhzkWNY2ff/2wBDARUXFx4aHR4eHUJBOEFCWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVn/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="
              />
            </motion.div>
          ))}
        </motion.div>

        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          index={photoIndex}
          slides={slides}
          carousel={{
            finite: true,
            preload: 2,
            imageFit: 'contain'
          }}
          controller={{
            closeOnBackdropClick: true,
            closeOnPullDown: true
          }}
          render={{
            buttonPrev: () => null,
            buttonNext: () => null,
            iconClose: () => <div className="p-2">✕</div>
          }}
          animation={{ swipe: 150 }}
          styles={{
            container: {
              backgroundColor: 'rgba(0,0,0,0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            },
            icon: { color: '#fff', filter: 'drop-shadow(0 0 2px rgba(0,0,0,0.5))' }
          }}
        />
      </div>
    </section>
  );
}

