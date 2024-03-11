import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <div id='NavId'>
      <ul>
        <li>
          <Link to="/">Koti</Link>
        </li>
        <li>
          <Link to="/Yhteystiedot">Ota yhteyttä</Link>
        </li>
        <li>
          <Link to="/CV">CV</Link>
        </li>
      </ul>
    </div>
  );
}

export { Nav };
