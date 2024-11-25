import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { activeTheme } from '@/config/theme-config';

interface Message {
  id: string;
  name: string;
  message: string;
  timestamp: string;
}

export default function GuestBook() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState({ name: '', message: '' });

  // Dummy data untuk development
  useEffect(() => {
    setMessages([
      {
        id: '1',
        name: 'John Doe',
        message: 'Congratulations! Wishing you a lifetime of love and happiness.',
        timestamp: new Date().toISOString()
      },
      // Add more dummy messages...
    ]);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Implementasi pengiriman pesan ke backend
    const message: Message = {
      id: Date.now().toString(),
      name: newMessage.name,
      message: newMessage.message,
      timestamp: new Date().toISOString()
    };
    
    setMessages([message, ...messages]);
    setNewMessage({ name: '', message: '' });
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
            Guest Book
          </h2>
          <p className="text-gray-600">Leave your wishes for us</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="mb-12">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                required
                className="px-4 py-2 border rounded-lg"
                value={newMessage.name}
                onChange={(e) => setNewMessage({ ...newMessage, name: e.target.value })}
              />
              <button
                type="submit"
                className="px-6 py-2 text-white rounded-lg transition-colors"
                style={{ backgroundColor: activeTheme.primary }}
              >
                Send Wishes
              </button>
            </div>
            <textarea
              placeholder="Your Message"
              required
              rows={4}
              className="w-full px-4 py-2 border rounded-lg mt-4"
              value={newMessage.message}
              onChange={(e) => setNewMessage({ ...newMessage, message: e.target.value })}
            ></textarea>
          </form>

          <div className="space-y-6">
            {messages.map((msg) => (
              <motion.div
                key={msg.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="font-medium text-lg">{msg.name}</h3>
                  <span className="text-sm text-gray-500">
                    {new Date(msg.timestamp).toLocaleDateString()}
                  </span>
                </div>
                <p className="text-gray-600">{msg.message}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
