import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";

interface user {
  map(arg0: (item: any) => JSX.Element): import('react').ReactNode;
  name: string;
  email: string;
  phone: number;
}

export default function Portfolio() {

  const [user, setUser] = useState<user | undefined>();

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((json) => setUser(json));
    }, []);

  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <h1>Portfolio</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, veniam. Voluptatem recusandae molestias quis quidem vel aspernatur quibusdam debitis vitae?</p>

      <div className="p-2">
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
          </tr>
        </thead>
        <tbody>
          {user?.map((item) => (
            <tr>
              <th scope="row">{item.id}</th>
              <td>{item?.name}</td>
              <td>{item?.email}</td>
              <td>{item?.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    
    </motion.div>
  )
}