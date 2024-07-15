import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Header = ({ jesusRef, igrejaRef, cultosRef, contatoRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFixedHeader, setShowFixedHeader] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

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

  const handleScrollToSection = (e, sectionRef) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => scrollToSection(sectionRef), 1000); // Ajuste o tempo se necessário
    } else {
      scrollToSection(sectionRef);
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
              <li><Link to="/" onClick={scrollToTop} className={`text-white no-underline hover:underline ${location.pathname === '/' ? 'font-bold' : ''}`}>Home</Link></li>
              <li><Link to="/" onClick={(e) => handleScrollToSection(e, jesusRef)} className={`text-white no-underline hover:underline ${location.pathname === '/' ? 'font-bold' : ''}`}>Jesus</Link></li>
              <li><a href="#igreja" onClick={(e) => handleScrollToSection(e, igrejaRef)} className={`text-white no-underline hover:underline ${location.pathname === '/' ? 'font-bold' : ''} whitespace-nowrap`}>A Igreja</a></li>
              <li><a href="#cultos" onClick={(e) => handleScrollToSection(e, cultosRef)} className={`text-white no-underline hover:underline ${location.pathname === '/' ? 'font-bold' : ''}`}>Cultos</a></li>
              <li><a href="#contato" onClick={(e) => handleScrollToSection(e, contatoRef)} className={`text-white no-underline hover:underline ${location.pathname === '/' ? 'font-bold' : ''}`}>Contato</a></li>
              <li><Link to="/ministerios" className={`text-white no-underline hover:underline ${location.pathname === '/ministerios' ? 'font-bold' : ''}`}>Ministérios</Link></li>
              <li><a href="#midias" onClick={(e) => handleScrollToSection(e, cultosRef)} className={`text-white no-underline hover:underline ${location.hash === '#midias' ? 'font-bold' : ''}`}>Mídias</a></li>
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
                <li><Link to="/" onClick={scrollToTop} className={`text-white no-underline hover:underline ${location.pathname === '/' ? 'font-bold' : ''}`}>Home</Link></li>
                <li><Link to="#jesus" onClick={(e) => handleScrollToSection(e, jesusRef)} className={`text-white no-underline hover:underline ${location.pathname === '/' ? 'font-bold' : ''}`}>Jesus</Link></li>
                <li><Link to="#igreja" onClick={(e) => handleScrollToSection(e, igrejaRef)} className={`text-white no-underline hover:underline ${location.pathname === '/' ? 'font-bold' : ''} whitespace-nowrap`}>A Igreja</Link></li>
                <li><Link to="#cultos" onClick={(e) => handleScrollToSection(e, cultosRef)} className={`text-white no-underline hover:underline ${location.pathname === '/' ? 'font-bold' : ''}`}>Cultos</Link></li>
                <li><Link to="#contato" onClick={(e) => handleScrollToSection(e, contatoRef)} className={`text-white no-underline hover:underline ${location.pathname === '/' ? 'font-bold' : ''}`}>Contato</Link></li>
                <li><Link to="/ministerios" className={`text-white no-underline hover:underline ${location.pathname === '/ministerios' ? 'font-bold' : ''}`}>Ministérios</Link></li>
                <li><Link to="#midias" onClick={(e) => handleScrollToSection(e, cultosRef)} className={`text-white no-underline hover:underline ${location.hash === '#midias' ? 'font-bold' : ''}`}>Mídias</Link></li>
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
