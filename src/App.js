import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './elementit/Header';
import { Footer } from './elementit/Footer';
import { Nav } from './elementit/Nav';
import { Koti } from './Sivut/Koti';
import { CV } from './Sivut/CV';
import { Yhteystiedot } from './Sivut/Yhteystiedot';
import './index.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Nav />
        <Routes>
          <Route path='/' element={<Koti />} />
          <Route path='/Yhteystiedot' element={<Yhteystiedot />} />
          <Route path='/CV' element={<CV />} />
        </Routes>
        {window.location === '/' && <Koti />}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
