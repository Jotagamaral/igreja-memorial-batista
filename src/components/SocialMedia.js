// src/components/SocialMedia.js
import React, { useState } from 'react';
import { FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';

const SocialMedia = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="bg-white p-5 rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-3 text-center">Redes Sociais</h3>
      <ul className="flex flex-col items-center space-y-4">
        {[
          { name: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/igrejamemorialbatista?igsh=MWozNzYwZzdzYWo1Mg==' },
          { name: 'Facebook', icon: <FaFacebook />, link: 'https://www.facebook.com/MemorialBatista/?locale=pt_BR' },
          { name: 'YouTube', icon: <FaYoutube />, link: 'https://www.youtube.com/@imbb' }
        ].map((social) => (
          <li
            key={social.name}
            className={`transition-transform duration-500 ease-in-out ${hoveredIcon === social.name ? 'transform scale-110' : 'transform scale-100'}`}
            onMouseEnter={() => setHoveredIcon(social.name)}
            onMouseLeave={() => setHoveredIcon(null)}
          >
            <a href={social.link} target="_blank" rel="noopener noreferrer" className="text-3xl">
              {social.icon}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialMedia;
