import React from 'react';
import Welcome from './Welcome';
import Jesus from './Jesus';
import Cultos from './Cultos';
import Memorial from './Memorial';
import PgmWidget from '../components/PgmWidget';
// import Popup from '../components/Popup';

const Home = ({ refs }) => {
  const { jesusRef, memorialRef, cultosRef } = refs;

  return (
    <div>
      <PgmWidget />
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
