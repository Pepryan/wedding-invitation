import { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding-config';
import { activeTheme } from '@/config/theme-config';
import Image from 'next/image';

export default function DigitalEnvelope() {
  const [copiedText, setCopiedText] = useState<string>('');

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <section className="py-20" style={{ backgroundColor: activeTheme.secondary }}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif mb-4" style={{ color: activeTheme.text }}>
            Digital Envelope
          </h2>
          <p className="text-gray-600">Your blessings mean a lot to us</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Bank Transfers */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-serif mb-6 text-center" style={{ color: activeTheme.text }}>
              Bank Transfer
            </h3>
            <div className="space-y-6">
              {weddingConfig.digitalEnvelope.banks.map((bank, index) => (
                <div key={index} className="p-4 border rounded-lg hover:border-gray-300 transition-colors">
                  <p className="font-medium text-lg mb-2">{bank.name}</p>
                  <p className="font-mono text-gray-600 mb-2">{bank.accountNumber}</p>
                  <p className="text-sm text-gray-500 mb-3">a.n {bank.accountHolder}</p>
                  <button
                    onClick={() => handleCopy(bank.accountNumber)}
                    className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    style={{ color: activeTheme.text }}
                  >
                    {copiedText === bank.accountNumber ? 'Copied!' : 'Copy Number'}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* E-Wallets */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg"
          >
            <h3 className="text-2xl font-serif mb-6 text-center" style={{ color: activeTheme.text }}>
              E-Wallet
            </h3>
            <div className="space-y-6">
              {weddingConfig.digitalEnvelope.eWallets.map((wallet, index) => (
                <div key={index} className="p-4 border rounded-lg hover:border-gray-300 transition-colors">
                  <p className="font-medium text-lg mb-2">{wallet.name}</p>
                  <p className="font-mono text-gray-600 mb-2">{wallet.number}</p>
                  {wallet.qrCode && (
                    <div className="relative w-40 h-40 mx-auto mb-3">
                      <Image
                        src={wallet.qrCode}
                        alt={`${wallet.name} QR Code`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                  <button
                    onClick={() => handleCopy(wallet.number)}
                    className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                    style={{ color: activeTheme.text }}
                  >
                    {copiedText === wallet.number ? 'Copied!' : 'Copy Number'}
                  </button>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
