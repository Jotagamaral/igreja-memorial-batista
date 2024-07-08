import React from 'react';
import SocialMedia from '../components/SocialMedia';
import Welcome from './Welcome'
import Jesus from './Jesus';

const Home = () => {
  return (
    <div>
      <div id="contact" className='p-5'>
        <Welcome/>
      </div>

      <div id="contact" className="w-full">
        <Jesus/>
      </div>

      <div className="col-span-1 md:col-span-2 flex justify-center">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Home;
