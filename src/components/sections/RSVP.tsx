import { useState } from 'react';
import { motion } from 'framer-motion';
import { weddingConfig } from '@/config/wedding-config';
import { activeTheme } from '@/config/theme-config';

interface RSVPProps {
  guestName?: string;
}

export default function RSVP({ guestName }: RSVPProps) {
  const [formData, setFormData] = useState({
    name: guestName || '',
    attendance: '',
    numberOfGuests: 1,
    wishes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implementasi pengiriman ke WhatsApp
    const message = `*RSVP Wedding*%0A
Name: ${formData.name}%0A
Attendance: ${formData.attendance}%0A
Number of Guests: ${formData.numberOfGuests}%0A
Wishes: ${formData.wishes}`;

    window.open(
      `https://wa.me/${weddingConfig.rsvp.whatsappNumber}?text=${message}`,
      '_blank'
    );
  };

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
            {/* RSVP */}
            <p>We can&apos;t wait to celebrate with you!</p>
          </h2>
          <p className="text-gray-600">Please confirm your attendance</p>
        </motion.div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Your Name
              </label>
              <input
                type="text"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Will you attend?
              </label>
              <select
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.attendance}
                onChange={(e) => setFormData({ ...formData, attendance: e.target.value })}
              >
                <option value="">Select...</option>
                <option value="Yes">Yes, I will attend</option>
                <option value="No">Sorry, I can't attend</option>
                <option value="Maybe">Maybe</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Number of Guests
              </label>
              <input
                type="number"
                min="1"
                max="5"
                required
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.numberOfGuests}
                onChange={(e) => setFormData({ ...formData, numberOfGuests: parseInt(e.target.value) })}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Wishes for the Couple
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                value={formData.wishes}
                onChange={(e) => setFormData({ ...formData, wishes: e.target.value })}
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-6 text-white rounded-lg transition-colors"
              style={{ backgroundColor: activeTheme.primary }}
            >
              Send RSVP via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
