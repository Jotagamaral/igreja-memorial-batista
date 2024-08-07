import React, { useEffect, useRef, useState } from 'react';

const ParallaxSection = ({ backgroundImage, backgroundVideo, children, height = 'h-screen', color, mediaOpacity = 0.5 }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (videoRef.current) {
            videoRef.current.play();
            setVideoLoaded(true);
          }
          if (observerRef.current) {
            observerRef.current.disconnect();
          }
        }
      });
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold: 0.1,
    });

    if (videoRef.current) {
      observerRef.current.observe(videoRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className={`relative ${height}`}>
      <div className={`absolute inset-0 ${color} z-0`}></div>
      <div className="relative w-full h-full">
        {backgroundVideo ? (
          <>
            {!videoLoaded && (
              <div 
                className="absolute inset-0 bg-fixed bg-center bg-cover" 
                style={{ backgroundImage: `url(${backgroundImage})`, opacity: mediaOpacity }}
              ></div>
            )}
            <video 
              ref={videoRef}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}
              style={{ opacity: mediaOpacity }}
              muted
              loop
            >
              <source src={backgroundVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </>
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
