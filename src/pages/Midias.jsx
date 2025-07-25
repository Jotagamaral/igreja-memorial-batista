import React, { useEffect } from 'react';
import ChurchHistory from '../components/ChurchHistory';
import Card from '../components/Card';

const Midias = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#EBEBEB]">
      <div className="flex flex-col md:flex-row mt-16 max-w-screen-xl mx-auto items-center justify-center">
        <div className="flex-1 p-8">
          <div className="rounded-2xl bg-white shadow-lg p-8">
            <h1 className="text-2xl text-justify font-inter font-bold mb-4">Acompanhe a memorial no YouTube</h1>
            <p className="mb-4 text-justify font-montserrat">
              Acesse nosso canal no YouTube e assista nossos cultos e muitos outros conteúdos como:
            </p>
            <ul className="list-disc list-inside mb-6 text-justify font-montserrat">
              <li>Escola bíblica dominical online</li>
              <li>Transmissão ao vivo dos cultos</li>
              <li>Cortes das mensagens</li>
              <li>Cortes dos louvores ministrados</li>
              <li>Cultos antigos</li>
              <li>Cultos da Juventude</li>
            </ul>
            <div className="text-left">  {/* Adicionando esta div para alinhar o botão à esquerda */}
              <a
                href="https://www.youtube.com/@imbb"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Inscreva-se no canal do YouTube da Igreja Memorial"
                className="bg-[#E2E2EB] text-[#0067CB] font-inter font-thin py-2 px-4 rounded-lg hover:bg-[#d8d8d8] transition duration-300 mt-4"
              >
                ACESSE O CANAL DA IGREJA
              </a>

            </div>  
          </div>
        </div>

        <div className="flex-1 pr-8 hidden md:block">
          <div className="flex justify-center">
            <div className="w-full aspect-normal">
              <iframe 
                className="w-full h-full" 
                src="https://www.youtube.com/embed/XjGxTbhVeqM?si=68gOS8vaRl6IyfOe" 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen></iframe>
            </div>
          </div> 
        </div>
      </div>


      {/* Nova área de cards */}
      <div className='bg-[#EBEBEB]'>
        <div className="flex flex-col md:flex-row max-w-screen-xl mx-auto gap-8 p-8">
          {/* Card com foto de fundo */}
          <Card BackgroundImage="/assets/midias_assets/church_midia.jpg" className="w-[20rem] h-[25rem]" />
          
          {/* Card com informações */}
          <Card BackgroundColor="#FFFFFF" className="w-[20rem] h-[25rem]">
            <div className="flex flex-col justify-between p-8 rounded-2xl">
              <div>
                <ChurchHistory
                  title="Flickr da IMB"
                  description="O Flickr é uma plataforma online de compartilhamento de fotos e vídeos, que permite aos usuários armazenar, organizar, buscar e compartilhar suas imagens e vídeos de alta qualidade. <br /> <br /> Se você ama fotografia e quer conhecer mais a memorial, não deixe de acessar o Flickr e explorar o vasto acervo de imagens contando o cotidiano de nossa igreja."
                  titleSize="text-5xl"
                  titleWeight="font-bold"
                  titleAlign="text-left"
                  titleColor="text-[#0067CB]"
                  descriptionSize="text-base"
                  descriptionWeight="font-light"
                  descriptionAlign="text-justify"
                  descriptionColor="text-[#191919]"
                />
              </div>
              <a 
                href="https://www.flickr.com/photos/142102771@N03/page2" 
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#E2E2EB] text-[#0067CB] font-inter font-thin py-2 px-4 rounded-lg hover:bg-[#d8d8d8] transition duration-300 mt-4 self-start">
                ACESSE O FLICKR
              </a>
            </div>
          </Card>
        </div>
      </div>

      {/* Nova área de cards com balões na borda inferior direita */}
      <div className='bg-[#EBEBEB] py-12'>

        <div className='max-w-screen-xl mx-auto'>
          <h1 className="text-2xl text-justify font-inter font-bold pl-8">Acesse mais conteúdos</h1>
        
          <div className="flex flex-col md:flex-row gap-8 p-8">
            {/* Card 1 */}
            <Card BackgroundImage="/assets/midias_assets/card_midia_1.jpg" className="w-[20rem] h-[25rem]">
              <div className="w-[20rem] flex flex-col absolute -bottom-10 right-0 p-4 bg-[#04B1D9]  rounded-lg shadow-md">
                <h1 className="self-start font-inter font-bold text-black text-left mb-2">Acesse os nossos boletins dominicais</h1>
                <a 
                  href="https://drive.google.com/drive/folders/1JgtacVMeLmMHRhThxDri966GP4lyfA6g?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className=" self-start font-inter font-bold text-black hover:underline">
                  Veja mais {'>'}
                </a>
              </div>
            </Card>
            
            {/* Card 2 */}
            <Card BackgroundImage="/assets/midias_assets/card_midia_2.jpg" className="w-[20rem] h-[25rem]">
            <div className="w-[20rem] flex flex-col absolute -bottom-10 right-0 p-4 bg-[#CDDCE7]  rounded-lg shadow-md">
                <h1 className="self-start font-inter font-bold text-black text-left mb-2">Veja  o calendário de atividades da memorial</h1>
                <a 
                  href="https://drive.google.com/drive/folders/1lJ2d-pE8kfr63thi5hEGZbQpcT44GdGj?usp=sharing "
                  target="_blank"
                  rel="noopener noreferrer" 
                  className=" self-start font-inter font-bold text-black hover:underline">
                Não perca nada {'>'}
                </a>
              </div>
            </Card>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Midias;
