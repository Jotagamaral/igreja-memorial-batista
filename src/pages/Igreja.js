import React, { useEffect } from 'react';
import Card from '../components/Card';
import ChurchHistory from '../components/ChurchHistory';

const Igreja = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, [])


  return (
    <div className="min-h-screen py-16 bg-[#F5F5F5]">
      <div className="max-w-screen-xl mx-auto p-8 flex flex-col md:flex-row gap-8">
        {/* Card com informações na parte esquerda */}
        <Card BackgroundColor="#FFFFFF">
          <div className="p-8 rounded-lg">
            <ChurchHistory
              title="CONSELHO PASTORAL"
              description="A igreja é muito mais do que um simples edifício; é a reunião de uma comunidade de fé unida por valores e crenças comuns. Sua missão principal é adorar a Deus e promover o ensino e a prática dos princípios cristãos. Este espaço sagrado serve como um ponto de encontro onde os crentes se congregam para cultuar, estudar as Escrituras e compartilhar experiências de vida. Através dos cultos, estudos bíblicos, orações e eventos comunitários, a igreja oferece oportunidades para o crescimento espiritual e a edificação pessoal. <br /> Além do papel central na vida espiritual, a igreja desempenha um papel ativo na comunidade, oferecendo suporte a necessidades diversas, como assistência social, apoio emocional e programas educacionais. As atividades da igreja muitas vezes se estendem para além dos muros do templo, alcançando os bairros e cidades ao redor através de ações de caridade, evangelismo e projetos sociais."
              titleSize="text-4xl"
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
        <div className="flex flex-col gap-8">
          {/* Div 1 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-inter font-bold mb-4">Conselho Pastoral</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 text-center">
                <img src="/assets/igreja_assets/PR_David_Pereira.jpg" alt="Pr. David Pereira" className="w-full h-auto max-w-[150px] max-h-[200px] mx-auto mb-2 rounded-md object-cover" />
                <p className="font-montserrat font-thin">Pr. David Pereira</p>
              </div>
              <div className="flex-1 text-center">
                <img src="/assets/igreja_assets/PR_Francisco_Menezes.jpg" alt="Pr. Francisco Menezes" className="w-full h-auto max-w-[150px] max-h-[200px] mx-auto mb-2 rounded-md  object-cover" />
                <p className="font-montserrat font-thin">Pr. Francisco Menezes</p>
              </div>
              <div className="flex-1 text-center">
                <img src="/assets/igreja_assets/PR_Neander_Marques.jpg" alt="Pr. Neander Marques" className="w-full h-auto max-w-[150px] max-h-[200px] mx-auto mb-2 rounded-md object-cover" />
                <p className="font-montserrat font-thin">Pr. Neander Marques</p>
              </div>
              <div className="flex-1 text-center">
                <img src="/assets/igreja_assets/MM_Henrique_Lino.png" alt="MM Henrique Lino" className="w-full  max-w-[150px] max-h-[200px] mx-auto mb-2 rounded-md object-cover" />
                <p className="font-montserrat font-thin">MM. Henrique Lino</p>
              </div>
            </div>
          </div>

          {/* Div 2 */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-inter font-bold mb-4">Líderes das congregações</h3>
            <div className="flex flex-wrap gap-4">
              <div className="flex-1 text-center">
                <img src="/assets/igreja_assets/PR_Paulo.jpg" alt="Pr. Paulo" className="w-full h-auto max-w-[150px] max-h-[200px] mx-auto mb-2 rounded-md object-cover" />
                <p className="font-montserrat font-thin">Pr. Paulo</p>
              </div>
              <div className="flex-1 text-center">
                <img src="/assets/igreja_assets/PR_Renato.jpg" alt="Pr. Renato Goes" className="w-full h-auto max-w-[150px] max-h-[200px] mx-auto mb-2 rounded-md  object-cover" />
                <p className="font-montserrat font-thin">Pr. Renato Goes</p>
              </div>
              <div className="flex-1 text-center">
                <img src="/assets/igreja_assets/PR_Manoel.jpg" alt="Pr. Manoel" className="w-full h-auto max-w-[150px] max-h-[200px] mx-auto mb-2 rounded-md object-cover" />
                <p className="font-montserrat font-thin">Pr. Manoel</p>
              </div>
              <div className="flex-1 text-center">
                <img src="/assets/igreja_assets/PR_Cleber.jpg" alt="Pr.Cleber" className="w-full  max-w-[150px] max-h-[200px] mx-auto mb-2 rounded-md object-cover" />
                <p className="font-montserrat font-thin">Pr.Cleber</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Nova Seção de Cards */}
      <h1 className="text-5xl font-bold text-center mt-8">Conheça as nossas congregações</h1>
      <div className=" max-w-screen-xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">

        <Card BackgroundColor="#FFFFFF">
          <div className="p-8 rounded-lg text-center">
            <img src="/assets/igreja_assets/CGR_Cavalcante.jpg" alt="Congregação 1" className="w-full  object-cover rounded-md mb-4" />
            <h4 className="text-xl font-bold mb-2">CAVALCANTE - GO</h4>
            <p className="text-gray-700 text-justify">A igreja trabalha na cidade de Cavalcante desde 2013 em parceria com a childfund Brasil. A congregação da memorial naquela cidade é liderada pelo Pr. Paulo e Missionária Lídia.</p>
          </div>
        </Card>
        <Card BackgroundColor="#FFFFFF">
          <div className="p-8 rounded-lg text-center">
            <img src="/assets/igreja_assets/CGR_Riacho_fundo_II.jpg" alt="Congregação 2" className="w-full  object-cover rounded-md mb-4" />
            <h4 className="text-xl font-bold mb-2">RIACHO FUNDO II</h4>
            <p className="text-gray-700 text-justify">A igreja trabalha na cidade de Cavalcante desde 2013 em parceria com a childfund Brasil. A congregação da memorial naquela cidade é liderada pelo Pr. Paulo e Missionária Lídia.</p>
          </div>
        </Card>
        <Card BackgroundColor="#FFFFFF">
          <div className="p-8 rounded-lg text-center">
            <img src="/assets/igreja_assets/CGR_Jardim_Mangueiral.jpg" alt="Congregação 3" className="w-full  object-cover rounded-md mb-4" />
            <h4 className="text-xl font-bold mb-2">JARDIM MANGUEIRAL</h4>
            <p className="text-gray-700 text-justify">A igreja trabalha na cidade de Cavalcante desde 2013 em parceria com a childfund Brasil. A congregação da memorial naquela cidade é liderada pelo Pr. Paulo e Missionária Lídia.</p>
          </div>
        </Card>
        <Card BackgroundColor="#FFFFFF">
          <div className="p-8 rounded-lg text-center">
            <img src="/assets/igreja_assets/CGR_Vale_do_Amanhecer.jpg" alt="Congregação 4" className="w-full  object-cover rounded-md mb-4" />
            <h4 className="text-xl font-bold mb-2">VALE DO AMANHECER</h4>
            <p className="text-gray-700 text-justify">A igreja trabalha na cidade de Cavalcante desde 2013 em parceria com a childfund Brasil. A congregação da memorial naquela cidade é liderada pelo Pr. Paulo e Missionária Lídia.</p>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Igreja;
