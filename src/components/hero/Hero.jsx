import React from 'react'
import "./hero.scss"
import {motion} from "framer-motion"
const Hero = () => {
    const resume='https://drive.google.com/drive/folders/1wnCneMeByTaiUIxUDpbgVGucEgq6PVS_'
    const textvariants={
        initial:{
            x:-500, opacity:0
        },
        animate: {
            x:0 , opacity:1,
            transition:{
                duration:1,
                staggerChildren:0.1
            }
        },
        scrollbutton:{
            opacity:0,
            y:10,
            transition:{duration:2,
            repeat:Infinity}

        }
    }
    const slidervariants={
        initial:{
            x:0,opacity:1
        },

        animate:{
            x:"-525%",
            transition:{
                duration:15,
                repeat:Infinity,
                repeatType:"mirror"
            }
        }
    }
    
    return (
        <div className='hero'>
            <div className="wrapper">
                <motion.div className="textcontainer" variants={textvariants} initial="initial" animate="animate" >
                    <motion.h2 variants={textvariants}>Adarsh Agarwal</motion.h2>
                    <motion.h1 variants={textvariants}>Web Developer and ML Engineer</motion.h1>
                    <motion.div className='buttons'variants={textvariants}>
                        <motion.button variants={textvariants}
                        whileHover={{backgroundColor:'white', color: 'black'}}
                        whileTap={{backgroundColor:"transparent", color:"white",scale:0.9}}><a href='#Portfolio'>See the Latest Work</a></motion.button>
                        <motion.button variants={textvariants}
                        whileHover={{backgroundColor:'white', color: 'black'}}
                        whileTap={{backgroundColor:"transparent", color:"white",scale:0.9}}><a href='#Contact'>Contact Me</a></motion.button>
                        <motion.button variants={textvariants}
                        whileHover={{backgroundColor:'white', color: 'black'}}
                        whileTap={{backgroundColor:"transparent", color:"white",scale:0.9}}><a href={resume}>Resume</a></motion.button>
                    </motion.div>
                    <motion.img src="/scroll.png" alt="" variants={textvariants} animate='scrollbutton'/>
                </motion.div>
            </div>
            <motion.div className="slidingTextContainer" variants={slidervariants} initial="initial" animate="animate">
            Ambitious Cursious Adventurous 
            </motion.div>
            <div className="image-container">
                <img src="aaaa.png" alt=",y pic" />
            </div>

        </div>
    )
}

export default Hero
