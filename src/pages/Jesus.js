import React from 'react';
import ChurchHistory from '../components/ChurchHistory';
import ParallaxSection from '../components/ParallaxSection';

const Jesus = () => {
  return (
    <ParallaxSection backgroundImage="/assets/parallax-photo.jpg" height='75vh'>
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-10 font-inter text-custom-gold">QUEM É JESUS?</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <div className="p-5 bg-white bg-opacity-5 rounded-md shadow-lg transform transition-transform duration-500 hover:scale-105 max-w-lg mx-auto">
            <ChurchHistory
              title="Jesus Cristo"
              description="Jesus Cristo é o Filho do Deus Vivo e o Salvador da humanidade. Ele é o Messias prometido, cuja vida e ensinamentos transformaram o mundo.<br /> 
              Jesus é mais do que uma figura histórica; Ele é o exemplo perfeito de amor, graça e redenção, guiando-nos com Sua luz em cada passo do caminho. <br />
              Venha conhecer o Jesus que nos chama para uma vida eterna de esperança e paz."
              titleSize="text-4xl"
              titleWeight="font-semibold"
              titleAlign="text-left"
              titleColor="text-custom-gold"
              descriptionSize=""
              descriptionWeight="font-extralight"
              descriptionAlign="text-left"
              descriptionColor="text-white"
            />
          </div>
          <div className="p-5 bg-white bg-opacity-5 rounded-md shadow-lg transform transition-transform duration-500 hover:scale-105 max-w-lg mx-auto">
            <ChurchHistory
              title="Sua Importância"
              description="Jesus é conhecido e amado por seus profundos ensinamentos. Sua vida foi um exemplo perfeito de compaixão e serviço, tocando corações e transformando vidas. Sua morte na cruz é vista como o maior ato de amor e sacrifício, enquanto sua ressurreição nos oferece a promessa de vida eterna. Jesus nos chama a viver em comunhão com Deus, nos guiando com Sua sabedoria e graça."
              titleSize="text-4xl"
              titleWeight="font-semibold"
              titleAlign="text-left"
              titleColor="text-custom-gold"
              descriptionSize=""
              descriptionWeight="font-light"
              descriptionAlign="text-left"
              descriptionColor="text-white"
            />
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default Jesus;
