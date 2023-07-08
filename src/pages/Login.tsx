import { motion } from "framer-motion";

export default function Login() {

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
    
      </motion.div>
  )
}