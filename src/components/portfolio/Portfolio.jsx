import React, { useRef } from 'react'
import { useNavigate, Link } from "react-router-dom"
import "./portfolio.scss"
import { motion, useScroll, useTransform, useSpring } from "framer-motion"


const Portfolio = () => {
  const ref = useRef()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['end end', 'start start'] })
  const wid = useTransform(scrollYProgress, [0, 1], ["0", "1"])
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  })
  // const navigate = useNavigate();
  // const handleButtonClick = (codelink) => {
  //   if (codelink) {
  //     window.open(codelink, '_blank');
  //   } else {
  //     navigate('/page-not-found'); // Navigate to your "Page Not Found" component
  //   }
  // }

    const items = [
      {
        id: 1,
        title: "Amazon Clone",
        img: "https://d1fdloi71mui9q.cloudfront.net/D6Y1HXZSrWV73Vohp3BQ_amazon-logo-on-black-background-o121czsdkvmzh6e9.jpeg",
        desc: "Created a React-based Amazon clone website with Firebase integration for login and signup. The project closely mimicked Amazon's design and features, offering users a familiar online shopping experience with secure authentication.",
        code: "https://github.com/Adi123XD/amazon-clone"
      },
      {
        id: 2,
        title: "Waste Classification model",
        img: "https://www.rheumatologyadvisor.com/wp-content/uploads/sites/18/2019/03/artificialintelligenceg8866_1455488.jpg",
        desc: "Developed a waste classification model utilizing MobileNetV2 as the foundation, showcasing proficient deep learning capabilities. This model effectively categorizes waste objects into distinct groups, demonstrating a practical application of machine learning for environmental sustainability.",
        code: "https://drive.google.com/drive/folders/13OkaymtkOY_eZDh6OPp1VWb_StwmKMLD"
      },
      {
        id: 3,
        title: "Samachar Website",
        img: "https://thumbs.dreamstime.com/z/news-sms-message-comic-text-speech-bubble-balloon-pop-art-style-wow-banner-comics-book-font-sound-phrase-template-halftone-strip-108845658.jpg",
        desc: "Constructed the Samachar news website with React.js, harnessing the power of the News API. This project showcases the ability to deliver real-time news updates, offering a user-friendly interface for accessing current events and stories, highlighting expertise in web development and data integration.",
        code: "https://github.com/Adi123XD/samachar"
      },
      {
        id: 4,
        title: "Food ChatBot",
        img: "https://siamcomputing.com/wp-content/uploads/2022/05/Chatbot.png",
        desc: "Developed a versatile food chatbot utilizing Dialogflow, Python, and MySQL for seamless order processing. This chatbot excels in order placement, modification, and deletion, as well as item removal, all while offering order tracking functionalities. It showcases adept skills in conversational AI and database management for an enhanced food ordering experience.",
        code: "https://github.com/Adi123XD/foodchatbot"
      },
      {
        id: 5,
        title: "AdiNotes",
        img: "https://images.pexels.com/photos/3507989/pexels-photo-3507989.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc: "Designed a note management website using React.js for the front-end and Node.js with Express.js for the back-end. Data for notes was efficiently stored in MongoDB, demonstrating proficiency in full-stack web development and database integration for streamlined note organization and retrieval.",
        code: "https://github.com/Adi123XD/adinotes"
      },
    ]

    const Single = ({ item }) => {
      const refer = useRef()
      const { scrollYProgress } = useScroll({
        target: refer,
        // offset: ["start start", "end start"],
      });

      console.log('scrollYProgress:', scrollYProgress);
      const y = useTransform(scrollYProgress, [0, 1], [-300, 300])
      // const ybg = useTransform(scrollYProgress,[0,1],["0%","-50%"])
      return (
        <section >
          <div className="container">
            <div className="wrapper">
              <img src={item.img} alt="" ref={refer} />
              <motion.div className="textContainer" style={{ y }}>
                <motion.h2>{item.title}</motion.h2>
                <motion.p>{item.desc}</motion.p>
                <motion.button whileTap={{ scale: 0.9 }}><Link to={item.code? item.code : "/notfound"} >Source Code</Link></motion.button>
              </motion.div>
            </div>
          </div>
        </section>
      )
    }
    return (
      <div className='portfolio' ref={ref}>
        <div className="progress">
          <h1>Projects</h1>
          <motion.div className="progressbar"
            style={{ scaleX: wid }}>
          </motion.div>
        </div>
        {items.map(item => (
          <Single item={item} key={item.id} />
        )

        )}

      </div>
    )
  }

export default Portfolio
