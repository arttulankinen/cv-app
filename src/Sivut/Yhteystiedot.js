import React from 'react'

function Yhteystiedot() {
    return(
        <div id='YhteystiedotId'>
          <input type='text' id="email" className="Tekstiosa" placeholder='email'/>
          <input type='text' id="viestiotsikko" className="Tekstiosa" placeholder='Otsikko' maxLength={30}/>
          <input type='text' id='viesti' className="Tekstiosa" placeholder='Viesti' maxLength={500}/>
        </div>
    );
}


export {Yhteystiedot}