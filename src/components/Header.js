import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Header = ({ jesusRef, igrejaRef, cultosRef, contatoRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
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
      const sections = [
        { id: 'home', ref: null },
        { id: 'jesus', ref: jesusRef },
        { id: 'igreja', ref: igrejaRef },
        { id: 'cultos', ref: cultosRef },
        { id: 'contato', ref: contatoRef },
      ];
  
      let currentSection = 'home';
      for (let i = 0; i < sections.length; i++) {
        const section = sections[i];
        if (section.ref && section.ref.current) {
          const rect = section.ref.current.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            currentSection = section.id;
            break;
          }
        }
      }
      setActiveSection(currentSection);
    };
  
    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll(); // Run once on mount to set the initial active section
    } else {
      setActiveSection(location.pathname === '/ministerios' ? 'ministerios' : 'home');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, jesusRef, igrejaRef, cultosRef, contatoRef]);

  const getLinkClass = (section) => {
    return activeSection === section
      ? 'text-white font-bold border-b-2 border-white no-underline hover:underline'
      : 'text-white no-underline hover:underline';
  };
  

  return (
    <header className="bg-custom-blue text-white p-5 fixed top-0 w-full z-50">
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
            <li><Link to="/" onClick={scrollToTop} className={getLinkClass('home')}>Home</Link></li>
            <li><a href="#jesus" onClick={(e) => handleScrollToSection(e, jesusRef)} className={getLinkClass('jesus')}>Jesus</a></li>
            <li><a href="#igreja" onClick={(e) => handleScrollToSection(e, igrejaRef)} className={`${getLinkClass('igreja')} whitespace-nowrap`}>A Igreja</a></li> 
            <li><a href="#cultos" onClick={(e) => handleScrollToSection(e, cultosRef)} className={getLinkClass('cultos')}>Cultos</a></li>
            <li><a href="#contato" onClick={(e) => handleScrollToSection(e, contatoRef)} className={getLinkClass('contato')}>Contato</a></li>
            <li><Link to="/ministerios" className={getLinkClass('ministerios')}>Ministérios</Link></li>
            <li><a href="#midias" onClick={(e) => handleScrollToSection(e, cultosRef)} className={getLinkClass('midias')}>Mídias</a></li>
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
  );
};

export default Header;