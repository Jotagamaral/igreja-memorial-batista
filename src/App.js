import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ministerios from './pages/Ministerios';
import Midias from './pages/Midias';

import './styles/customScrollbar.css';

function App() {
  const jesusRef = useRef(null);
  const igrejaRef = useRef(null);
  const cultosRef = useRef(null);
  const contatoRef = useRef(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen text-center custom-scrollbar">
        <Header 
          jesusRef={jesusRef}
          igrejaRef={igrejaRef} 
          cultosRef={cultosRef} 
          contatoRef={contatoRef}
        />

        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={<Home ref={[jesusRef, igrejaRef, cultosRef, contatoRef]} />} 
            />
            <Route path="/ministerios" element={<Ministerios />} /> 
            <Route path="/midias" element={<Midias />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
