import React, { useState } from 'react';
import ChurchHistory from '../components/ChurchHistory';
import ParallaxSection from '../components/ParallaxSection';
import { useInView } from 'react-intersection-observer';

const Jesus = () => {
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const isMobile = window.innerWidth <= 768;

  const [activeText, setActiveText] = useState(null);

  const toggleText = (textNumber) => {
    setActiveText(activeText === textNumber ? null : textNumber);
  };

  return (
    <ParallaxSection 
      backgroundImage="/assets/jesus_assets/parallax-photo.jpg" 
      color={'bg-custom-blue'}
      imageOpacity={0.4}
    >
      <div className="text-center text-white overflow-x-hidden overflow-y-hidden">
        <h1 className="text-3xl md:text-6xl font-bold mb-8 font-inter text-custom-gold">QUEM É JESUS?</h1>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 pb-8">
          
          <div
            ref={ref1}
            className={`p-4 md:p-5 bg-white bg-opacity-5 rounded-md shadow-lg max-w-lg mx-auto hover:scale-105 
                        ${isMobile ? '' : 'transform transition-transform duration-1000 ease-in-out'} 
                        ${inView1 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          >
            <div 
              className={`transition-all duration-500 ease-in-out overflow-hidden  ${isMobile && activeText !== 1 ? 'max-h-32' : 'max-h-full'}`}
            >
              <ChurchHistory
                title="Jesus Cristo"
                description={
                  isMobile && activeText !== 1
                    ? `Jesus Cristo é o Filho do Deus Vivo e o Salvador da humanidade. Ele é o Messias prometido, cuja vida e ensinamentos...`
                    : `Jesus Cristo é o Filho do Deus Vivo e o Salvador da humanidade. Ele é o Messias prometido, cuja vida e ensinamentos transformaram o mundo.<br /> 
                        Jesus é mais do que uma figura histórica; Ele é o exemplo perfeito de amor, graça e redenção, guiando-nos com Sua luz em cada passo do caminho. <br />
                        Venha conhecer o Jesus que nos chama para uma vida eterna de esperança e paz.`
                }
                titleSize="text-2xl md:text-4xl"
                titleWeight="font-bold"
                titleAlign="text-left"
                titleColor="text-custom-gold"
                descriptionSize="text-sm md:text-base"
                descriptionWeight="font-light"
                descriptionAlign="text-justify"
                descriptionColor="text-white"
              />
            </div>
            {isMobile && (
              <button 
                className="text-custom-gold mt-2 font-bold focus:outline-none"
                onClick={() => toggleText(1)}
              >
                {activeText === 1 ? 'Ler Menos' : 'Ler Mais'}
              </button>
            )}
          </div>

          <div
            ref={ref2}
            className={`p-4 md:p-5 bg-white bg-opacity-5 rounded-md shadow-lg max-w-lg mx-auto hover:scale-105 
                        ${isMobile ? '' : 'transform transition-transform duration-1000 ease-in-out'} 
                        ${inView2 ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}
          >
            <div 
              className={`transition-all duration-500 ease-in-out overflow-hidden  ${isMobile && activeText !== 2 ? 'max-h-32' : 'max-h-full'}`}
            >
              <ChurchHistory
                title="Sua Importância"
                description={
                  isMobile && activeText !== 2
                    ? `Jesus é conhecido e amado por seus profundos ensinamentos. Sua vida foi um exemplo perfeito de compaixão e serviço...`
                    : `Jesus é conhecido e amado por seus profundos ensinamentos. Sua vida foi um exemplo perfeito de compaixão e serviço, tocando corações e transformando vidas. Sua morte na cruz é vista como o maior ato de amor e sacrifício, enquanto sua ressurreição nos oferece a promessa de vida eterna. Jesus nos chama a viver em comunhão com Deus, nos guiando com Sua sabedoria e graça.`
                }
                titleSize="text-2xl md:text-4xl"
                titleWeight="font-bold"
                titleAlign="text-left"
                titleColor="text-custom-gold"
                descriptionSize="text-sm md:text-base"
                descriptionWeight="font-light"
                descriptionAlign="text-justify"
                descriptionColor="text-white"
              />
            </div>
            {isMobile && (
              <button 
                className="text-custom-gold mt-2 font-bold focus:outline-none"
                onClick={() => toggleText(2)}
              >
                {activeText === 2 ? 'Ler Menos' : 'Ler Mais'}
              </button>
            )}
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default Jesus;
