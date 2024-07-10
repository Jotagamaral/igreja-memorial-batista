import React from 'react';

const ParallaxSection = ({ backgroundImage, children, height ='h-screen'}) => {
  return (
    <div className="relative">
      <div className="bg-fixed bg-center bg-cover h-screen" style={{ backgroundImage: `url(${backgroundImage})`, height }}>
        <div className="bg-opacity-40 bg-custom-blue h-full flex items-center">
          <div className="w-full p-10 text-white">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParallaxSection;
