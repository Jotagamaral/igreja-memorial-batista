// src/pages/Home.js
import React, { forwardRef } from 'react';
import Welcome from './Welcome';
import Jesus from './Jesus';
import Cultos from './Cultos';
import Igreja from './Igreja';
import Contato from './Contato'

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

      <div id="contato" ref={ref[3]}>
        <Contato />
      </div>
    </div>
  );
});

export default Home;
