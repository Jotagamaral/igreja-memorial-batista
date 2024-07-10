import React from 'react';
import SocialMedia from '../components/SocialMedia';
import Welcome from './Welcome'
import Jesus from './Jesus';

const Home = () => {
  return (
    <div>
      <div id="contact" >
        <Welcome/>
      </div>

      <div id="contact">
        <Jesus/>
      </div>

      <div className="col-span-1 md:col-span-2 flex justify-center">
        <SocialMedia />
      </div>
    </div>
  );
};

export default Home;
