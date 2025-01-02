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
            <div className="grid gap-6">
              <div className="relative">
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="peer pt-6 pb-2 px-4 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent"
                  required
                />
                <label className="absolute top-2 left-4 text-sm text-gray-500 transition-all peer-focus:text-primary peer-focus:top-2 peer-focus:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
                  Your name
                </label>
              </div>
              
              <div className="relative">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  maxLength={500}
                  className="peer pt-6 pb-2 px-4 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-transparent resize-none"
                  required
                />
                <label className="absolute top-2 left-4 text-sm text-gray-500 transition-all peer-focus:text-primary peer-focus:top-2 peer-focus:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-base">
                  Your message
                </label>
                <span className="absolute bottom-2 right-2 text-xs text-gray-400">
                  {message.length}/500
                </span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-500 text-white py-3 px-6 rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all disabled:opacity-50 w-full shadow-lg active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
                <span>{loading ? 'Sending...' : 'Send Message'}</span>
              </button>
            </div>
          </form>

          {error && (
            <div className="mb-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-100 text-red-600 text-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 inline-block mr-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                {error}
              </div>
            </div>
          )}

          {loading ? (
            <div className="text-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
            </div>
          ) : (
            <>
              <div className="space-y-6 mb-8">
                {messages.map((msg) => (
                  <div key={msg.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-100 to-blue-50 flex items-center justify-center">
                        <span className="text-blue-600 font-medium text-lg">
                          {msg.name[0].toUpperCase()}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-gray-800 text-lg">{msg.name}</h3>
                          <span className="text-sm text-gray-500 ml-2 whitespace-nowrap">
                            {formatDateWIB(msg.created_at)}
                          </span>
                        </div>
                        <p className="text-gray-600 whitespace-pre-line mb-4">{msg.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {loading ? (
                <div className="space-y-6 mb-8">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="animate-pulse">
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-gray-200"></div>
                          <div className="flex-1 space-y-3">
                            <div className="h-4 bg-gray-200 rounded w-1/4"></div>
                            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <>
                  {totalPages > 1 && (
                    <div className="flex items-center justify-center gap-2 mt-8">
                      <button
                        onClick={() => fetchMessages(currentPage - 1)}
                        disabled={currentPage === 1}
                        className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span>Previous</span>
                      </button>
                      <div className="flex items-center gap-2">
                        {Array.from({ length: totalPages }, (_, i) => (
                          <button
                            key={i + 1}
                            onClick={() => fetchMessages(i + 1)}
                            className={`px-3 py-1 rounded-lg ${
                              currentPage === i + 1
                                ? 'bg-blue-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-50'
                            } transition-colors shadow-sm`}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>
                      <button
                        onClick={() => fetchMessages(currentPage + 1)}
                        disabled={currentPage === totalPages}
                        className="flex items-center gap-2 px-4 py-2 bg-white border rounded-lg hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors shadow-sm"
                      >
                        <span>Next</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                        </svg>
                      </button>
                    </div>
                  )}
                </>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
