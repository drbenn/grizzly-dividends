import { motion } from "framer-motion";

export default function NoMatch() {

  return (
    <motion.div
      className="container text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
      <p>The url entered does not exist. Please select an available link from the navbar.</p>    
    </motion.div>
  )
}