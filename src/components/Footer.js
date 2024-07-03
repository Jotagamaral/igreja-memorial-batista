// src/components/Footer.js
import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-blue-700 text-white p-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Informações de Contato */}
        <div>
          <h2 className="text-xl font-bold mb-4">Contato</h2>
          <p><FaPhone className="inline mr-2" /> (61) 3244-8806</p>
          <p><FaEnvelope className="inline mr-2" /> comunicacao@imbb.org.br</p>
        </div>
        {/* Localização */}
        <div>
          <h2 className="text-xl font-bold mb-4">Localização</h2>
          <p><FaMapMarkerAlt className="inline mr-2" /> SGAS | Via W5 Sul | Quadra 905 |
Conjunto E | CEP: 70.390-050 | Brasília - DF</p>
        </div>
        {/* Links Úteis */}
        <div>
          <h2 className="text-xl font-bold mb-4">Links Úteis</h2>
          <ul>
            <li><a href="/" className="text-white no-underline hover:underline">Sobre Nós</a></li>
            <li><a href="/" className="text-white no-underline hover:underline">Eventos</a></li>
            <li><a href="/" className="text-white no-underline hover:underline">Contato</a></li>
            <li><a href="/" className="text-white no-underline hover:underline">Doações</a></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 text-center">
        <p>&copy; 2024 Igreja Memorial Batista. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
