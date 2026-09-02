import React, { useEffect } from 'react';

// Constante configurável contendo a URL de destino
const LINK_REPOSITORIO = "https://drive.google.com/drive/folders/1akmf4y84Bv9gvOt3r8jAZgKKmM420128?usp=sharing";

const Redirecionador = () => {
  useEffect(() => {
    // Substitui a URL atual no histórico para evitar loops no botão "Voltar" do navegador
    window.location.replace(LINK_REPOSITORIO);
  }, []);

  return (
    <div className="min-h-screen bg-[#EBEBEB] flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full text-center flex flex-col items-center">
        {/* Indicador visual de carregamento */}
        <div className="w-10 h-10 border-4 border-[#0067CB] border-t-transparent rounded-full animate-spin mb-6"></div>

        <h1 className="text-xl font-poppins font-bold text-[#191919] mb-4">
          Você está sendo redirecionado para o repositório de documentos...
        </h1>

        <p className="text-sm font-poppins text-gray-600 mb-6">
          Caso o seu navegador não conclua a ação automaticamente, clique no botão abaixo para prosseguir.
        </p>

        <a
          href={LINK_REPOSITORIO}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#0067CB] text-white font-poppins py-2 px-4 rounded-lg hover:bg-[#0052a3] transition duration-300"
        >
          Clique aqui se não for redirecionado automaticamente
        </a>
      </div>
    </div>
  );
};

export default Redirecionador;