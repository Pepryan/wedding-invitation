import React from 'react';

const QuranicVerses = () => {
  return (
    <section className="py-16 bg-wedding-primary relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 animate-slide-up">
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-wedding-text mb-4">
              QS. Ar-Rum (30:21)
            </h3>
            <p className="text-wedding-text/80 leading-relaxed mb-4">
              "Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan untukmu pasangan hidup dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar terdapat tanda-tanda bagi kaum yang berpikir."
            </p>
            <p className="text-wedding-text/80 italic">
              - Al-Qur'an Surat Ar-Rum Ayat 21
            </p>
          </div>
          <div className="bg-white/10 backdrop-blur-md p-8 rounded-2xl shadow-lg">
            <h3 className="text-xl font-semibold text-wedding-text mb-4">
              QS. An-Nisa (4:1)
            </h3>
            <p className="text-wedding-text/80 leading-relaxed mb-4">
              "Hai sekalian manusia, bertakwalah kepada Tuhan-mu yang telah menciptakan kamu dari diri yang satu, dan daripadanya Allah menciptakan pasangannya; dan dari keduanya Allah memperkembang biakkan laki-laki dan perempuan yang banyak. Dan bertakwalah kepada Allah yang dengan (mempergunakan) nama-Nya kamu saling meminta satu sama lain, dan (peliharalah) hubungan silaturrahim. Sesungguhnya Allah selalu menjaga dan mengawasi kamu."
            </p>
            <p className="text-wedding-text/80 italic">
              - Al-Qur'an Surat An-Nisa Ayat 1
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuranicVerses;