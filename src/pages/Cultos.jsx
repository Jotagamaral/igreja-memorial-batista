import React from 'react';
import cultosData from '../data/cultos_Data.json';

const Cultos = () => {
  return (
    <div className="bg-custom-white min-h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mx-auto p-4 md:p-6 max-w-screen-xl">
        
        {/* Coluna da Esquerda */}
        <div className="flex-1 p-4 md:p-8">
          <div className="rounded-2xl bg-white shadow-lg p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl text-left text-custom-blue font-arya font-bold mb-4">CULTOS SEMANAIS</h1>
            <div className="text-base md:text-lg font-semibold">
              {cultosData.map((culto, index) => (
                <div key={index} className="mb-4">
                  <h2 className="text-xl text-left text-custom-blue font-arya font-bold">{culto.dia}</h2>
                  {culto.atividades.map((atividade, idx) => (
                    <p key={idx} className="text-left text-sm md:text-base font-poppins">{atividade}</p>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Coluna da Direita */}
        <div className="flex-1 p-4 md:p-8 flex flex-col items-center">
          <div className="w-full h-64 md:h-96 overflow-hidden mb-8">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10858.179226751006!2d-47.91218907843037!3d-15.80679683477674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x935a2558ab5507bd%3A0x432ec3a97de868ed!2sIgreja%20Memorial%20Batista%20de%20Bras%C3%ADlia%20%7C%20IMBB!5e0!3m2!1spt-BR!2sbr!4v1720710737937!5m2!1spt-BR!2sbr"
              width="100%"
              height="100%"
              className="border-2 border-black rounded-lg"
              allowFullScreen=""
              loading="lazy"
              title="Localização da Igreja Memorial Batista"
            ></iframe>
          </div>

          <div className="relative w-full h-32 md:h-40 flex flex-col items-center justify-center text-center">
            <h1 className="font-arya text-custom-blue text-4xl md:text-5xl">Venha</h1>
            <h1 className="font-arya text-custom-blue font-bold text-5xl md:text-7xl">CULTUAR</h1>
            <h1 className="font-arya text-custom-blue text-4xl md:text-5xl">conosco!</h1>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cultos;
