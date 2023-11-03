import React, { useState } from 'react'
import {motion} from 'framer-motion'
const Test = () => {
    const variants={
        visible: {opacity:1},
        hidden: {opacity:0}
    }
    const [state , setState] = useState(false)
  return (
    <div className='course'>
        <motion.div className="box" 
        // initial={{opacity:0.5,scale:0.5}}
        // whileHover={{opacity:1 , scale:1}}
        variants={variants}
        animate={state ? "visible":"hidden"}
        transition={{duration:1}}
        drag></motion.div>
        <button onClick={()=>{setState(prev=>!prev)}}>Click me </button>
      
    </div>
  )
}

export default Test
