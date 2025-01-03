import { useState } from 'react';
import Image from 'next/image';
import { weddingConfig } from '@/config/wedding-config';
import { activeTheme } from '@/config/theme-config';

export default function DigitalEnvelope() {
  const [copiedText, setCopiedText] = useState<string>('');

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(''), 2000);
  };

  return (
    <section
      className="py-8 md:py-20"
      style={{ backgroundColor: activeTheme.secondary }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-6 md:mb-16">
          <h2 className="text-2xl md:text-4xl font-serif mb-2 md:mb-4" style={{ color: activeTheme.text }}>
            Digital Envelope
          </h2>
          <p className="text-gray-600 text-xs md:text-base">Your blessings mean a lot to us</p>
        </div>

        <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-8 max-w-4xl mx-auto">
          {/* Bank Transfers */}
          <div className="relative bg-white p-4 md:p-8 rounded-xl shadow-lg overflow-hidden">
            {/* Top-left decoration */}
            <div className="absolute -top-4 -left-4 w-20 h-20 opacity-50">
              <Image
                src="wedding-invitation/images/pattern/flower-2.webp"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            {/* Bottom-right decoration */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-50 rotate-180">
              <Image
                src="wedding-invitation/images/pattern/flower-3.webp"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-serif mb-4 md:mb-6 text-center" style={{ color: activeTheme.text }}>
              Bank Transfer
            </h3>
            <div className="space-y-4 md:space-y-6">
              {weddingConfig.digitalEnvelope.banks.map((bank, index) => (
                <div key={index} className="p-4 border rounded-lg transition-colors">
                  <div>
                    <p className="font-medium text-lg mb-2">{bank.name}</p>
                    <p className="font-mono text-gray-600 mb-2">{bank.accountNumber}</p>
                    <p className="text-sm text-gray-500 mb-3">a.n {bank.accountHolder}</p>
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => handleCopy(bank.accountNumber)}
                      className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                      style={{ color: activeTheme.text }}
                    >
                      {copiedText === bank.accountNumber ? 'Copied!' : 'Copy Number'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* E-Wallets */}
          <div className="relative bg-white p-4 md:p-8 rounded-xl shadow-lg overflow-hidden">
            {/* Top-left decoration */}
            <div className="absolute -top-4 -left-4 w-20 h-20 opacity-50">
              <Image
                src="wedding-invitation/images/pattern/flower-1.webp"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            {/* Bottom-right decoration */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 opacity-50 rotate-180">
              <Image
                src="wedding-invitation/images/pattern/flower-2.webp"
                alt=""
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-xl md:text-2xl font-serif mb-4 md:mb-6 text-center" style={{ color: activeTheme.text }}>
              E-Wallet
            </h3>
            <div className="space-y-4 md:space-y-6">
              {weddingConfig.digitalEnvelope.eWallets.map((wallet, index) => (
                <div key={index} className="p-4 border rounded-lg transition-colors">
                  <div>
                    <p className="font-medium text-lg mb-2">{wallet.name}</p>
                    <p className="font-mono text-gray-600 mb-2">{wallet.number}</p>
                    {wallet.logo && (
                      <div className="relative w-14 h-14 md:w-20 md:h-20 mx-auto mb-2 md:mb-3">
                        <Image
                          src={wallet.logo}
                          alt={`${wallet.name} Logo`}
                          fill
                          className="object-contain"
                        />
                      </div>
                    )}
                  </div>
                  <div className="mt-4">
                    <button
                      onClick={() => handleCopy(wallet.number)}
                      className="w-full py-2 px-4 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                      style={{ color: activeTheme.text }}
                    >
                      {copiedText === wallet.number ? 'Copied!' : 'Copy Number'}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
