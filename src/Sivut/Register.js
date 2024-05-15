import React from 'react'
import { useState } from 'react';

function Register() {
    const RegisterForm = () => {
      const [registerData, setRegisterData] = useState({
        email: '',
        käyttäjänimi: '',
        salasana: ''
      });
  
      const handleChange = (e) => {
        const { name, value } = e.target;
        setRegisterData({
          ...registerData,
          [name]: value
        });
      };
  
      const sendRegisterDataToServer = async (data) => {
        try {
          const response = await fetch('https://your-api-endpoint.com/register', { // Replace with your actual endpoint
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const result = await response.json();
          console.log('Data submission successful', result);
        } catch (error) {
          console.error('Problem submitting data', error);
        }
      };
  
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Register data submitted', registerData);
        sendRegisterDataToServer(registerData);
      };
  
      return (
        <form id='register' onSubmit={handleSubmit}>
          <div>
            <label>Email:</label>
            <input
              type='text'
              name='email'
              placeholder='@gmail.com'
              value={registerData.email}
              onChange={handleChange}
              className='register'
            />
          </div>
          <div>
            <label>Käyttäjänimi:</label>
            <input
              type='text'
              name='käyttäjänimi'
              placeholder='MaijaMeikäläinen'
              value={registerData.käyttäjänimi}
              onChange={handleChange}
              className='register'
            />
          </div>
          <div>
            <label>Salasana:</label>
            <input
              type='password'
              name='salasana'
              placeholder='********'
              value={registerData.salasana}
              onChange={handleChange}
              className='register'
            />
          </div>
          <div>
          <button type='submit'>Rekisteröidy</button>
          </div>
        </form>
      );
    };
  
    return <RegisterForm />;
  }
  

export{Register}