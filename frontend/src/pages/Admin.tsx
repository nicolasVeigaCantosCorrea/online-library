import { useState, useEffect } from 'react';
import { getGenres, createGenre, deleteGenre } from "../services/genreService";
import { postBook, updateBook, deleteBook } from "../services/bookService";
import { createAuthor, updateAuthor, deleteAuthor } from "../services/authorService";
import { createPublisher, updatePublisher, deletePublisher } from "../services/publisherService";
import type {Genre} from "../types/genre";

function Admin() {
  const [tab, setTab] = useState("books");
  const [genres, setGenres] = useState<Genre[]>([]);
  const [newGenre, setNewGenre] = useState({name: ""});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    Promise.all([getGenres()])
        .then(([genres]) => {
          setGenres(genres);
          setIsLoading(false);
        })
        .catch(() => {
          setError("Failed to load admin options.");
          setIsLoading(false);
        })
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 text-black p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Author Catalog</h1>

        {isLoading ? (
          <div className="text-center text-gray-500 mt-20">Loading...</div>
        ) : error ? (
          <div className="text-center text-red-500 mt-20">{error}</div>
        ) : (
            <div>
              <div className="flex flex-row gap-4">
                <button onClick={() => setTab("books")}>Books</button>
                <button onClick={() => setTab("authors")}>Authors</button>
                <button onClick={() => setTab("genres")}>Genres</button>
                <button onClick={() => setTab("publishers")}>Publishers</button>
              </div>

              {tab === "books" && <div>Books content</div>}
              {tab === "authors" && <div>Authors content</div>}
              {tab === "genres" && <div>Genres content</div>}
              {tab === "publishers" && <div>Publishers content</div>}
            </div>
        )}
      </div>
    </div>
  );
}

export default Admin;
