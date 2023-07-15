
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-misused-promises */
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();
  const handleSubmitLogin: React.FormEventHandler<HTMLFormElement> = async (event) => {
    const formData: FormData = new FormData(event.currentTarget);
    event.preventDefault();
    // for (const [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    console.log(event.target[0].value);
    const username: string = event.target[0].value;
    const password: string = event.target[1].value;
    console.log('Send login to server to authenticate');
    console.log('username: ', username, ' password: ', password);
    const userData = {
      "username": username,
      "password": password
    }

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
      });
      
      // Handle the response from the server as needed
      if (response.ok) {
        console.log('User login successful!');
        // TODO: GET USER DATA After successful login    
        navigate("/portfolio")    
      } else {       
        console.error('User login failed.');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }

  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
    <div className="container">
      <div className='page-title'>Log In</div>

        <form onSubmit={handleSubmitLogin}>
          <div className='form-container'>
            <input type="text" name="username" placeholder="Username" className='user-input'/>
            <input type="password" name="password" placeholder="Password" className='user-input'/>
            <button type="submit" className='submit-button'>LOG IN</button>
          </div>
        </form>


    </div>

    </motion.div>
  )
}