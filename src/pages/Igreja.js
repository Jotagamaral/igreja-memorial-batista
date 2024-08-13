import React, { useEffect } from 'react';
import Card from '../components/Card';
import ChurchHistory from '../components/ChurchHistory';
import igrejaData from '../data/igreja_Data.json';

const Igreja = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen py-14 md:py-16 bg-[#F5F5F5]">
      <div className="max-w-screen-xl mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8">
        {/* Card com informações na parte esquerda */}
        <Card BackgroundColor="#FFFFFF">
          <div className="p-4 md:p-8 rounded-lg">
            <ChurchHistory
              title="CONSELHO PASTORAL"
              description="A igreja é muito mais do que um simples edifício; é a reunião de uma comunidade de fé unida por valores e crenças comuns. Sua missão principal é adorar a Deus e promover o ensino e a prática dos princípios cristãos. Este espaço sagrado serve como um ponto de encontro onde os crentes se congregam para cultuar, estudar as Escrituras e compartilhar experiências de vida. Através dos cultos, estudos bíblicos, orações e eventos comunitários, a igreja oferece oportunidades para o crescimento espiritual e a edificação pessoal. <br /> Além do papel central na vida espiritual, a igreja desempenha um papel ativo na comunidade, oferecendo suporte a necessidades diversas, como assistência social, apoio emocional e programas educacionais. As atividades da igreja muitas vezes se estendem para além dos muros do templo, alcançando os bairros e cidades ao redor através de ações de caridade, evangelismo e projetos sociais."
              titleSize="text-2xl md:text-4xl"
              titleWeight="font-bold"
              titleAlign="text-left"
              titleColor="text-black"
              descriptionSize="text-base"
              descriptionWeight="font-base"
              descriptionAlign="text-justify"
              descriptionColor="text-[#191919]"
            />
          </div>
        </Card>

        {/* Área com duas divs na parte direita */}
        <div className="flex flex-col gap-4 md:gap-8">
          {/* Div 1 */}
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h3 className="text-xl md:text-2xl font-inter font-bold mb-4">Conselho Pastoral</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {igrejaData.conselhoPastoral.map((pastor, index) => (
                <div key={index} className="w-1/2 sm:w-1/3 lg:w-1/5 text-center">
                  <img src={pastor.image} alt={pastor.name} className="w-full h-auto max-w-[100px] md:max-w-[150px] max-h-[150px] md:max-h-[200px] mx-auto mb-2 rounded-md object-cover" />
                  <p className="font-montserrat font-thin">{pastor.name}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Div 2 */}
          <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h3 className="text-xl md:text-2xl font-inter font-bold mb-4">Líderes das congregações</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {igrejaData.lideresCongregacoes.map((lider, index) => (
                <div key={index} className="w-1/2 sm:w-1/3 lg:w-1/5 text-center">
                  <img src={lider.image} alt={lider.name} className="w-full h-auto max-w-[100px] md:max-w-[150px] max-h-[150px] md:max-h-[200px] mx-auto mb-2 rounded-md object-cover" />
                  <p className="font-montserrat font-thin">{lider.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Nova Seção de Cards */}
      <h1 className="text-3xl md:text-5xl font-bold text-center mt-8">Conheça as nossas congregações</h1>
      <div className="max-w-screen-xl mx-auto p-4 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
        {igrejaData.congregacoes.map((congregacao, index) => (
          <Card key={index} BackgroundColor="#FFFFFF">
            <div className="p-4 md:p-8 rounded-lg text-center">
              <img src={congregacao.image} alt={congregacao.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h4 className="text-lg md:text-xl font-bold mb-2">{congregacao.name}</h4>
              <p className="text-gray-700 text-justify">{congregacao.description}</p>
            </div>
          </Card>
        ))}
      </div>

      {/* Seção de chamada para ação */}
      <div className="text-center py-8 px-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-blue font-inter">Deseja conhecer nossas congregações?</h2>
          </div>
          <a
            href="https://chat.whatsapp.com/BqjJhcW0fMMFwYYKL57233"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 md:px-8 md:py-2 bg-custom-blue text-white text-lg font-montserrat font-bold rounded-3xl hover:bg-blue-900 transition duration-300 inline-block"
          >
            Converse conosco
          </a>
        </div>
      </div>
    </div>
  );
};

export default Igreja;
