import React, { useEffect, useRef } from 'react'
import "./parallax.scss"
import {motion, useScroll,useTransform} from "framer-motion"

const Parallax = ({ type }) => {
    const ref = useRef()
    const {scrollYProgress} =useScroll({
        target:ref,
        offset:['start start', 'end start']
    })
    // const { scrollYProgress2 } = useScroll({
    //     target: ref,
    //     offset: ['end start', 'start start']
    // });

    
    const yText=useTransform(scrollYProgress,[0,1] , ["0%","500%"])
    const yBg=useTransform(scrollYProgress,[0,1] , ["0%","150%"])
    const xBg=useTransform(scrollYProgress,[0,1] , ["0%","70%"])
    // const xBg=useTransform(scrollYProgress,[0,1] , ["0%","100%"])

    // const ybg2=useTransform(scrollYProgress2,[0,1] , ["0%","300%"])

    return (
        <div className="parallax" ref={ref} style={{
            background: type === 'services'
                ? "linear-gradient(180deg, #111132, #0c0c1d)"
                : "linear-gradient(180deg, #111132, #505064)"
        }}>
            <motion.h1 style={{ y: yText }}>{type === 'services' ? "Experiences" : "My Works"}</motion.h1>
            <motion.div className="mountains"></motion.div>
            <motion.div className="planets" style={{ backgroundImage: `url(${type === "services" ? "/planets.png" : "/sun.png"})`,y:yBg }} ></motion.div>
            <motion.div className="stars-container">

            <motion.div className="stars" style={{x:xBg}}></motion.div>

            </motion.div>
        </div>
    );
}


export default Parallax
