import React from 'react'
import Hero from './Components/HeroSection/Hero'
import Products from './Components/Products/Products'
import About from './Components/About/About'
import Team from './Components/Team/Team'
import Footer from './Components/Footer/Footer'
import NavBar from './Components/Navigation/NavBar'

const Routing = () => {
  return (
    <div>
            <NavBar/>
    <Hero/>
    <Products/>
    <About/>
    <Team/>
    <Footer/>
    </div>
  )
}

export default Routing