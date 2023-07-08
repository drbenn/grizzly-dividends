
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React, { useState } from 'react';
import { motion } from "framer-motion";

export default function Login() {
  const handleSubmitLogin: React.FormEventHandler<HTMLFormElement> = (event) => {
    const formData: FormData = new FormData(event.currentTarget);
    event.preventDefault();
    // for (const [key, value] of formData.entries()) {
    //   console.log(key, value);
    // }
    console.log(event.target[0].value);
    const email: string = event.target[0].value;
    const password: string = event.target[1].value;
    console.log('Send login to server to authenticate');
    console.log('email: ', email, ' password: ', password);
  }

  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <h1>Login</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, veniam. Voluptatem recusandae molestias quis quidem vel aspernatur quibusdam debitis vitae?</p>    
      <form onSubmit={handleSubmitLogin}>
        <input type="text" name="email" placeholder="Email" />
        <input type="password" name="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </motion.div>
  )
}