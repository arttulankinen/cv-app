import React, { useState } from 'react'
import reactlogo from '../images/reactlogo.png';
import '../index.css';
import arrow from '../images/arrow.png'

function Koti() {
   const [isClicked, setIsClicked] = useState(false);

   const handleClick = () => {
    setIsClicked(true);
   };
   const handleReverseClick=() =>{
        setIsClicked(false);
   }
 
 


    return (
        <div id='koti'>
            
            <div id="ekaosio">
                    <p id="teksti1" className={isClicked ? 'slide': ''} onClick={handleClick}>
                    Hei!<br />
                    Nimeni on Arttu Lankinen ja olen 21-vuotias tietotekniikka
                    insinööri opiskelija Kuopiosta. Harrastuksiini 
                    kuuluu salilla käyminen, tietokoneet ja koodaus.<br/>
                   <span>CLICK ME</span>
                   </p>
                    <p id='teksti2' className={isClicked ? 'slide2': ''} onClick={handleClick} style={{opacity:0}}>
                        Oikealla yläkulmassa voit navigoida yhteydenotto sivulle tai minun CV:seen!<br/>
                        Alhaalla on kerrottu lisää sivusta </p>
                        <img id='reverse' src={arrow} alt='reverse' onClick={handleReverseClick}  className={` ${isClicked ? 'fadeInArrow' : ''} ${isClicked ? 'slide3' : ''}`} />
            </div>
            <div class="curve">
            <div class="curves">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
               <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                 </svg>
            </div>
            </div>
            <div id='tokaosio'>
            <img id='reactlogo' src={reactlogo} alt='logo'/>
                    <p id='teksti3'>Tämä sivu on toteutettu käyttäen Reactia, 
                        Sivun tarkoituksena on antaa ymmärrys koodaus taidoistani 
                        ja kertoa Työnantajille itestäni.</p>
                        
            </div>
            
        </div>
    );
}

export { Koti }