import React from "react";

const PhotoGallery = ({ photos, lastPhotoRef }) => {
  return (
    <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {photos.map((photo, index) => {
        const isLastPhoto = index === photos.length - 1;
        return (
          <div
            key={photo.id}
            ref={isLastPhoto ? lastPhotoRef : null}
            className="group overflow-hidden rounded-lg shadow-md hover:shadow-lg transition duration-300 bg-white"
          >
            {/* Photo Container */}
            <div className="relative w-full h-64">
              {/* Image with Hover Zoom */}
              <img
                src={photo.urls.regular}
                alt={photo.alt_description || "Photo"}
                className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
              />
            </div>

            {/* Photographer Details */}
            <div className="p-4">
              <p className="text-gray-800 font-medium">{photo.user.name}</p>
              <p className="text-gray-600 text-sm">{photo.user.location || "Unknown Location"}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PhotoGallery;
