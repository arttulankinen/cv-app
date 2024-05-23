import React from 'react'
import home from '../images/home.png';

function Projects() {
  return (
    <div id="Projectspage">
    <div id='ProjectCard1'>
      <a href='https://arttulankinen.github.io/cv-app/' id='ProjectCard1' target="_blank" rel="noopener noreferrer">
        <div id='left-content'>
          <p>Ristinolla peli, tehty reactilla!</p>
        </div>
        <div id='right-content'>
        <img src={home} alt="Home" className='logot'/>
        </div>
      </a>
    </div>
</div>
  )
}

export {Projects}