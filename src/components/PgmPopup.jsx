import React, { useState, useEffect } from 'react';

const PgmPopup = ({ onLearnMore }) => {
  // Estado para controlar a animação de entrada
  const [animateIn, setAnimateIn] = useState(false);
  // Estado para controlar se o pop-up está aberto ou reduzido a um botão
  const [isMinimized, setIsMinimized] = useState(false);

  useEffect(() => {
    setAnimateIn(true);
  }, []);

  // Se estiver minimizado, renderiza apenas o botão flutuante (bolinha)
  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-4 right-4 md:left-4 md:right-auto z-40 bg-[#006b54] text-white w-10 h-10 rounded-full shadow-2xl flex items-center justify-center hover:bg-[#005240] hover:scale-110 transition-all duration-300 border-2 border-white"
        aria-label="Reabrir aviso do PGM"
      >
        <span className="font-bold text-sm font-inter">PGM</span>
      </button>
    );
  }

  // Se não estiver minimizado, renderiza o pop-up completo
  return (
    <div
      className={`fixed bottom-4 md:left-4 bg-white p-5 rounded-lg shadow-2xl z-40 transform transition-all duration-700 border-l-4 border-[#006b54]
      ${animateIn ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-20px]'} 
      w-[90%] left-[5%] md:left-4 md:w-80`}
    >
      {/* Botão de Minimizar */}
      <button
        onClick={() => setIsMinimized(true)}
        className="absolute top-2 right-3 text-gray-400 hover:text-gray-700 transition text-lg"
        aria-label="Minimizar"
      >
        ✕
      </button>
      
      <div className="mt-1">
        <h3 className="font-bold text-[#006b54] text-lg font-inter">Faça parte de um PGM</h3>
        <p className="text-gray-600 text-sm mt-1 mb-4 leading-snug font-montserrat">
          A vida da igreja também acontece durante a semana. Não caminhe sozinho!
        </p>
        <button 
          onClick={onLearnMore}
          className="bg-[#006b54] hover:bg-[#005240] text-white font-medium py-2 px-4 rounded transition duration-300 w-full font-inter"
        >
          Saber Mais
        </button>
      </div>
    </div>
  );
};

export default PgmPopup;