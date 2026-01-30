import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // Importação para animação
import ChurchHistory from '../components/ChurchHistory';
import CardMinisterio from '../components/CardMinisterio';
import ministeriosData from '../data/ministerios_Data.json';

const Ministerios = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lógica de rotação automática do carrossel (5 segundos)
  useEffect(() => {

    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % ministeriosData.ebd.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isPaused]);

  return (
    <>
      <div className="bg-custom-white">
        <div className="flex flex-col items-center">

          {/* Seção de apresentação de Escola Bíblica Dominical */}
          <div className="w-full max-w-screen-xl mx-auto px-4 md:px-8 lg:px-16 py-12 mt-16">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              
              {/* Esquerda: Texto */}
              <div className="w-full lg:w-1/2 text-center lg:text-left space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-custom-blue font-arya">
                  Escola Bíblica Dominical
                </h2>
                <div className="w-24 h-1 bg-custom-blue mx-auto lg:mx-0 rounded-full"></div>
                <p className="text-base md:text-lg text-gray-700 font-poppins leading-relaxed">
                  A Escola Bíblica Dominical (EBD) é o principal meio de ensino bíblico da nossa igreja. 
                  Temos classes específicas para todas as idades, onde aprofundamos 
                  o conhecimento nas Escrituras e fortalecemos a comunhão. Venha aprender mais sobre a Palavra de Deus 
                  todos os domingos às 09h.
                </p>
                <a
                  href="https://www.youtube.com/@imbb/playlists"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="EBD no YouTube da Igreja Memorial"
                  className="px-6 py-2 border-2 border-custom-blue text-custom-blue font-poppins font-bold rounded-3xl hover:bg-custom-blue hover:text-white transition duration-300 inline-block cursor-pointer"
                >
                  Participe da nossa EBD Online!
                </a>
                    
              </div>

              {/* Direita: Carrossel */}
              <div 
                className="w-full lg:w-1/2 aspect-[4/5] max-w-md mx-auto relative rounded-2xl overflow-hidden shadow-xl group"
                
                // Desktop: Pausa ao passar o mouse
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}

                // Mobile: Pausa ao tocar na tela
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                >
                <AnimatePresence mode='wait'>
                  <motion.img
                    key={currentImageIndex}
                    src={ministeriosData.ebd[currentImageIndex].image}
                    alt={`Foto da classe EBD ${currentImageIndex + 1}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.5 }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>
                
                {/* Indicadores (Barras Retangulares) */}
                <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-10">
                  {ministeriosData.ebd.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        index === currentImageIndex 
                          ? "w-8 bg-custom-blue opacity-100" // Barra ativa: mais larga e totalmente opaca
                          : "w-4 bg-white/60 hover:bg-white/90" // Barra inativa: curta e translúcida
                      }`}
                      aria-label={`Ir para imagem ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>
          </div>
          {/* Fim da Seção EBD */}


          {/* Seção de apresentação de Ministérios da Igreja */}
          <div className="text-center px-4 md:px-8 lg:px-16 w-full">
            <ChurchHistory
              title="Conheça nossos ministérios"
              description="São muitas as formas de servir ao Senhor em nossa igreja!"
              titleSize="text-3xl md:text-4xl"
              titleWeight="font-bold"
              titleAlign="text-center"
              titleFont="font-arya"
              titleColor="text-custom-blue"
              descriptionAlign="text-center"
              descriptionSize="text-base md:text-lg"
              descriptionWeight="font-bold"
              descriptionFont="font-poppins"
              descriptionColor="text-custom-blue"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 py-8 px-4 md:px-8 lg:px-16 w-full max-w-screen-xl mx-auto">
          {ministeriosData.ministerios.map((ministerio, index) => (
            ministerio.description && ministerio.image && 
            <CardMinisterio
              key={index}
              title={ministerio.title}
              lider={ministerio.lider}
              email={ministerio.email}
              tel={ministerio.tel}
              description={ministerio.description}
              image={ministerio.image}
            />
          ))}
        </div>

        <div className="text-center py-8 bg-custom-white px-4 md:px-8 lg:px-16 w-full">
          <div className="max-w-screen-lg mx-auto">
            <div className="mb-4">
              <h2 className="text-3xl md:text-4xl font-bold text-custom-blue font-arya">DESEJA SE TORNAR</h2>
              <h2 className="text-5xl md:text-6xl font-bold text-custom-blue font-arya">VOLUNTÁRIO?</h2>
            </div>
            <a
              href="https://form.jotform.com/251174825458059"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 md:px-8 md:py-2 bg-custom-blue text-white text-lg font-poppins font-bold rounded-3xl hover:bg-blue-900 transition duration-300 inline-block"
            >
              Preencha o formulário
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Ministerios;