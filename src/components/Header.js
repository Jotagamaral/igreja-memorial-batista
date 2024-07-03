// src/components/Header.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="bg-blue-700 text-white p-5">
      <div className="flex justify-between items-center md:grid md:grid-cols-3">
        <div className="text-left">
          <h1 className="text-2xl">Igreja Memorial Batista</h1>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className={`md:col-span-1 ${isOpen ? 'block' : 'hidden'} md:flex md:justify-self-center justify-center`}>
          <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-10">
            <li><Link to="/" className="text-white no-underline hover:underline">Home</Link></li>
            <li><Link to="/about" className="text-white no-underline hover:underline">Sobre</Link></li>
            <li><Link to="/events" className="text-white no-underline hover:underline">Eventos</Link></li>
            <li><Link to="/contact" className="text-white no-underline hover:underline">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;



