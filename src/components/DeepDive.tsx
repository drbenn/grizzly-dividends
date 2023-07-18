import { useState } from 'react'
import './deepdive.scss'
import close from '/close.png'


export default function DeepDive() { 
  const [deepClass, setDeepClass] = useState("deep-dive-container");  
  const [deepCloseClass, setDeepCloseClass] = useState("'close-deep-icon");


  const handleHideDeepDive = () => { 
    console.log('close deep dive');
    if (deepClass === "deep-dive-container") {
      setDeepClass("deep-dive-container-hidden") 
      setDeepCloseClass("close-deep-icon-hidden")
    } else {
      setDeepClass("deep-dive-container")
      setDeepCloseClass("close-deep-icon")

    }      
  }
  
  return (
    <></>
    // <div className={deepClass}>
    //   <div className={deepCloseClass}>
    //     <img 
    //           src={close}         
    //           alt={'Close Deep Dive'}
    //           onClick={handleHideDeepDive}
    //         />
    //   </div>

    // </div>
  )
}