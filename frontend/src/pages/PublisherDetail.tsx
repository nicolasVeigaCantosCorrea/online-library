import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import type {Publisher} from "../types/publisher";
import {getPublishersById} from "../services/publisherService";

function PublisherDetail() {
  const {id} = useParams();
  const numId = Number(id);

  const [publisher, setPublisher] = useState<Publisher | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPublishersById(numId)
        .then(data => {
          setPublisher(data);
          setIsLoading(false);
        })
        .catch(() => {
          setError("Failed to load publisher.");
          setIsLoading(false);
        })
  }, [numId]);

  return (
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-6">Publisher Detail</h1>
        {isLoading ? (
            <div className="text-center text-gray-500 mt-20">Loading...</div>
        ) : error ? (
            <div className="text-center text-red-500 mt-20">{error}</div>
        ) : (
            <div className="flex flex-col">
              <h2>{publisher?.name}</h2>
              <div>{publisher?.description}</div>
            </div>
          )}
      </div>
  );
}

export default PublisherDetail;
