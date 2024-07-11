// src/pages/Igreja.js
import React from 'react';
import ChurchHistory from '../components/ChurchHistory';

const Igreja = () => {
  return (
    <div className="bg-cover bg-center bg-no-repeat min-h-screen flex flex-col pt-20 pl-16" style={{ backgroundImage: 'url(/assets/Igreja-section-photo.jpg)' }}>
      <ChurchHistory 
        title="A IGREJA MEMORIAL <br /> BATISTA"
        titleSize="text-6xl"
        titleWeight="font-bold"
        titleAlign="text-left"
        titleColor='text-white'
        descriptionAlign="text-left"
        descriptionSize="text-lg"
        descriptionWeight="font-bold"
        descriptionColor='text-white'
      />
      <div className="flex-1 bg-custom-blue bg-opacity-85 pt-8 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-8">
          <div>
            <ChurchHistory
              title="HISTÓRIA"
              description="A Igreja Memorial Batista de Brasília foi fundada com a missão de ser um farol de fé e esperança na capital do Brasil. Desde sua inauguração em Julho de 1960, tem desempenhado um papel vital na comunidade, oferecendo apoio espiritual, programas educacionais e serviços comunitários. Ao longo dos anos, a igreja cresceu e se tornou um ponto de encontro para aqueles que buscam fortalecer sua fé e se envolver em atividades de adoração e serviço cristão."
              titleSize="text-3xl"
              titleAlign="text-center"
              titleColor='text-white'
              descriptionSize="text-lg"
              descriptionAlign="text-left"
              descriptionColor='text-white'
            />
          </div>
          <div>
            <ChurchHistory
              title="PROPÓSITO"
              description="Levar pessoas a Cristo, à participação na adoração, à comunhão na família de Deus e, fundamentada na Bíblia, capacitar para o serviço do Senhor. Ser uma igreja relevante, íntegra, acolhedora e propiciadora da descoberta, da capacitação e do exercício dos ministérios de cada pessoa, em pequenos grupos ou na grande congregação."
              titleSize="text-3xl"
              titleAlign="text-center"
              titleColor='text-white'
              descriptionSize="text-lg"
              descriptionAlign="text-left"
              descriptionColor='text-white'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Igreja;
