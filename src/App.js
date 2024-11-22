import React, { useEffect, useState, useRef, useCallback } from "react";
import { fetchPhotos } from "./api/unsplash";
import PhotoGallery from "./components/PhotoGallery";
import Navbar from "./components/Navbar";

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const observer = useRef();

  const loadPhotos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const newPhotos = await fetchPhotos(page);
      setPhotos((prev) => [...prev, ...newPhotos]);
    } catch (err) {
      setError("Failed to load photos. Please try again.");
    } finally {
      setLoading(false);
    }
  }, [page]);

  useEffect(() => {
    loadPhotos();
  }, [page, loadPhotos]);

  const lastPhotoRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  return (
    <div className="bg-pink-200 min-h-screen">
      {/* Navbar */}
      <Navbar />

      <div className="container mx-auto pt-20">
        {error && (
          <div className="text-red-500 text-center mt-4">{error}</div>
        )}
        <PhotoGallery photos={photos} lastPhotoRef={lastPhotoRef} />
        {loading && (
          <div className="flex justify-center items-center py-6">
            <div className="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
            <p className="text-gray-600 ml-2">Loading...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
