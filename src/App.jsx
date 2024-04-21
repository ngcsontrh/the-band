import React from 'react'
import './index.css'
import NavBar from './components/NavBar'
import HeroSection from './components/HeroSection'
import TourDates from './components/TourDates'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <HeroSection />
      <TourDates />
      <Contact />
      <Footer />
    </>
  )
}

export default App