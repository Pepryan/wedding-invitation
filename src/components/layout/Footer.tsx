import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding-config';
import { activeTheme } from '@/config/theme-config';

export default function Footer() {
  return (
    <footer className="py-12 text-center" style={{ backgroundColor: activeTheme.primary }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <h2 className="text-3xl font-serif text-white mb-4">
            {weddingConfig.couple.bride.name} & {weddingConfig.couple.groom.name}
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Ungkapan terima kasih yang tulus dari kami apabila Bapak/Ibu/Sdr/i berkenan hadir dan memberikan do'a restu kepada kami.
          </p>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Jazakumullah Khairan Katsira Wassalamu'alaikum Warahmatullahi Wabarakatuh.
          </p>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Kami yang berbahagia Keluarga (Nama Mempelai Wanita) Keluarga (Nama Mempelai Pria)
          </p>
          <div className="text-white/60 text-sm">
            <p>Made with ❤️</p>
            <p className="mt-2">© {new Date().getFullYear()} All rights reserved</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
