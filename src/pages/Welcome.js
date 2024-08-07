import React from 'react';
import ChurchHistory from '../components/ChurchHistory';
import ParallaxSection from '../components/ParallaxSection';
import { useInView } from 'react-intersection-observer';
import { useNavigate, useLocation } from 'react-router-dom';

const Welcome = ({ cultosRef }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0,
  });

  const navigate = useNavigate();
  const location = useLocation();

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

  const handleScrollToCultos = (e) => {
    e.preventDefault();
    if (location.pathname !== "/") {
      navigate("/", { replace: true });
      setTimeout(() => scrollToSection(cultosRef), 1000); // Ajuste o tempo se necessário
    } else {
      scrollToSection(cultosRef);
    }
  };

  return (
    <div className=''>
      <ParallaxSection 
        backgroundImage=""
        backgroundVideo="/assets/welcome_assets/Site_video.mp4"
        color="bg-black"
      >
        <div
          className={`flex flex-col items-center p-10 space-y-4 text-white transition-opacity duration-1000 ${inView ? 'opacity-100' : 'opacity-0'}`}
          ref={ref}
        >
          <ChurchHistory 
            title="Bem-vindo à Igreja <br /> Memorial Batista"
            description="Uma igreja viva para O Deus vivo!"
            titleSize="text-6xl"
            titleWeight="font-bold"
            titleAlign="text-center"
            titleColor='text-white text-opacity-50'
            descriptionAlign="text-center"
            descriptionSize="text-lg"
            descriptionWeight="font-bold"
            descriptionColor='text-white'
          />
          <button 
            onClick={handleScrollToCultos}
            className="font-montserrat font-bold bg-custom-blue bg-opacity-70 text-white py-2 px-4 rounded-md hover:bg-blue-950 transition"
          >
            VENHA NOS CONHECER
          </button>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Welcome;