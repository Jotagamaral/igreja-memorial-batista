import React, { useEffect } from 'react';
import ChurchHistory from '../components/ChurchHistory';
import CardMinisterio from '../components/CardMinisterio';
import ministeriosData from '../data/ministerios_Data.json';

const Ministerios = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className='bg-custom-white'>
        <div className="flex flex-col items-center">
          <div className="text-center mt-20 py-8">
            <ChurchHistory
              title="Conheça nossos ministérios"
              description="São muitas as formas de servir ao Senhor em nossa igreja!"
              titleSize="text-4xl"
              titleWeight="font-bold"
              titleAlign="text-center"
              titleFont="font-inter"
              titleColor="text-custom-blue"
              descriptionAlign="text-center"
              descriptionSize="text-lg"
              descriptionWeight="font-bold"
              descriptionFont="font-montserrat"
              descriptionColor="text-custom-blue"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 max-w-screen-xl mx-auto">
          {ministeriosData.map((ministerio, index) => (
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

        <div className="text-center py-8 bg-custom-white">
          <div className="max-w-screen-lg mx-auto">
            <div className="mb-4">
              <h2 className="text-4xl font-bold text-custom-blue font-inter">DESEJA SE TORNAR</h2>
              <h2 className="text-6xl font-bold text-custom-blue font-inter">VOLUNTÁRIO?</h2>
            </div>
            <a
              href="https://form.jotform.com/230955606462661"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-2 bg-custom-blue text-white text-lg font-montserrat font-bold rounded-3xl hover:bg-blue-900 transition duration-300 inline-block"
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
