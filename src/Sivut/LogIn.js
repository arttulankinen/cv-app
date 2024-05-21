import React from 'react'

function LogIn() {
  return (
      <div id='loginsivu'>
        <form id='loginData'>
          <div className='loginBG'>
            <label>Käyttäjänimi:</label>
            <input type='text' placeholder='MaijaMeikälainen' className='login'/>
          </div>
          <div className='loginBG'>
            <label>Salasana:</label>
            <input type='password' placeholder='********' className='login'/>
          </div>
          <div>
              <button id='sendL' type='submit'>Kirjaudu</button>
          </div>
        </form>
      </div>
  )
}

export {LogIn}