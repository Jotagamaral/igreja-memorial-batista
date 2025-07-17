import React, { useRef } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Ministerios from './pages/Ministerios';
import Midias from './pages/Midias';
import Igreja from './pages/Igreja';


function App() {
  const jesusRef = useRef(null);
  const memorialRef = useRef(null);
  const cultosRef = useRef(null);

  return (
    <Router>
      <div className="flex flex-col min-h-screen text-center custom-scrollbar">
        <Header 
          jesusRef={jesusRef}
          memorialRef={memorialRef} 
          cultosRef={cultosRef} 
        />
        <main className="flex-1">
          <Routes>
            <Route 
              path="/" 
              element={<Home refs={{ jesusRef, memorialRef, cultosRef }} />} 
            />
            <Route path="/ministerios" element={<Ministerios />} /> 
            <Route path="/midias" element={<Midias />} />
            <Route path="/igreja" element={<Igreja />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
