import React, { useState, useEffect } from 'react';

const Popup = () => {
  const [visible, setVisible] = useState(true);
  const [animateOut, setAnimateOut] = useState(false);
  const [animateIn, setAnimateIn] = useState(false);

  const handleClose = () => {
    setAnimateOut(true);
    setTimeout(() => {
      setVisible(false);
    }, 1000); // Tempo para a animação de saída
  };

  useEffect(() => {
    // Ativa a animação de entrada após o componente ser montado
    setAnimateIn(true);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg max-w-md z-50 transform transition-all duration-1000 
      ${animateIn && !animateOut ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-20px]'}
      ${animateOut ? 'opacity-0 translate-x-[-40px]' : ''}`}
    >
      <button
        onClick={handleClose}
        className="absolute top-1 right-1 text-gray-500 hover:text-gray-700"
      >
        ✖
      </button>
      <img
        src="/assets/popup_assets/caravana.jpeg"
        alt="Aviso"
        className="w-full h-32 object-cover rounded-lg"
      />
      <div className="mt-2">
        <h3 className="font-inter font-bold text-[#437d6f]">Amazônia 2025</h3>
        <p className="font-montserrat text-black mb-4">Caravana missionária da IMB</p>
        <a 
          href="/" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-custom-blue text-white font-inter font-thin py-2 px-4 rounded-lg transition duration-300 self-start"
        >
          Quero me inscrever
        </a>
      </div>
    </div>
  );
};

export default Popup;
