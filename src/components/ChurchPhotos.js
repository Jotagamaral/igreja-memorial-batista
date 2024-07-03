import React from 'react';

const ChurchPhotos = ({ photos }) => (
  <div className="relative mb-8 h-64">
    {photos.map((photo, index) => {
      const styles = photo.styles || {};
      const src = photo.file ? photo.file : photo.url;
      return (
        <img
          key={index}
          src={src}
          alt={`Igreja ${index + 1}`}
          className="absolute rounded-full object-cover"
          style={styles}
        />
      );
    })}
  </div>
);

export default ChurchPhotos;
