import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div id='NavId'>
     
          <Link to="/"><button className='navbuttons'>Koti</button></Link>
       
          <Link to="/Yhteystiedot"><button className='navbuttons'>Ota yhteyttä</button></Link>
       
          <Link to="/CV"><button className='navbuttons'>CV</button></Link>

    </div>
  );
}

export { Nav };
