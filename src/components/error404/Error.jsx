import React from 'react'
import {motion} from "framer-motion"
import "./error.scss"
import { useNavigate } from 'react-router-dom'
const Error = () => {
  const navigate =useNavigate();
  const handleOnClick=()=>{
    navigate('/')

  }
  return (
    <div className='error'>
        <h2>Error 404 page not found</h2>
        <p>Oops! seems like you have lost your way 😊</p>
        <motion.button onClick={handleOnClick} whileTap={{scale:0.9}}>&#8592; Back to Home</motion.button>
      
    </div>
  )
}

export default Error
