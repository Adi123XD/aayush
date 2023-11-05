import React from 'react'
import {motion} from "framer-motion"
import "./stylenotfound.scss"
import { useNavigate } from 'react-router-dom'
const Pagenotfound = () => {
  const navigate =useNavigate();
  const handleOnClick=()=>{
    navigate('/')

  }
  return (
    <div className='pagenotfound'>
        <h2>Page Under Construction</h2>
        <p>I am building this page and it will be availble soon</p>
        <motion.button onClick={handleOnClick} whileTap={{scale:0.9}}>&#8592; Back to Home</motion.button>
      
    </div>
  )
}

export default Pagenotfound
