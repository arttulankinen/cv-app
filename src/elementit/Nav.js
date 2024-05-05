import React from 'react';
import { Link } from 'react-router-dom';
import home from '../images/home.png';
import contact from '../images/contact.png'
import cv from '../images/cv.png';


  function Nav() {
    return (
      <div id='NavId'>
        <h1 id='otsikko'><span>MY</span>Resume</h1>
     
        <Link to="/"><img src={home} alt="Home" className='logot'/></Link>

        <Link to="/Yhteystiedot"><img src={contact} alt='Contact' className='logot'/></Link>

        <Link to="/CV"><img src={cv} alt='Cv' className='logot'/></Link>

      </div>
    );
  }

export { Nav };
