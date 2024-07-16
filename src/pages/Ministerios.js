// src/pages/Ministerios.js
import React, { useEffect } from 'react';
import ChurchHistory from '../components/ChurchHistory';
import CardMinisterio from '../components/CardMinisterio';

const Ministerios = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="flex flex-col items-center bg-white">
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

      <div className="bg-custom-white">
        <div className="flex flex-wrap justify-center gap-8 py-8 max-w-screen-xl mx-auto">
          <CardMinisterio title="Ação Social" description="Descrição do ministério" />
          <CardMinisterio title="Apoio Emocional" description="Descrição do ministério" />
          <CardMinisterio title="Comunicação" description="Descrição do ministério" />
          <CardMinisterio title="Crescer" description="Descrição do ministério" />
          <CardMinisterio title="Conselho Diaconal" description="Descrição do ministério" />
          <CardMinisterio title="Educação Cristã (EBD)" description="Descrição do ministério" />
          <CardMinisterio title="Família" description="Descrição do ministério" />
          <CardMinisterio title="Terceira Idade" description="Descrição do ministério" />
          <CardMinisterio title="Informação" description="Descrição do ministério" />
          <CardMinisterio title="Integração e Comunhão" description="Descrição do ministério" />
          <CardMinisterio title="Juventude" description="Descrição do ministério" />
          <CardMinisterio title="Mulher Cristã em missão" description="Descrição do ministério" />
          <CardMinisterio title="Música" description="Descrição do ministério" />
          <CardMinisterio title="Oração" description="Descrição do ministério" />
          <CardMinisterio title="Surdos" description="Descrição do ministério" />
        </div>
      </div>

      <div className="flex flex-col items-center bg-white space-y-2 mb-8">
        <div className="text-center py-8">
          <ChurchHistory
            title="Deseja se tornar voluntário?"
            description=""
            titleSize="text-4xl"
            titleWeight="font-bold"
            titleAlign="text-center"
            titleFont="font-inter"
            titleColor="text-custom-blue"
          />
        </div>
        <a
          href="https://form.jotform.com/230955606462661"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-custom-blue text-white text-lg font-montserrat font-bold rounded-3xl hover:bg-blue-900 transition duration-300"
        >
          Preencha o formulário
        </a>
      </div>
    </>
  );
};

export default Ministerios;
