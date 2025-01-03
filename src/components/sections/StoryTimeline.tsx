import { motion } from 'framer-motion';
import Image from 'next/image';
import { weddingConfig } from '@/config/wedding-config';

export default function StoryTimeline() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ amount: 0.4 }}
          transition={{
            duration: 1.5,
            ease: [0.16, 1, 0.3, 1],
            scale: {
              type: "spring",
              stiffness: 100,
              damping: 15
            }
          }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif mb-4">Our Love Story</h2>
          <p className="text-gray-600">{weddingConfig.couple.firstMeet}</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {weddingConfig.couple.loveStory.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50, scale: 0.9, rotate: index % 2 === 0 ? -5 : 5 }}
              whileInView={{ opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                duration: 1.8,
                ease: [0.16, 1, 0.3, 1],
                scale: {
                  type: "spring",
                  stiffness: 80,
                  damping: 12
                },
                rotate: {
                  type: "spring",
                  stiffness: 60,
                  damping: 10
                }
              }}
              exit={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, y: 50, scale: 0.9, rotate: index % 2 === 0 ? -5 : 5 }}
              className="flex flex-col md:flex-row items-center gap-8 mb-16"
            >
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              
              <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                <div className="relative bg-white p-6 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Corner decorations */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 opacity-30">
                    <Image
                      src="wedding-invitation/images/pattern/flower-1.webp"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-16 h-16 opacity-30 rotate-180">
                    <Image
                      src="wedding-invitation/images/pattern/flower-1.webp"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  <span className="text-sm text-gray-500">{story.date}</span>
                  <h3 className="text-2xl font-serif mb-3">{story.title}</h3>
                  <p className="text-gray-600">{story.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
