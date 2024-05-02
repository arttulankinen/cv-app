import React from 'react'
import koodi from '../images/koodi.mp4'
import code from '../images/code.png'

function Koti() {
    return(
<div id='KotiId'>
<div id="ekaosio">
    <div class="teksti-osa">
        <p>Hei! <br/>
        Nimeni on Arttu Lankinen ja olen 21-vuotias tietotekniikka 
        insinööri opiskelija Kuopiosta. Harrastuksiini kuuluu salilla käyminen, tietokoneet ja koodaus.</p>
    </div>
     <div class="video-osa">
        <video id='ekavideo' src={koodi} autoPlay loop muted/>
    </div>
</div>
<div id='tokaosio'>
<div class="teksti-osa">
        <p>Hei! <br/>
        Nimeni on Arttu Lankinen ja olen 21-vuotias tietotekniikka 
        insinööri opiskelija Kuopiosta. Harrastuksiini kuuluu salilla käyminen, tietokoneet ja koodaus.</p>
    </div>
     <div class="kuva-osa">
    <img id='kuva' src={code} alt='code'></img>
    </div>
    
</div>
</div>
);
}


export {Koti}