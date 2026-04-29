import React from 'react';

const PgmModal = ({ onClose }) => {
  const regions = [
    "Asa Sul", "Asa Norte", "Sudoeste", "Noroeste", 
    "Lago Norte", "Granja do Torto", "Jardim Botânico", 
    "Águas Claras", "Taguatinga"
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
      
      {/* Contêiner Principal da Modal 
        Note que ele agora é 'relative' e 'overflow-hidden'. 
        A rolagem foi movida para a div interna.
      */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] relative overflow-hidden flex flex-col">
        
        {/* Botão Fechar Fixo no Topo da Modal */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 md:top-5 md:right-5 z-20 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-gray-100/80 backdrop-blur hover:bg-gray-200 text-gray-600 rounded-full text-lg font-bold transition-all shadow-sm"
          aria-label="Fechar"
        >
          ✕
        </button>

        {/* Área Rolável (Aqui fica o conteúdo que vai rolar) */}
        <div className="overflow-y-auto p-6 md:p-10 h-full">
          
          {/* Cabeçalho */}
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-[#006b54] mb-2 font-inter">
              Pequenos Grupos Multiplicadores (PGM)
            </h2>
            <div className="h-1 w-20 bg-[#006b54] mx-auto rounded-full"></div>
          </div>

          {/* Seção de Introdução e Valores */}
          <div className="space-y-4 text-gray-700 text-sm md:text-base text-justify leading-relaxed mb-8 font-montserrat">
            <p>
              Os <strong>Pequenos Grupos Multiplicadores (PGM)</strong> são encontros presenciais que acontecem semanalmente nos lares, em horários definidos, conduzidos por líderes devidamente formados. Reúnem de 3 a 12 pessoas em um ambiente seguro, acolhedor e relacional, onde a Palavra de Deus é compartilhada com simplicidade e profundidade.
            </p>
            <p>
              Mais do que reuniões, os PGM são espaços de comunhão, cuidado mútuo, oração e crescimento espiritual. Eles existem para possibilitar a prática saudável dos valores, do propósito e da missão que Deus nos confiou: viver a vida cristã com intencionalidade, discipular com amor e servir com generosidade.
            </p>
            <p className="italic text-[#006b54] font-medium text-center md:text-justify">
              "Não se trata apenas de uma estratégia, mas de valores a serem vividos."
            </p>
          </div>

          {/* Base Bíblica */}
          <div className="bg-gray-50 border-l-4 border-[#006b54] p-5 mb-8 rounded-r-lg">
            <p className="text-xs md:text-sm text-gray-600 italic leading-relaxed font-montserrat">
              “Eles se dedicavam ao ensino dos apóstolos e à comunhão, ao partir do pão e às orações. [...] Todos os dias continuavam a reunir-se no pátio do templo. Partiam o pão em suas casas e juntos participavam das refeições, com alegria e sinceridade de coração, louvando a Deus e tendo a simpatia de todo o povo. E o Senhor lhes acrescentava diariamente os que iam sendo salvos” 
              <span className="block mt-2 font-bold">— Atos 2:42-49</span>
            </p>
          </div>

          {/* Presença em Brasília e Redes */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Coluna 1: Regiões */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#006b54] rounded-full"></span>
                Presentes em diversas regiões:
              </h3>
              <div className="grid grid-cols-2 gap-y-1 gap-x-2 text-sm text-gray-600 font-montserrat">
                {regions.map((region) => (
                  <div key={region} className="flex items-center gap-2">
                    <span className="text-[#006b54]">•</span> {region}
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-gray-400 mt-3 italic">
                * Contamos com mais de 300 membros em 35 grupos.
              </p>
            </div>

            {/* Coluna 2: Redes */}
            <div>
              <h3 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#006b54] rounded-full"></span>
                Nossas Redes:
              </h3>
              <ul className="space-y-2 text-sm text-gray-700 font-bold font-inter">
                <li className="bg-[#f0f8f6] px-3 py-2 rounded border border-[#d2ebe4]">Rede Famílias (misto)</li>
                <li className="bg-[#f0f8f6] px-3 py-2 rounded border border-[#d2ebe4]">Rede Juventude</li>
                <li className="bg-[#f0f8f6] px-3 py-2 rounded border border-[#d2ebe4]">Rede Mulheres</li>
                <li className="bg-[#f0f8f6] px-3 py-2 rounded border border-[#d2ebe4]">Rede Homens</li>
              </ul>
            </div>
          </div>

          {/* Chamada para Ação Final */}
          <div className="text-center bg-[#006b54] text-white p-6 rounded-2xl shadow-lg">
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

          {/* Assinatura */}
          <div className="mt-8 flex items-center justify-center gap-3 text-[#006b54]/60 font-bold text-xs uppercase tracking-widest">
            <span>Coordenação de Discipulado</span>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PgmModal;