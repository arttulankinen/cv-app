import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import home from '../images/home.png';
import contact from '../images/contact.png';
import cv from '../images/cv.png';

function Nav() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  // Fetch user login status from localStorage on component mount
  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);
    
  useEffect(() => {
    const handleLoginStateChange = () => {
      const token = localStorage.getItem('token');
      setIsLoggedIn(!!token);
    };

    window.addEventListener('loginStateChange', handleLoginStateChange);

    return () => {
      window.removeEventListener('loginStateChange', handleLoginStateChange);
    };
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    navigate('/');
  };


  return (
    <div id='NavId'>
      <h1 id='otsikko'><span>MY</span>Resume</h1>
      {isLoggedIn ? (
        <>
          <Link onClick={handleLogout} className='log'>LOG OUT</Link>
        </>
      ) : (
        <>
          <Link to="/LogIn" className='log'>LOG IN</Link>
          <Link to="/Register" className='log'>REGISTER</Link>
        </>
      )}
      <Link to="/"><img src={home} alt="Home" className='logot'/></Link>
      <Link to="/Yhteystiedot"><img src={contact} alt='Contact' className='logot'/></Link>
      <Link to="/CV"><img src={cv} alt='Cv' className='logot'/></Link>
    </div>
  );
}

export { Nav };