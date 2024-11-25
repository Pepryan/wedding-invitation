import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding-config';
import { activeTheme } from '@/config/theme-config';

export default function LiveStreaming() {
  if (!weddingConfig.specialFeatures.liveStreaming.enabled) return null;

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
            Live Streaming
          </h2>
          <p className="text-gray-600">Join us virtually on our special day</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="aspect-video relative rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={weddingConfig.specialFeatures.liveStreaming.link}
              className="absolute inset-0 w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div className="mt-8 text-center">
            <a
              href={weddingConfig.specialFeatures.liveStreaming.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-3 text-white rounded-lg transition-colors"
              style={{ backgroundColor: activeTheme.primary }}
            >
              Open in {weddingConfig.specialFeatures.liveStreaming.platform}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
