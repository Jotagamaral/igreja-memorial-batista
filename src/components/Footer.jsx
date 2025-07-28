import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-custom-blue text-white text-left p-5 flex justify-between items-start relative">
      <div className="md:pl-10">
        <h1 className="text-2xl font-bold">Contato</h1>
        <p>Telefone: (61) 3244-8806</p>
        <p>WhatsApp: (61) 99105-2219</p>
        <p>E-mail: memorial@imbb.org.br</p>
        <p>Endereço: SGAS 905 Sul, Brasília - DF</p>
        <p>Cep: 70390-050</p>
      </div>
      <div className="absolute bottom-5 right-5 hidden md:block">
        <Link to="/" onClick={scrollToTop}>
          <img src='/assets/logos/Primária_Esquerda_Vazado_Branco.ico' alt="Igreja Memorial Batista" className="h-10" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
