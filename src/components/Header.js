import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
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
      <header className="bg-blue-700 text-white p-5">
        <div className="flex justify-between items-center md:grid md:grid-cols-3">
          <div className="h-10 md:ml-5 text-left">
            <Link to="/" onClick={scrollToTop}>
              <img src='/Igreja-memo-Logo.ico' alt="Igreja Memorial Batista" className="h-full" />
            </Link>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          <nav className={`md:col-span-1 ${isOpen ? 'block' : 'hidden'} md:flex md:justify-self-center justify-center`}>
            <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-10">
              <li><Link to="/" onClick={scrollToTop} className="text-white no-underline hover:underline">Home</Link></li>
              <li><a href="#jesus" className="text-white no-underline hover:underline">Jesus</a></li>
              <li><a href="#events" className="text-white no-underline hover:underline">Eventos</a></li>
              <li><a href="#contact" className="text-white no-underline hover:underline">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <div className={`fixed top-0 w-full z-50 transition-transform duration-500 ease-in-out ${showFixedHeader ? 'opacity-100 transform translate-y-0' : 'transform -translate-y-full'}`}>
        <header className="bg-blue-700 bg-opacity-90 text-white p-5">
          <div className="flex justify-between items-center md:grid md:grid-cols-3">
            <div className="h-10 md:ml-5 text-left">
              <Link to="/" onClick={scrollToTop}>
                <img src='/Igreja-memo-Logo.ico' alt="Igreja Memorial Batista" className="h-full" />
              </Link>
            </div>
            <div className="md:hidden">
              <button onClick={toggleMenu}>
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
            <nav className={`md:col-span-1 ${isOpen ? 'block' : 'hidden'} md:flex md:justify-self-center justify-center`}>
              <ul className="flex flex-col md:flex-row justify-center space-y-2 md:space-y-0 md:space-x-10">
                <li><Link to="/" onClick={scrollToTop} className="text-white no-underline hover:underline">Home</Link></li>
                <li><a href="#jesus" className="text-white no-underline hover:underline">Jesus</a></li>
                <li><a href="#events" className="text-white no-underline hover:underline">Eventos</a></li>
                <li><a href="#contact" className="text-white no-underline hover:underline">Contato</a></li>
              </ul>
            </nav>
          </div>
        </header>
      </div>
    </>
  );
};

export default Header;
