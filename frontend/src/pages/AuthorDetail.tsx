import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type {Author} from "../types/author";
import {getAuthorsById} from "../services/authorService";

function AuthorDetail() {
  const {id} = useParams();
  const numId = Number(id);

  const [author, setAuthor] = useState<Author | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getAuthorsById(numId)
        .then(data => {
          setAuthor(data);
          setIsLoading(false);
        })
        .catch(() => {
          setError("Failed to load author.");
          setIsLoading(false);
        })
  }, [numId]);

  return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Author Detail</h1>
        {isLoading ? (
            <div className="text-center text-gray-500 mt-20">Loading...</div>
        ) : error ? (
            <div className="text-center text-red-500 mt-20">{error}</div>
        ) : (
            <div className="flex flex-row">
              <img src={author?.photo_url} alt={author?.name}/>
              <div className="flex flex-col">
                <h2>{author?.name}</h2>
                <div>{author?.description}</div>
              </div>
            </div>
          )}
      </div>
  );
}

export default AuthorDetail;
