import React from 'react';
import ChurchHistory from '../components/ChurchHistory';
//import ChurchPhotos from '../components/ChurchPhotos';
import ParallaxSection from '../components/ParallaxSection';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className='pt-20'>
      <ParallaxSection 
      backgroundVideo={"/assets/Site_video.mp4" }
      color={'bg-black'}
      
      >
        <div className="flex flex-col items-start p-10 space-y-4 text-white">
        <ChurchHistory 
            title="Bem-vindo à Igreja <br /> Memorial Batista"
            description="Uma igreja viva para O Deus vivo!"
            titleSize="text-6xl"
            titleWeight="font-bold"
            titleAlign="text-left"
            titleColor='text-white'
            descriptionAlign="text-left"
            descriptionSize="text-lg"
            descriptionWeight="font-bold"
            descriptionColor='text-white'
          />
          <Link to="/contact">
            <button className="font-montserrat font-bold bg-custom-blue text-white py-2 px-4 rounded-md hover:bg-blue-950 transition">
              VENHA NOS CONHECER
            </button>
          </Link>
        </div>
      </ParallaxSection>
    </div>
  );
};

export default Welcome;
