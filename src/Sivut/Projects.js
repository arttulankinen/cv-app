import React from 'react'
import ristinolla from '../images/ristinolla.PNG';

function Projects() {
  return (
    <div id="Projectspage">
      <h1 id='header'>PROJECTS</h1>
    <div id='ProjectCard1'>
      <a href='https://arttulankinen.github.io/ristinolla/'  target="_blank" rel="noopener noreferrer">
        <div id='left-content'>
          <p>Ristinolla peli, tehty reactilla!</p>
        </div>
        <div id='right-content'>
        <img id='right-kuva' src={ristinolla} alt="ristnolla"/>
        </div>
      </a>
    </div>
</div>
  )
}

export {Projects}