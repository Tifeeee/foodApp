import React from 'react'
import Nav from './Components/Navigation/Nav'
import Hero from './Components/HeroSection/Hero'
import Products from './Components/Products/Products'
import About from './Components/About/About'
import Team from './Components/Team/Team'
import Footer from './Components/Footer/Footer'

const Routing = () => {
  return (
    <div>
            <Nav/>
    <Hero/>
    <Products/>
    <About/>
    <Team/>
    <Footer/>
    </div>
  )
}

export default Routing