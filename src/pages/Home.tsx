import { motion } from "framer-motion";
import home1 from '/home1.png'
import home2 from '/home2.png'
import Footer from '../components/Footer';

export default function Home() {

  return (
    <motion.div
      className="container text-center  bg-black"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className='home-text'>Visualize Dividend Returns</div>
      <div className='home-subtext'>
        See the income of your dividend stocks based on invested amount and the blended total return rate
      </div>
      <div className='home-img'>
        <img 
          src={home1}         
          alt={'Portfolio Preview'}
        />
      </div>
      <div className='home-text'>Deep Dive Details</div>
      <div className='home-subtext'>
        Quickly view crucial metrics for long term dividend performance
      </div>
      <div className='home-img'>
        <img 
          src={home2}         
          alt={'Deep Dive Preview'}
        />
      </div>
    </motion.div>
  )
}