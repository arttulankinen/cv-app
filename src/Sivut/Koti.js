import React from 'react'
import koodi from '../images/koodi.mp4'

function Koti() {
    return(
    <div id='KotiId'>
        <div id='ekaosio'>
        <p id='kotiteksi1'>Hei! <br/>
        Nimeni on Arttu Lankinen ja olen 21-vuotias tietotekniikka 
        insinööri opiskelija Kuopiosta. Harrastuksiini kuuluu salilla käyminen, tietokoneet ja koodaus.
        <video id='ekavideo' src={koodi} autoPlay loop muted/>
        </p>
        </div>
    </div>
    );
}


export {Koti}