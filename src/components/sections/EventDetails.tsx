import { motion } from 'framer-motion';
import Image from 'next/image';
import { weddingConfig } from '@/config/wedding-config';
import { CalendarIcon, MapPinIcon, ClockIcon } from '@heroicons/react/24/outline';

export default function EventDetails() {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('id-ID', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const events = [
    { title: 'Akad Nikah', details: weddingConfig.event.akad },
    { title: 'Resepsi', details: weddingConfig.event.reception }
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="relative bg-black/20 backdrop-blur-sm rounded-lg p-6 max-w-2xl mx-auto">
            <h2 className="text-4xl font-serif mb-4 text-white">Save the Date</h2>
            <p className="text-white/90">We invite you to celebrate our special day</p>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative bg-white p-8 rounded-lg shadow-lg overflow-hidden"
              style={{ minHeight: '400px' }}
            >
              {/* Decorations for Akad card */}
              {event.title === 'Akad Nikah' && (
                <>
                  <div className="absolute -top-8 -left-8 w-32 h-32 opacity-50">
                    <Image
                      src="wedding-invitation/images/pattern/flower-1.webp"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-50 rotate-180">
                    <Image
                      src="wedding-invitation/images/pattern/flower-2.webp"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </>
              )}

              {/* Decorations for Resepsi card */}
              {event.title === 'Resepsi' && (
                <>
                  <div className="absolute -top-8 -left-8 w-32 h-32 opacity-50">
                    <Image
                      src="wedding-invitation/images/pattern/flower-3.webp"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-50 rotate-180">
                    <Image
                      src="wedding-invitation/images/pattern/flower-1.webp"
                      alt=""
                      fill
                      className="object-contain"
                    />
                  </div>
                </>
              )}
              <h3 className="text-2xl font-serif mb-6 text-center">{event.title}</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <CalendarIcon className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-medium">{formatDate(event.details.date)}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <ClockIcon className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-medium">{event.details.time} WIB</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <MapPinIcon className="w-6 h-6 text-gray-400" />
                  <div>
                    <p className="font-medium">{event.details.venue}</p>
                    <p className="text-gray-600">{event.details.address}</p>
                  </div>
                </div>

                {event.details.dresscode && (
                  <div className="text-center mt-6">
                    <p className="text-sm text-gray-500">Dress Code</p>
                    <p className="font-medium">{event.details.dresscode}</p>
                  </div>
                )}

                <a
                  href={event.details.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium py-3 rounded-lg transition-colors mt-6"
                >
                  View Location
                </a>

                <button
                  onClick={() => {
                    const icsContent = [
                      'BEGIN:VCALENDAR',
                      'VERSION:2.0',
                      'PRODID:-//Wedding//Invitation//EN',
                      'BEGIN:VEVENT',
                      `UID:${Date.now()}@wedding`,
                      `DTSTAMP:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
                      `DTSTART:${new Date(`${event.details.date}T${event.details.time}`).toISOString().replace(/[-:]/g, '').split('.')[0]}Z`,
                      `SUMMARY:${event.title} - ${weddingConfig.couple.bride.name} & ${weddingConfig.couple.groom.name}`,
                      `DESCRIPTION:${event.details.venue}\\n${event.details.address}`,
                      `LOCATION:${event.details.venue}, ${event.details.address}`,
                      'END:VEVENT',
                      'END:VCALENDAR'
                    ].join('\n');
                    
                    const blob = new Blob([icsContent], { type: 'text/calendar' });
                    const url = URL.createObjectURL(blob);
                    const link = document.createElement('a');
                    link.href = url;
                    link.download = `${event.title.replace(' ', '_')}_${weddingConfig.couple.bride.name}_${weddingConfig.couple.groom.name}.ics`;
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                  className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-semibold text-lg py-4 px-6 rounded-lg shadow-lg border-2 border-gray-800 transition-all duration-200 mt-4 active:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 relative z-10"
                >
                  Save to Calendar
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
