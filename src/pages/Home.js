import React from 'react';
import Welcome from './Welcome';
import Jesus from './Jesus';
import Cultos from './Cultos';
import Memorial from './Memorial';


const Home = ({ refs }) => {
  const { jesusRef, memorialRef, cultosRef } = refs;

  return (
    <div>
      <div id="home">
        <Welcome cultosRef={cultosRef} />
      </div>
      <div id="jesus" ref={jesusRef}>
        <Jesus />
      </div>
      <div id="igreja" ref={memorialRef}>
        <Memorial />
      </div>
      <div id="cultos" ref={cultosRef}>
        <Cultos />
      </div>
    </div>
  );
};

export default Home;
