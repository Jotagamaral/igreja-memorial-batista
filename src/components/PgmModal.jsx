import React from 'react';

const PgmModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] relative overflow-hidden flex flex-col">
        
        {/* Botão Fechar Fixo no Topo da Modal */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-5 md:right-5 z-20 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-100/80 backdrop-blur hover:bg-gray-200 text-gray-600 rounded-full text-lg font-bold transition-all shadow-sm"
          aria-label="Fechar"
        >
          ✕
        </button>

        <div className="overflow-y-auto p-4 md:p-8 h-full flex flex-col items-center">
          
          {/* Infográfico do PGM */}
          <div className="w-full mb-8 flex justify-center mt-6 md:mt-2">
            {/* IMPORTANTE: Lembre-se de colocar a imagem na sua pasta public/assets 
                e ajustar o caminho do 'src' abaixo para o nome correto do arquivo */}
            <img 
              src="/assets/popup_assets/PGMs.png" 
              alt="Infográfico dos Pequenos Grupos Multiplicadores" 
              className="w-full h-auto object-contain rounded-xl"
            />
          </div>

          {/* Chamada para Ação Final (Formulário) */}
          <div className="text-center bg-[#006b54] text-white p-6 rounded-2xl shadow-lg w-full max-w-3xl mb-4">
            <h3 className="text-xl font-bold mb-3 font-inter">Venha fazer parte!</h3>
            <p className="text-sm mb-6 opacity-90 font-montserrat">
              Experimente a alegria de caminhar junto, crescer na fé e viver a missão que o Senhor nos confiou.
            </p>
            <a 
              href="https://forms.gle/hFRQyhv3XCwtVqEX6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block bg-white text-[#006b54] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-transform hover:scale-105 shadow-md"
            >
              Preencher Formulário de Inscrição
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PgmModal;