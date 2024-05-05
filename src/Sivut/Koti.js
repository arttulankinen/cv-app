import React from 'react'
import reactlogo from '../images/reactlogo.png';

function Koti() {


    return (
        <div>
            <div id="ekaosio">
                    <p id="teksti1">Hei!<br />
                    Nimeni on Arttu Lankinen ja olen 21-vuotias tietotekniikka
                    insinööri opiskelija Kuopiosta. Harrastuksiini 
                    kuuluu salilla käyminen, tietokoneet ja koodaus.</p>
            </div>
            <div id='tokaosio'>
            <img id='reactlogo' src={reactlogo} alt='logo'/>
                    <p>Tämä sivu on toteutettu käyttäen Reactia, 
                        Sivun tarkoituksena on antaa ymmärrys koodaus taidoistani 
                        ja kertoa Työnantajille itestäni.</p>
                        
            </div>
            
        </div>
    );
}

export { Koti }