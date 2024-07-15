// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Header = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <footer className="bg-custom-blue text-white p-5 flex justify-between items-center">
        <div className="flex items-center mx-auto pl-20"> {/* Ajustando a margem esquerda (pl-4) para centralizar */}
          <Link to="/" onClick={scrollToTop}>
            <img src='/Igreja-memo-Logo-navbar.ico' alt="Igreja Memorial Batista" className="h-10 scale-150" />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4">
          <a href="https://www.youtube.com/@imbb" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaYoutube size={24} />
          </a>
          <a href="https://www.instagram.com/igrejamemorialbatista?igsh=MWozNzYwZzdzYWo1Mg==" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaInstagram size={24} />
          </a>
          <a href="https://chat.whatsapp.com/BqjJhcW0fMMFwYYKL57233" target="_blank" rel="noopener noreferrer" className="text-white">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </footer>
    </>
  );
};

export default Header;
