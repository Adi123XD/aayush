import React from 'react'
import './experience.scss'
const Experience = () => {
    return (
        <div className='experience'>
            <div className="wrapper">
                <div className="container left-container">
                    <img src="/learnIt.jpg" alt="" />
                    <div className="text-box">

                        <h2>Placement Coordinator</h2>
                        <h3>Learn IT</h3>
                        <small>2023 - Present</small>
                        <p>Ran mock placement sessions, readying students for interviews and Designed materials for enhanced readiness.</p>
                        <span className='left-arrow'></span>
                    </div>
                </div>
                <div className="container right-container">
                    <img src="/acciojob.jpeg" alt="" />
                    <div className="text-box">
                        <h2>Teaching Assistant</h2>
                        <h3>Acciojob</h3>
                        <small>Oct 2022 - Feb 2023</small>
                        <p>Conducted live Discord Java programming sessions, created assessments, and led interviews for advanced training. Praised for dedication, simplifying complex concepts, and aiding students in reaching academic goals..</p>
                        <span className='right-arrow'></span>
                    </div>
                </div>
                <div className="container left-container">
                    <img src="/mujacm.png" alt="" />
                    <div className="text-box">
                        <h2>Logistics Manager</h2>
                        <h3>Muj ACM</h3>
                        <small>2023 - Present</small>
                        <p>Efficiently managed event logistics, securing venues, equipment, and resources for seamless execution, and ensuring member satisfaction throughout the process.</p>
                        <span className='left-arrow'></span>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Experience
