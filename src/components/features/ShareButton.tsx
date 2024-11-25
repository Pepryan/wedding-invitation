import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { weddingConfig } from '@/config/wedding-config';

export default function ShareButton() {
  const [isOpen, setIsOpen] = useState(false);

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Join us celebrating the wedding of ${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name}`;

  const shareOptions = [
    {
      name: 'WhatsApp',
      icon: '/images/icons/whatsapp.svg',
      action: () => {
        window.open(`https://wa.me/?text=${encodeURIComponent(shareText + '\n' + shareUrl)}`, '_blank');
      }
    },
    {
      name: 'Copy Link',
      icon: '/images/icons/link.svg',
      action: async () => {
        await navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
      }
    }
  ];

  return (
    <div className="fixed bottom-24 right-8 z-40">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
        </svg>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="absolute bottom-16 right-0 bg-white rounded-lg shadow-lg p-4 w-48"
          >
            <div className="space-y-4">
              {shareOptions.map((option) => (
                <button
                  key={option.name}
                  onClick={option.action}
                  className="w-full flex items-center gap-3 px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <img src={option.icon} alt={option.name} className="w-5 h-5" />
                  <span>{option.name}</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
