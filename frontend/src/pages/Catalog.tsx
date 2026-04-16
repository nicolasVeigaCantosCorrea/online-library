import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBooks } from '../services/bookService';
import type { Book } from '../types/book';

function Catalog() {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getBooks()
      .then((data) => {
        setBooks(data);
        setIsLoading(false);
      })
      .catch(() => {
        setError('Failed to load books.');
        setIsLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-black">
      <div className="max-w-7xl mx-auto p-6">
        <div className="flex items-end justify-between mb-8">
          <h1 className="text-3xl font-bold">Book Catalog</h1>
          <p className="text-sm text-gray-500">{books?.length ?? 0} books</p>
        </div>

        {isLoading ? (
          <div className="text-center text-gray-500 mt-20">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500 mt-20">{error}</div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {books.map((book) => (
              <Link to={`/book/${book.id}`} key={book.id}>
                <div className="group bg-white rounded-2xl shadow-sm hover:shadow-md transition overflow-hidden flex flex-col h-full">
                  <div className="relative">
                    <img
                      src={book.cover_url}
                      alt={book.title}
                      className="w-full h-64 object-cover group-hover:scale-[1.03] transition duration-300"
                    />

                    <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      ★ {book.rating ?? 'N/A'}
                    </div>
                  </div>

                  <div className="p-3 flex flex-col gap-2 flex-1">
                    <div className="font-semibold text-sm line-clamp-2 group-hover:text-blue-600 transition">
                      {book.title}
                    </div>

                    <div className="text-xs text-gray-500 line-clamp-1">
                      {(book?.authors ?? []).map((a) => a.name).join(', ')}
                    </div>

                    <div className="text-xs text-gray-400 line-clamp-1">
                      {(book?.genres ?? []).map((g) => g.name).join(', ')}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Catalog;
