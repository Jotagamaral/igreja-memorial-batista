// src/components/Header.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Header = ({ jesusRef, igrejaRef ,cultosRef, contatoRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFixedHeader, setShowFixedHeader] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (sectionRef) => {
    if (sectionRef && sectionRef.current) {
      const yOffset = -70;
      const y = sectionRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth',
      });
    }
  };
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowFixedHeader(true);
      } else {
        setShowFixedHeader(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <header className="bg-custom-blue text-white p-5">
        <div className="grid grid-cols-3 items-center">
          <div className="h-10 md:ml-1 text-left">
            <Link to="/" onClick={scrollToTop}>
              <img src='/Igreja-memo-Logo-navbar.ico' alt="Igreja Memorial Batista" className="h-full scale-150 pl-4" />
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <nav className={`col-span-1 ${isOpen ? 'block' : 'hidden'} md:flex md:justify-center`}>
            <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8 font-inter">
              <li><Link to="/" onClick={scrollToTop} className="text-white no-underline hover:underline">Home</Link></li>
              <li><a href="#jesus" onClick={(e) => { e.preventDefault(); scrollToSection(jesusRef); }} className="text-white no-underline hover:underline">Jesus</a></li>
                 <li><a href="#jesus" onClick={(e) => { e.preventDefault(); scrollToSection(igrejaRef); }} className="text-white no-underline hover:underline whitespace-nowrap">A Igreja</a></li> 
              <li><a href="#jesus" onClick={(e) => { e.preventDefault(); scrollToSection(cultosRef); }} className="text-white no-underline hover:underline">Cultos</a></li>
              <li><a href="#jesus" onClick={(e) => { e.preventDefault(); scrollToSection(contatoRef); }} className="text-white no-underline hover:underline">Contato</a></li>
              <li><a href="#jesus" onClick={(e) => { e.preventDefault(); scrollToSection(cultosRef); }} className="text-white no-underline hover:underline">Ministérios</a></li>
              <li><a href="#jesus" onClick={(e) => { e.preventDefault(); scrollToSection(cultosRef); }} className="text-white no-underline hover:underline">Mídias</a></li>
            </ul>
          </nav>
          <div className="hidden md:flex space-x-4 justify-end">
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
        </div>
      </header>

      <div className={`fixed top-0 w-full z-50 transition-transform duration-500 ease-in-out ${showFixedHeader ? 'opacity-100 transform translate-y-0' : 'transform -translate-y-full'}`}>
        <header className="bg-custom-blue text-white p-5">
          <div className="grid grid-cols-3 items-center">
            <div className="h-10 md:ml-1 text-left">
              <Link to="/" onClick={scrollToTop}>
                <img src='/Igreja-memo-Logo-navbar.ico' alt="Igreja Memorial Batista" className="h-full scale-150 pl-4" />
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
            <nav className={`col-span-1 ${isOpen ? 'block' : 'hidden'} md:flex md:justify-center`}>
            <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-8 font-inter">
              <li><Link to="/" onClick={scrollToTop} className="text-white no-underline hover:underline">Home</Link></li>
              <li><a href="#jesus" onClick={(e) => { e.preventDefault(); scrollToSection(jesusRef); }} className="text-white no-underline hover:underline">Jesus</a></li>
              <li><a href="#jesus" onClick={(e) => { e.preventDefault(); scrollToSection(igrejaRef); }} className="text-white no-underline hover:underline whitespace-nowrap">A Igreja</a></li>    
              <li><a href="#jesus" onClick={(e) => { e.preventDefault(); scrollToSection(cultosRef); }} className="text-white no-underline hover:underline">Cultos</a></li>
              <li><a href="#jesus" onClick={(e) => { e.preventDefault(); scrollToSection(contatoRef); }} className="text-white no-underline hover:underline">Contato</a></li>
              <li><a href="#jesus" onClick={(e) => { e.preventDefault(); scrollToSection(cultosRef); }} className="text-white no-underline hover:underline">Ministérios</a></li>
              <li><a href="#jesus" onClick={(e) => { e.preventDefault(); scrollToSection(cultosRef); }} className="text-white no-underline hover:underline">Mídias</a></li>
            </ul>
            </nav>
            <div className="hidden md:flex space-x-4 justify-end">
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
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
