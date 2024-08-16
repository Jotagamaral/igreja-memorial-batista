import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaYoutube, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Header = ({ jesusRef, memorialRef, cultosRef }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isTransparent, setIsTransparent] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
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
    closeMenu();
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => scrollToSection(sectionRef), 1000);
    } else {
      scrollToSection(sectionRef);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', ref: null },
        { id: 'jesus', ref: jesusRef },
        { id: 'memorial', ref: memorialRef },
        { id: 'cultos', ref: cultosRef }
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

      if (window.scrollY > 80) {
        setIsTransparent(false);
      } else {
        setIsTransparent(true);
      }
    };

    if (location.pathname === '/') {
      window.addEventListener('scroll', handleScroll);
      handleScroll();
    } else {
      const path = location.pathname.replace('/', '');
      setActiveSection(path || 'home');
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname, jesusRef, memorialRef, cultosRef]);

  const getLinkClass = (section) => {
    return activeSection === section
      ? 'text-white font-bold border-b-2 border-white rounded-sm no-underline'
      : 'text-white no-underline hover:text-custom-gold';
  };

  return (
    <header className={`fixed top-0 w-full z-50 transition-colors duration-500 ${isTransparent && activeSection === 'home' ? 'bg-transparent' : 'bg-custom-blue'} text-white p-3 md:p-5`}>
      <div className="flex justify-between items-center">
        <div className="h-10 md:h-12 text-left w-full max-w-xs">
          <Link to="/" onClick={scrollToTop}>
            <img src='/Igreja-memo-Logo-navbar.ico' alt="Logo Igreja Memorial Batista" className="h-full object-contain pl-2 md:pl-4" />
          </Link>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label={isOpen ? "Fechar menu" : "Abrir menu"}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
        <nav className={`fixed top-16 left-0 w-full border-t border-gray-200 bg-custom-blue md:bg-transparent md:static md:border-0 ${isOpen ? 'block' : 'hidden'} md:flex md:justify-center`}>
          <ul className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6 font-inter p-4 md:p-0">
            <li><Link to="/" onClick={scrollToTop} className={getLinkClass('home')}>Home</Link></li>
            <li><a href="#jesus" onClick={(e) => handleScrollToSection(e, jesusRef)} className={getLinkClass('jesus')}>Jesus</a></li>
            <li><a href="#igreja" onClick={(e) => handleScrollToSection(e, memorialRef)} className={`${getLinkClass('memorial')} whitespace-nowrap`}>Memorial</a></li>
            <li><a href="#cultos" onClick={(e) => handleScrollToSection(e, cultosRef)} className={getLinkClass('cultos')}>Cultos</a></li>
            <li><Link to="/igreja" onClick={closeMenu} className={getLinkClass('igreja')}>A Igreja</Link></li>
            <li><Link to="/ministerios" onClick={closeMenu} className={getLinkClass('ministerios')}>Ministérios</Link></li>
            <li><Link to="/midias" onClick={closeMenu} className={getLinkClass('midias')}>Mídias</Link></li>
          </ul>
        </nav>
        <div className="hidden md:flex space-x-4 justify-end">
          <a href="https://www.youtube.com/@imbb" target="_blank" rel="noopener noreferrer" aria-label="Visite nosso canal no YouTube" className="text-white">
            <FaYoutube size={24} />
          </a>
          <a href="https://www.instagram.com/igrejamemorialbatista?igsh=MWozNzYwZzdzYWo1Mg==" target="_blank" rel="noopener noreferrer" aria-label="Visite nosso perfil no Instagram" className="text-white">
            <FaInstagram size={24} />
          </a>
          <a href="https://chat.whatsapp.com/BqjJhcW0fMMFwYYKL57233" target="_blank" rel="noopener noreferrer" aria-label="Entre em contato pelo WhatsApp" className="text-white">
            <FaWhatsapp size={24} />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
