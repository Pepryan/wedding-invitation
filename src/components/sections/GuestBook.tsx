import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { activeTheme } from '@/config/theme-config';
import Script from 'next/script';

// Define the window interface extension
declare global {
  interface Window {
    Tally: {
      loadEmbeds: () => void;
    };
  }
}

export default function GuestBook() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.Tally) {
      window.Tally.loadEmbeds();
    }
    setLoading(false);
  }, []);

  return (
    <section className="py-20" style={{ backgroundColor: activeTheme.secondary }}>
      <Script 
        src="https://tally.so/widgets/embed.js" 
        strategy="lazyOnload"
        onLoad={() => {
          if (window.Tally) {
            window.Tally.loadEmbeds();
          }
        }}
      />

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif mb-4" style={{ color: activeTheme.text }}>
            Guest Book
          </h2>
          <p className="text-gray-600">Leave your wishes for us</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            </div>
          ) : (
            <iframe
              data-tally-src="https://tally.so/embed/w2b5gL?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="276"
              frameBorder="0"
              marginHeight={0}
              marginWidth={0}
              title="Guest Books"
              className="mb-12"
            ></iframe>
          )}
        </div>
      </div>
    </section>
  );
}
