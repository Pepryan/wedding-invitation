import { motion } from 'framer-motion';
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
          <h2 className="text-4xl font-serif mb-4">Save the Date</h2>
          <p className="text-gray-600">We invite you to celebrate our special day</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
