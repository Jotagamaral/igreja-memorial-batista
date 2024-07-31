import React from 'react';

const ParallaxSection = ({ backgroundImage, backgroundVideo, children, height = 'h-screen', color, mediaOpacity = 0.5 }) => {
  return (
    <div className={`relative ${height}`}>
      <div className={`absolute inset-0 ${color} z-0`}></div>
      <div className="relative w-full h-full">
        {backgroundVideo ? (
          <video 
            className="absolute inset-0 w-full h-full object-cover"
            style={{ opacity: mediaOpacity }}
            autoPlay
            loop
            muted
          >
            <source src={backgroundVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div 
            className="absolute inset-0 bg-fixed bg-center bg-cover" 
            style={{ backgroundImage: `url(${backgroundImage})`, opacity: mediaOpacity }}
          ></div>
        )}
        <div className="relative bg-opacity-50 h-full flex items-center z-10">
          <div className="w-full p-10 text-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
