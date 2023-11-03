import React, { useState } from 'react'
import {motion, spring} from 'framer-motion'
import Links from './links/Links'
import ToggleButton from './togglebutton/ToggleButton'
import './style.scss'


const Sidebar = () => {
    const variants ={
        open : {
            clipPath: "circle(800px at 50px 50px)",
            transition:{
                type: spring,
                stiffness:50,
    
            }
        },
        close :{
            clipPath: "circle(30px at 50px 50px)",
            transition:{
                delay:0.5,
                type: spring,
                stiffness:400,
                damping:40
            }
        }
    }
    
    const [open , setOpen ] = useState(false)
  return (
    <motion.div className='sidebar' animate={open? "open":"close"}>
        <motion.div className="bg" variants={variants}>
            <Links/>
        </motion.div>
        <ToggleButton setOpen={setOpen} />
    
    </motion.div>
  )
}

export default Sidebar
