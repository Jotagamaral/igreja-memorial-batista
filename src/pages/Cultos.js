import React from 'react';
import ChurchHistory from '../components/ChurchHistory';

const Cultos = () => {
  return (
    <div className="p-16 pb-0 bg-gray-100">
      {/* Seção superior com duas colunas */}
      <div className='pl-4 border-l-2 border-black'>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-b-2 border-black">
          <div className="flex flex-col justify-center items-start p-4">
            <ChurchHistory 
              title="Cultos"
              description="Venha cultuar conosco!"
              titleSize="text-7xl"
              titleWeight="font-bold"
              titleAlign="text-left"
              titleColor='text-custom-blue'
              descriptionAlign="text-right"
              descriptionSize="text-lg"
              descriptionWeight="font-bold"
              descriptionColor='text-custom-blue'
            />
          </div>
          <div className="flex justify-center items-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10858.179226751006!2d-47.91218907843037!3d-15.80679683477674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2558ab5507bd%3A0x432ec3a97de868ed!2sIgreja%20Memorial%20Batista%20de%20Bras%C3%ADlia%20%7C%20IMBB!5e0!3m2!1spt-BR!2sbr!4v1720710737937!5m2!1spt-BR!2sbr"
              width="100%"
              height="400"
              className="border-2 border-black rounded-lg mb-4"
              allowFullScreen=""
              loading="lazy"
              title="Localização da Igreja Memorial Batista"
            ></iframe>
          </div>
        </div>
      
        {/* Seção inferior com quatro colunas */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="flex flex-col items-start border-r-2 border-black">
            <ChurchHistory 
              title="Quarta"
              description="19h30 - Culto de oração"
              titleSize="text-xl"
              titleWeight="font-bold"
              titleAlign="text-left"
              titleColor='text-custom-blue'
              descriptionAlign="text-left"
              descriptionSize="text-lg"
              descriptionWeight="font-bold"
              descriptionColor='text-black'
            />
          </div>
          <div className="flex flex-col items-start border-r-2 border-black">
            <ChurchHistory 
              title="Sexta"
              description="20 - Culto dos Adolescentes + PG"
              titleSize="text-xl"
              titleWeight="font-bold"
              titleAlign="text-left"
              titleColor='text-custom-blue'
              descriptionAlign="text-left"
              descriptionSize="text-lg"
              descriptionWeight="font-bold"
              descriptionColor='text-black'
            />
          </div>
          <div className="flex flex-col items-start border-r-2 border-black">
            <ChurchHistory 
              title="Sábado"
              description="16h - Culto em LIBRAS <br /> <br />
                          19h Culto da Juventude"
              titleSize="text-xl"
              titleWeight="font-bold"
              titleAlign="text-left"
              titleColor='text-custom-blue'
              descriptionAlign="text-left"
              descriptionSize="text-lg"
              descriptionWeight="font-bold"
              descriptionColor='text-black'
            />
          </div>
          <div className="flex flex-col items-start border-r-2 border-black pb-20">
            <ChurchHistory 
              title="Domingo"
              description="10h15 - Culto dominical <br />
                          10h15 - Culto ministério Crescer <br />
                          19h - Culto dominical Noturno"
              titleSize="text-xl"
              titleWeight="font-bold"
              titleAlign="text-left"
              titleColor='text-custom-blue'
              descriptionAlign="text-left"
              descriptionSize="text-lg"
              descriptionWeight="font-bold"
              descriptionColor='text-black'
            />
          </div>
        </div>
      </div>            
    </div>
  );
};

export default Cultos;
