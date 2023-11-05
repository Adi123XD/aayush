import React from 'react'
import {motion} from "framer-motion"
const Links = () => {
    const variants ={
        open: {
            transition: {
                staggerChildren: 0.1
            }
        },
        close:
        {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        }
    }
    const itemVariants ={
        open: {
            y: 0, opacity: 1,
        },
        close:{
            y:50,opacity:0
        }
    }
    const sidebaritems=["HomePage","Services","Portfolio","Contact","About"]
  return (
    <motion.div className='links'
    variants={variants}>{sidebaritems.map((sidebaritem)=>(
        <motion.a href={`#${sidebaritem}`} key={sidebaritem} variants={itemVariants} whileHover={{scale:1.1}} whileTap={{scale:0.9}}>{sidebaritem}</motion.a>
    ))}
    </motion.div>
  )
}

export default Links
