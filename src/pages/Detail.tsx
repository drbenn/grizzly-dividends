import { motion } from "framer-motion";
import DeepDive from '../components/DeepDive';

export default function Detail() {

  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 3 }}
    >
    <DeepDive />
    </motion.div>
  )
}