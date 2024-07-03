// src/components/WelcomeCard.js
import React from 'react';
import { motion } from 'framer-motion';

const WelcomeCard = ({ backgroundType, backgroundSrc, welcomeText }) => {
  return (
    <motion.div
      className="relative w-full rounded-lg overflow-hidden shadow-lg mb-6"
      initial={{ height: '70vh', opacity: 0.5 }}
      animate={{ height: '75vh', opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      {backgroundType === 'image' && (
        <img src={backgroundSrc} alt="Background" className="absolute inset-0 w-full h-full object-cover" />
      )}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h2 className="text-4xl md:text-6xl text-white font-bold">{welcomeText}</h2>
      </div>
    </motion.div>
  );
};

export default WelcomeCard;
