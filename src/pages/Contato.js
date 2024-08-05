import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contato = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: 'url(/assets/contato_assets/contato.jpg)' }}
    >
      <h1 className="text-7xl font-inter font-bold mb-8">Contato</h1>
      <div className="bg-black bg-opacity-50 p-8 rounded-lg space-y-6 text-center w-11/12 md:w-2/3 lg:w-1/2">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex items-center">
            <FaPhone className="text-2xl mr-2 transform scale-x-[-1]" />
            <span className="text-xl font-montserrat font-bold">Telefone: (61) 3244-8806</span>
          </div>
          <div className="flex items-center">
            <FaWhatsapp className="text-3xl mr-2" />
            <span className="text-xl font-montserrat font-bold">WhatsApp: (61) 99105-2219</span>
          </div>
          <div className="flex items-center">
            <FaEnvelope className="text-3xl mr-2" />
            <span className="text-xl font-montserrat font-bold">E-mail: memorial@imbb.org.br</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-3xl mr-2" />
            <span className="text-xl font-montserrat font-bold">Endereço: SGAS 905 Sul, Brasília - DF Cep: 70390-050</span>
          </div>
        </div>
        <div className="flex flex-col items-center text-center">
          <span className="text-xl font-montserrat font-bold">
            Para acompanhar mais da nossa igreja faça parte da nossa comunidade no WhatsApp:
          </span>
          <a
            href="https://chat.whatsapp.com/BqjJhcW0fMMFwYYKL57233"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-4 py-2 bg-custom-blue text-white text-lg font-montserrat font-bold rounded-3xl hover:bg-blue-900 transition duration-300"
          >
            Acesse nossa comunidade
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contato;
