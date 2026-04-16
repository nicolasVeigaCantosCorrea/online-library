import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {getAuthors} from "../services/authorService";
import type { Author } from "../types/author";

function AuthorCatalog() {
  const [authors, setAuthors] = useState<Author[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAuthors()
        .then(data => {
          setAuthors(data);
          setIsLoading(false);
        })
        .catch(() => {
          setError("Failed to load authors.");
          setIsLoading(false);
        })
  }, [])

  return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Author Catalog</h1>
        {isLoading ? (
            <div className="text-center text-gray-500 mt-20">Loading...</div>
        ) : error ? (
            <div className="text-center text-red-500 mt-20">{error}</div>
        ) : (
            <div className="flex flex-col">
              {authors.map(author => (
                  <Link to={`/author/${author.id}`} key={author.id} >
                    <div className="flex flex-row rounded-lg shadow hover:shadow-lg transition cursor-pointer items-center gap-4 p-3">
                        <div>{author.photo_url && <img src={author.photo_url} alt={author.name} className="w-16 h-16 object-cover rounded-full"/>}</div>
                      <div className="font-semibold">{author.name}</div>
                    </div>
                  </Link>
              ))}
            </div>
        )}
      </div>
  );
}

export default AuthorCatalog;
