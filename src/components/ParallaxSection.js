import React from 'react';

const ParallaxSection = ({ backgroundImage, children }) => {
  return (
    <div className="relative">
      <div className="bg-fixed bg-center bg-cover h-screen" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="bg-opacity-25 bg-black h-full flex items-center">
          <div className="w-full p-10 text-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
