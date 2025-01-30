import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter as Router} from "react-router-dom"
import "./App.css"
import Navbar from "./components/Navbar.jsx"
import Hero from "./components/Hero.jsx"
import Contact from "./components/Contact.jsx"
import Footer from "./components/Footer.jsx"
import Gallery from "./components/Gallery.jsx"
import WorkoutSessions from "./components/WorkoutSessions.jsx"
import BMICalculator from "./components/BMICalculator.jsx"

import Pricing from "./components/Pricing.jsx"

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Hero/>
      <WorkoutSessions/>
      <Gallery/>
      <Pricing/>
      <Contact/>
      <BMICalculator/>
      <Footer/>
      <ToastContainer theme='dark' position='top-center'/>
    </Router>
  )
}

export default App