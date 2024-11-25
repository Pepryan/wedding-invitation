import { motion } from 'framer-motion';
import Image from 'next/image';
import { weddingConfig } from '@/config/wedding-config';
import { activeTheme } from '@/config/theme-config';

export default function GiftRegistry() {
  return (
    <section className="py-20" style={{ backgroundColor: activeTheme.background }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif mb-4" style={{ color: activeTheme.text }}>
            Gift Registry
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, we have registered at the following places.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {weddingConfig.giftRegistry.map((registry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <Image
                  src={registry.image}
                  alt={registry.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2" style={{ color: activeTheme.text }}>
                  {registry.title}
                </h3>
                {registry.description && (
                  <p className="text-gray-600 mb-4">{registry.description}</p>
                )}
                {registry.link && (
                  <a
                    href={registry.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-6 py-2 rounded-full text-white transition-colors"
                    style={{ backgroundColor: activeTheme.primary }}
                  >
                    View Registry
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
