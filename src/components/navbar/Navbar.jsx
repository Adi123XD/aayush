import React from 'react'
import {motion} from "framer-motion"
import './style.scss'
import Sidebar from '../sidebar/Sidebar'
const Navbar = () => {
    return (
        <div className='navbar'>
            {/* Sidebar */}
            <Sidebar/>
            <div className="wrapper">
                <motion.span initial={{opacity:0 , scale: 0.5}}
                animate={{opacity:1 , scale:1}} 
                transition={{duration:0.5}}>Aayush Patel</motion.span>
                {/* <div className="social">
                    <a href="https://www.instagram.com/aayxush_/" target='_blank'><img src="/instagram.png" alt="" /></a>
                    <a href="https://github.com/Adi123XD" target='_blank'><img src="/gthb.png" alt="" /></a>
                    <a href="https://www.linkedin.com/in/adarsh-agarwal03/" target='_blank'><img src="/linked.png" alt="" /></a>
                    <a href="https://www.youtube.com/" target='_blank'><img src="/youtube.png" alt="" /></a>
                </div> */}
            </div>
        </div>
    )
}

export default Navbar
