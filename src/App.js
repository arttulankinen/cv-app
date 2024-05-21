import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './elementit/Footer';
import { Nav } from './elementit/Nav';
import { Koti } from './Sivut/Koti';
import { CV } from './Sivut/CV';
import { Yhteystiedot } from './Sivut/Yhteystiedot';
import { NotFound} from './Sivut/NotFound'
import {Register} from './Sivut/Register'
import {LogIn} from './Sivut/LogIn'
import './index.css';




function App() {
  return (
    <Router basename='/cv-app'> 
        <Nav/>
        <Routes>
          <Route path='/' element={<Koti />} />
          <Route path='/Yhteystiedot' element={<Yhteystiedot />} />
          <Route path='/CV' element={<CV />} />
          <Route path='/*' element={<NotFound />} />
          <Route path='/Register' element={<Register/>} />
          <Route path='/LogIn' element={<LogIn/>} />
        </Routes>
        <Footer />
    </Router>
  );
}

export default App;