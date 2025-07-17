import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import igrejaData from '../data/igreja_Data.json';
import { motion } from 'framer-motion';

const Igreja = () => {
  const [textoAtual, setTextoAtual] = useState(0);
  const [isFading, setIsFading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [pastorSelecionado, setPastorSelecionado] = useState(null); // Estado para o pastor selecionado

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {


    const alternarTexto = () => {
      setIsFading(true);
      setTimeout(() => {
        setTextoAtual((prevTextoAtual) => (prevTextoAtual + 1) % igrejaData.textosLateral.length);
        setIsFading(false);
      }, 500);
    };

    if (!pastorSelecionado) {
     
      
      
      const intervalo = setInterval(() => {
        alternarTexto();
        setProgress((prevProgress) => {
          const newProgress = (prevProgress + (100 / igrejaData.textosLateral.length));
          return newProgress >= 100 ? 100 : newProgress;
        });
      }, 10000);
      
      const ajustarProgresso = () => {
        if (textoAtual === igrejaData.textosLateral.length - 1) {
          setProgress(100);
        } else {
          setProgress((textoAtual + 1) * (100 / igrejaData.textosLateral.length));
        }
      };
      
      ajustarProgresso();
      
      
      
      return () => clearInterval(intervalo);
    }
  }, [textoAtual, pastorSelecionado]);

  const texto = pastorSelecionado ? igrejaData.textosLateral[pastorSelecionado] : igrejaData.textosLateral[textoAtual]; // Use pastorSelecionado se houver

  return (
    <div className="min-h-screen py-14 md:py-16 bg-[#F5F5F5]">

      {/* TEXTOS PASTORES E CONSELHO */ }

      <div className="max-w-screen-xl mx-auto p-4 md:p-8 flex flex-col md:flex-row gap-8">
        <Card BackgroundColor="#FFFFFF">
          <div className="relative h-2 bg-gray-300 mt-4">
            <div
              className="absolute h-full bg-custom-blue transition-all rounded-xl duration-1000"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="p-4 md:p-8 rounded-lg">
            <h1 className={`text-2xl md:text-4xl font-bold font-inter text-left text-custom-blue transition-opacity duration-500 ${!isFading ? 'opacity-100' : 'opacity-0'}`}>
              {texto.name}
            </h1>
            <h3 className={`text-lg md:text-xl font-bold font-montserrat text-left text-black transition-opacity duration-500 ${!isFading ? 'opacity-100' : 'opacity-0'}`}>
              {texto.titulo } {/* Mostra título ou role do pastor */}
            </h3>
            <p className={`text-base md:text-lg font-base font-montserrat text-justify text-[#191919] mt-4 transition-opacity duration-500 ${!isFading ? 'opacity-100' : 'opacity-0'}`}>
              {texto.conteudo} {/* Mostra conteúdo ou descrição do pastor */}
            </p>
          </div>
        </Card>

        <div className="flex flex-col gap-4 md:gap-8 max-w-[700px]">

          {/* CONSELHO PASTORAL */ }

          <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h3 className="text-xl md:text-2xl font-inter font-bold mb-4">Conselho Pastoral</h3>
            <div className="flex flex-wrap justify-center gap-8  mx-auto"> {/* Define uma largura máxima para controlar o número de itens por linha */}
              {igrejaData.conselhoPastoral.map((pastor, index) => (
                <motion.div
                  key={index}
                  className="text-center" // Cada imagem ocupa 1/3 da linha em telas pequenas e médias
                  initial={{ scale: 1 }}
                  animate={{ scale: (pastorSelecionado - 1 === index || textoAtual - 1 === index) ? 1.1 : 1 }}
                  transition={{ duration: 0.5 }}
                  onMouseEnter={() => setPastorSelecionado(index + 1)} 
                  onMouseLeave={() => setPastorSelecionado(null)}
                >
                  <img 
                    src={pastor.image} 
                    alt={pastor.name} 
                    className="w-full h-auto max-w-[100px] md:max-w-[150px] max-h-[150px] md:max-h-[200px] mx-auto mb-2 rounded-md object-cover" 
                  />
                  <p className="font-montserrat font-thin w-36 h-12">{pastor.name}</p>
                </motion.div>
              ))}
            </div>
          </div>

            {/* LIDERES DAS CONGREGAÇÕES */ }

          <div className="bg-white p-4 md:p-8 rounded-lg shadow-md">
            <h3 className="text-xl md:text-2xl font-inter font-bold mb-4">Líderes das Congregações</h3>
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

      {/* CONHEÇA CONGREGAÇÕES */ }

      <h1 className="text-3xl md:text-5xl font-bold text-center mt-8">Conheça as Nossas Congregações</h1>
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

      <div className="text-center py-8 px-4">
        <div className="max-w-screen-lg mx-auto">
          <div className="mb-4">
            <h2 className="text-3xl md:text-4xl font-bold text-custom-blue font-inter">Deseja Conhecer Nossas Congregações?</h2>
          </div>
          <a
            href="https://chat.whatsapp.com/BqjJhcW0fMMFwYYKL57233"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 md:px-8 md:py-2 bg-custom-blue text-white text-lg font-montserrat font-bold rounded-3xl hover:bg-blue-900 transition duration-300 inline-block"
          >
            Converse Conosco
          </a>
        </div>
      </div>
    </div>
  );
};

export default Igreja;
