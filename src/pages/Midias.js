import React, { useEffect } from 'react';
import { FaBook, FaCalendarAlt } from "react-icons/fa";

const Midias = () => {
  useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col md:flex-row mt-12">
        {/* Primeira área */}
        <div className="flex-1 bg-white p-8">
          <div className="p-4">
            <h1 className="text-5xl text-left font-inter font-bold mb-4">Assista aos cultos ao vivo e outros conteúdos!</h1>
            <div className="flex justify-center">
              <div className="w-full aspect-w-16 aspect-h-9">
                <iframe 
                  className="w-full h-full" 
                  src="https://www.youtube.com/embed/rRlgU5KSx4M?si=1DWJugaE_LONhvMi&amp;start=3254" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen></iframe>
              </div>
            </div>
            <a 
            href="https://www.youtube.com/@imbb" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-custom-blue text-white font-montserrat font-bold my-4 py-2 px-4 rounded-full inline-block text-center hover:bg-blue-900 transition duration-300">Acesse o canal da Memorial</a>
          </div>
        </div>
        
        {/* Segunda área */}
        <div className="flex-1 bg-[#EBEBEB] p-8">
          <div className="p-8 px-12">
            <h1 className="text-2xl text-justify font-inter font-bold mb-4">Veja as transmissões</h1>
            <p className="mb-4 text-justify font-montserrat">
              Acesse nosso canal no YouTube e assista nossos cultos e muitos outros conteúdos como:
            </p>
            <ul className="list-disc list-inside mb-6 text-justify font-montserrat">
              <li>Escola bíblica dominical online</li>
              <li>Cortes das mensagens</li>
              <li>Cortes dos louvores ministrados</li>
              <li>Cultos antigos</li>
            </ul>
            <h1 className="text-2xl text-justify font-inter font-bold mb-4">+Canal do Ministério Crescer</h1>
            <p className='text-justify font-inter'>
              Inscreva-se no canal de nosso Ministério Infantil e acompanhe histórias, louvores e muita diversão para as
              crianças. Junte-se a nós!
            </p>
          </div>
        </div>
      </div>
        
      {/* Terceira área */}
      <div className="flex flex-col md:flex-row mb-8">
        <div className="w-full md:w-3/5 p-4">
          <h1 className="text-xl text-justify font-montserrat font-bold mb-4">
            Confira os momentos especiais de nossa igreja no nosso Flickr! Veja fotos de eventos, cultos e atividades, e
            sinta-se parte da nossa família. Acompanhe cada passo da família memorial.
          </h1>
          <a 
          href="https://www.flickr.com/photos/142102771@N03/albums/" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-custom-blue text-white font-montserrat font-bold py-1 px-4 rounded-full mb-4 inline-block text-center hover:bg-blue-900 transition duration-300">Veja mais fotos</a>
          <div className="flex space-x-4">
            <img src="/assets/Midia-photo_1.jpg" alt="Foto 1" className="w-1/2 aspect-4/5 object-cover" />
            <img src="/assets/Midia-photo_2.jpg" alt="Foto 2" className="w-1/2 aspect-4/5 object-cover" />
          </div>
        </div>
        <div className="w-full md:w-2/5 p-4 px-8">
          <img src="/assets/Midia-photo_3.jpg" alt="Foto de evento" className="w-full h-auto mb-4 object-cover" />
          <h1 className="text-2xl text-justify font-inter font-bold mb-4">ACOMPANHE TODOS OS EVENTOS DA MEMORIAL</h1>
          
          <a href="#boletim" className="flex items-center text-black text-justify font-montserrat font-bold no-underline mb-2 hover:text-custom-blue hover:underline">
            <FaBook size={32} className="mr-2"/>Acesse nosso boletim para avisos e mensagens pastorais
          </a>
          <a href="#calendario" className="flex items-center text-black text-justify font-montserrat font-bold no-underline hover:text-custom-blue hover:underline">
            <FaCalendarAlt size={32} className="mr-2"/>Acesse o calendário mensal de nossa igreja
          </a>
        </div>
      </div>
    </div>
  );
};

export default Midias;
