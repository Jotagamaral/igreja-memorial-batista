import React from 'react';
import WelcomeCard from '../components/WelcomeCard';
import ChurchHistory from '../components/ChurchHistory';
import ChurchPhotos from '../components/ChurchPhotos';

const Welcome = () => {
  return (
    <div>
      <WelcomeCard 
        backgroundType="image" 
        backgroundSrc={'../assets/welcome-background.jpg'}  // Passando a imagem importada
        welcomeText="Bem-vindo à Igreja Memorial Batista" 
      />
      
      <div id="home" className="h-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <ChurchHistory 
            title="Boas-Vindas"
            description="A Igreja Memorial Batista tem como missão divulgar a mensagem salvadora do Evangelho e levar vidas a Cristo. Nós, da família Memorial, damos as boas-vindas a todos os visitantes, convidando-os a participar da nossos eventos presencialmente ou online."
            titleSize="text-3xl"
            titleWeight="font-semibold"
            descriptionAlign="text-left"
            descriptionSize="text-lg"
            descriptionWeight="font-light"
          />
        <ChurchPhotos
          photos={[
            { file: "/assets/photo-side_1.jpg", styles: { top: '0', right: '10%', width: '175px', height: '175px' } },
            { file: "/assets/photo-side_2.jpg", styles: { bottom: '0', left: '10%', width: '150px', height: '150px' } },
          ]}
        />
      </div>

      <div id="about" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className='order-2 md:order-1'>
          <ChurchPhotos
            photos={[
              { file: "/assets/photo-side_3.jpg", styles: { top: '0', left: '10%', width: '150px', height: '150px' } },
              { file: "/assets/photo-side_4.jpg", styles: { bottom: '0', right: '10%', width: '175px', height: '175px' } },
            ]}
          />
        </div>
        <div className='order-1 md:order-2'>
          <ChurchHistory
            title="Missão e Visão"
            description="Levar pessoas a Cristo, à participação na adoração, à comunhão na família de Deus e, fundamentada na Bíblia, capacitar para o serviço do Senhor. Ser uma igreja relevante, íntegra, acolhedora e propiciadora da descoberta, da capacitação e do exercício dos ministérios de cada pessoa, em pequenos grupos ou na grande congregação."
            titleSize="text-3xl"
            titleWeight="font-semibold"
            descriptionAlign="text-right"
            descriptionSize="text-lg"
            descriptionWeight="font-light"
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
