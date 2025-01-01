import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { createClient } from '@supabase/supabase-js';
import { scrollAnimation, viewportSettings } from '../animations/scrollAnimations';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_KEY!
);

interface Message {
  id: string;
  name: string;
  message: string;
  created_at: string;
}

export default function GuestBook() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const messagesPerPage = 5;

  const formatDateWIB = (dateString: string) => {
    const date = new Date(dateString);
    return (
      <>
        <span className="hidden sm:inline">
          {date.toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta',
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }).replace(/\./g, ':')}
        </span>
        <span className="sm:hidden">
          {date.toLocaleString('id-ID', {
            timeZone: 'Asia/Jakarta',
            day: '2-digit',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          }).replace(/\./g, ':')}
        </span>
      </>
    );
  };

  const fetchMessages = async (page: number = 1) => {
    try {
      setLoading(true);
      const from = (page - 1) * messagesPerPage;
      const to = from + messagesPerPage - 1;
      
      const { data, error, count } = await supabase
        .from('guest_book')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(from, to);
      
      if (error) throw error;
      setMessages(data || []);
      setTotalPages(Math.ceil((count || 0) / messagesPerPage));
      setCurrentPage(page);
    } catch (err) {
      setError('Failed to fetch messages');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const { error } = await supabase
        .from('guest_book')
        .insert([{ name, message }]);
      
      if (error) throw error;
      await fetchMessages();
      setName('');
      setMessage('');
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError('Failed to submit message: ' + err.message);
      } else {
        setError('Failed to submit message: Unknown error');
      }
      console.error('Submission error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMessages();
  }, []);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          variants={scrollAnimation}
          initial="offscreen"
          whileInView="onscreen"
          viewport={viewportSettings}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif mb-4 text-gray-800">
            Guest Book
          </h2>
          <p className="text-gray-600">Leave your wishes for us</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <form onSubmit={handleSubmit} className="mb-8">
            <div className="grid gap-4">
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your message"
                rows={4}
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 w-full sm:w-auto shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                <span>{loading ? 'Sending...' : 'Send Messages'}</span>
              </button>
            </div>
          </form>

          {error && (
            <div className="text-red-500 mb-4 text-center">{error}</div>
          )}

          {loading ? (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            </div>
          ) : (
            <>
              <div className="space-y-4 mb-8">
                {messages.map((msg) => (
                  <div key={msg.id} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="font-semibold text-gray-800 text-lg">{msg.name}</h3>
                      <span className="text-sm text-gray-500 whitespace-nowrap ml-2">
                        {formatDateWIB(msg.created_at)}
                      </span>
                    </div>
                    <p className="text-gray-600 whitespace-pre-line">{msg.message}</p>
                  </div>
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex justify-center gap-2">
                  <button
                    onClick={() => fetchMessages(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <span className="px-4 py-2 bg-gray-100 rounded-lg">
                    Page {currentPage} of {totalPages}
                  </span>
                  <button
                    onClick={() => fetchMessages(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-100 rounded-lg hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
