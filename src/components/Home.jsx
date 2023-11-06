import React from 'react'
import Navbar from './navbar/Navbar'
import Hero from './hero/Hero'
import Parallax from './parallax/Parallax'
import Portfolio from './portfolio/Portfolio'
import Contact from './contact/Contact'
import Cursor from './cusror/Cursor'

const Home = () => {
  return (
    <div>
      <Cursor/>
      <section id='HomePage'>
      <Navbar/>
      <Hero/>
    </section>
    <section id='Services'><Parallax type="services"/></section>
    <section>Services</section>
    <section id='Portfolio'><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id='Contact'><Contact/></section>
    </div>
  )
}

export default Home
