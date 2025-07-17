import React from 'react';

const Card = ({ BackgroundImage, BackgroundColor, children }) => {
  return (
    <div
      className={`flex-1 min-h-[500px] shadow-lg rounded-2xl relative ${BackgroundImage ? 'bg-cover bg-center' : ''}`}
      style={{ backgroundImage: BackgroundImage ? `url(${BackgroundImage})` : 'none', backgroundColor: BackgroundColor || 'transparent' }}
    >
      {children}
    </div>
  );
};

export default Card;
