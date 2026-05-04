import React, { useState } from 'react';

const PgmModal = ({ onClose }) => {
  // Controle de estado para definir qual "slide" está ativo: 0 (Texto) ou 1 (Infográfico)
  const [currentSlide, setCurrentSlide] = useState(0);

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
          
          {/* Menu de Navegação do Carrossel */}
          <div className="flex gap-2 md:gap-4 mb-8 mt-6 md:mt-0 bg-gray-100 p-1.5 rounded-full w-fit">
            <button
              onClick={() => setCurrentSlide(0)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                currentSlide === 0 
                  ? 'bg-[#006b54] text-white shadow-md' 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Informações
            </button>
            <button
              onClick={() => setCurrentSlide(1)}
              className={`px-6 py-2 rounded-full font-bold text-sm transition-all duration-300 ${
                currentSlide === 1 
                  ? 'bg-[#006b54] text-white shadow-md' 
                  : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              Infográfico
            </button>
          </div>

          {/* Área de Conteúdo Alternável */}
          <div className="w-full max-w-3xl flex-grow mb-6">
            {currentSlide === 0 ? (
              
              /* SLIDE 0: Texto Escrito */
              <div className="space-y-4 text-gray-700 text-sm md:text-base text-justify leading-relaxed font-montserrat animate-fade-in">
                <div className="text-center mb-8">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#006b54] mb-2 font-inter">
                    Pequenos Grupos Multiplicadores (PGM)
                  </h2>
                  <div className="h-1 w-20 bg-[#006b54] mx-auto rounded-full"></div>
                </div>
                
                <p>
                  Os <strong>Pequenos Grupos Multiplicadores (PGM)</strong> são encontros presenciais que acontecem semanalmente nos lares, em horários definidos, conduzidos por líderes devidamente formados. Reúnem de 3 a 12 pessoas em um ambiente seguro, acolhedor e relacional, onde a Palavra de Deus é compartilhada com simplicidade e profundidade.
                </p>
                <p>
                  Mais do que reuniões, os PGM são espaços de comunhão, cuidado mútuo, oração e crescimento espiritual. Eles existem para possibilitar a prática saudável dos valores, do propósito e da missão que Deus nos confiou: viver a vida cristã com intencionalidade, discipular com amor e servir com generosidade.
                </p>
                <p>
                  Não se trata apenas de uma estratégia, mas de valores a serem vividos. Viver em pequenos grupos é um valor que expressa como caminhamos como igreja e no que estamos nos tornando como discípulos de Cristo.
                </p>
                
                <div className="bg-gray-50 border-l-4 border-[#006b54] p-5 my-6 rounded-r-lg">
                  <p className="text-xs md:text-sm text-gray-600 italic leading-relaxed">
                    Inspirados na vida da igreja primitiva descrita em Atos 2:42-49 — “Eles se dedicavam ao ensino dos apóstolos e à comunhão, ao partir do pão e às orações. […] Todos os dias continuavam a reunir-se no pátio do templo. Partiam o pão em suas casas e juntos participavam das refeições, com alegria e sinceridade de coração, louvando a Deus e tendo a simpatia de todo o povo. E o Senhor lhes acrescentava diariamente os que iam sendo salvos” —, os PGM expressam, de forma prática, esse mesmo modelo de discipulado vivido no cotidiano.
                  </p>
                </div>
                
                <p>
                  Atualmente, contamos com mais de 300 membros engajados em 36 Pequenos Grupos Discipuladores, presentes em 9 regiões de Brasília: Asa Sul, Asa Norte, Sudoeste, Noroeste, Lago Norte, Granja do Torto, Jardim Botânico, Águas Claras e Taguatinga.
                </p>
                <p className="mb-4">
                  Há 4 redes em funcionamento: Rede Famílias (misto), Rede Juventude, Rede Mulheres e Rede Homens.
                </p>
              </div>

            ) : (

              /* SLIDE 1: Infográfico */
              <div className="w-full flex justify-center animate-fade-in">
                <img 
                  src="/assets/popup_assets/PGMs.png" 
                  alt="Infográfico dos Pequenos Grupos Multiplicadores" 
                  className="w-full h-auto object-contain rounded-xl shadow-sm"
                />
              </div>

            )}
          </div>

          {/* Setas de Navegação Inferiores (Apoio visual do carrossel) */}
          <div className="flex justify-between w-full max-w-3xl mb-8 px-2">
            <button
               onClick={() => setCurrentSlide(0)}
               className={`font-bold text-sm transition-colors ${currentSlide === 1 ? 'text-[#006b54] hover:text-[#005240]' : 'text-transparent cursor-default select-none'}`}
               disabled={currentSlide === 0}
               aria-hidden={currentSlide === 0}
            >
              ← Ler Informações
            </button>
            <button
               onClick={() => setCurrentSlide(1)}
               className={`font-bold text-sm transition-colors ${currentSlide === 0 ? 'text-[#006b54] hover:text-[#005240]' : 'text-transparent cursor-default select-none'}`}
               disabled={currentSlide === 1}
               aria-hidden={currentSlide === 1}
            >
              Ver Infográfico →
            </button>
          </div>

          {/* Chamada para Ação Final (Formulário) */}
          <div className="text-center bg-[#006b54] text-white p-6 rounded-2xl shadow-lg w-full max-w-3xl shrink-0">
            <h3 className="text-xl font-bold mb-3 font-inter">Venha fazer parte!</h3>
            <p className="text-sm mb-6 opacity-90 font-montserrat">
              Experimente a alegria de caminhar junto, crescer na fé e viver a missão que o Senhor nos confiou.
            </p>
            <a 
              href="https://forms.gle/yiog2RNtVB5dxQXa8" 
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