import React from 'react';

const Jesus = () => {
  return (
    <div className="relative">
      <div className="bg-fixed bg-center bg-cover h-screen" style={{ backgroundImage: "url('/assets/jesus-background.jpg')" }}>
        <div className="bg-opacity-75 bg-blue-700 h-full flex items-center">
          <div className="container mx-auto p-10 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 bg-blue-900 bg-opacity-75 rounded-md shadow-lg">
                <h2 className="text-4xl font-semibold mb-4">Quem é Jesus</h2>
                <p className="text-lg">
                  Jesus Cristo é a figura central do Cristianismo, visto pelos cristãos como o Filho de Deus e Salvador da humanidade. Ele é acreditado como sendo o Messias profetizado no Antigo Testamento.
                </p>
              </div>
              <div className="p-5 bg-blue-900 bg-opacity-75 rounded-md shadow-lg">
                <h2 className="text-4xl font-semibold mb-4">Sua Importância</h2>
                <p className="text-lg">
                  Jesus é conhecido por seus ensinamentos de amor, perdão e redenção. Sua vida, morte e ressurreição são consideradas pelos cristãos como a base para a salvação e vida eterna.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jesus;
