// src/pages/Home.js
import React, { forwardRef } from 'react';
import SocialMedia from '../components/SocialMedia';
import Welcome from './Welcome';
import Jesus from './Jesus';
import Cultos from './Cultos';
import Igreja from './Igreja';

const Home = forwardRef((props, ref) => {
  return (
    <div>
      <div id="home">
        <Welcome />
      </div>

      <div id="jesus" ref={ref[0]}>
        <Jesus />
      </div>

      <div id="igreja" ref={ref[1]}>
        <Igreja />
      </div>

      <div id="cultos" ref={ref[2]}>
        <Cultos />
      </div>

      <div className="col-span-1 md:col-span-2 flex justify-center">
        <SocialMedia />
      </div>
    </div>
  );
});

export default Home;
