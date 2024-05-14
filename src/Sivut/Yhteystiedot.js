import React, { useState } from 'react'

function Yhteystiedot() {

  const [onClick, setOnClick] = useState(false); 
  const [dataEmail, setDataEmail] = useState("");
  const [dataOtsikko, setDataOtsikko] = useState("");
  const [dataViesti, setDataViesti] = useState("");


 const handleEmail = (e) =>{
    setDataEmail(e.target.value);
 }
 const handleOtsikko = (e) =>{
  setDataOtsikko(e.target.value);
}
const handleViesti = (e) =>{
  setDataViesti(e.target.value);
}

  const handleClick = () => {

   const EmailData = {
    email:dataEmail,
    Otsikko: dataOtsikko,
    Viesti: dataViesti
   }

   fetch("http://localhost:5000/send-email",{
    method:"POST",
    headers:{
      "Content-type" : "application/json",
    },
      body: JSON.stringify(EmailData)
   })
   .then(response => {
    if(!response.ok) {
      throw new Error("FAIL")
    }
      console.log("email sent");
   })
   .catch(error => {
    console.error("error sending mail:", error);
   });
    
  };
  
    return(
        <div id='contactpage'>
          <p id='ohje'>Ota minuun yhteyttä sähköpostitse!</p>
          <input type='text' value={dataEmail} onChange={handleEmail} id="email" className="Tekstiosa" placeholder='Email'/>
          <input type='text' value={dataOtsikko} onChange={handleOtsikko} id="MSGotsikko" className="Tekstiosa" placeholder='Otsikko' maxLength={30}/>
          <textarea value={dataViesti} onChange={handleViesti} id='viesti' className="Tekstiosa" placeholder='Viesti' maxLength={1000} rows={4}/>
          <button id='send' onClick={handleClick}>Lähetä</button>
        </div>
    );
}


export {Yhteystiedot}