import { useState } from 'react'
import './App.css'
import Nav from './components/Navbar'
import Main from './components/Main'
import BgFigures from './components/BgFigures'
import Services from './components/Services'
import Blog from './components/Blog'
import End from './components/End'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <BgFigures/>
      <Nav/>
      <Main/>
      <Services/>
      <Blog/>
      <End/>
      <Footer/>

    </>
  )
}

