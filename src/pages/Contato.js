import React from 'react';
import { FaPhone, FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contato = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      <div
        className="flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/Contact-photo.jpg)', minHeight: '75vh' }}
      >
        <h1 className="text-white text-7xl font-inter font-bold">Contato</h1>
      </div>
      <div className="flex flex-col justify-around p-8 bg-custom-white space-y-0">
        <div className="flex items-center">
          <FaPhone className="text-2xl text-custom-blue mr-2" />
          <span className="text-xl font-montserrat font-bold">Telefone: (61) 3244-8806</span>
        </div>
        <div className="flex items-center">
          <FaWhatsapp className="text-3xl text-custom-blue mr-2" />
          <span className="text-xl font-montserrat font-bold">WhatsApp: (61) 99105-2219</span>
        </div>
        <div className="flex items-center">
          <FaEnvelope className="text-3xl text-custom-blue mr-2" />
          <span className="text-xl font-montserrat font-bold">E-mail: memorial@imbb.org.br</span>
        </div>
        <div className="flex items-center">
          <FaMapMarkerAlt className="text-3xl text-custom-blue mr-2" />
          <span className="text-xl font-montserrat font-bold">Endereço: SGAS 905 Sul, Brasília - DF Cep: 70390-050</span>
        </div>
        <div className="flex flex-col items-center">
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
