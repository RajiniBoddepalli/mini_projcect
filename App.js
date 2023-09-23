import Navbar from "./pages/Navbar";

import About from "./pages/About"
import Home from "./pages/Home"
import Bookings from "./pages/Bookings"
import Complaints from "./pages/Complaints"
import Admin from "./pages/Admin"
// import Details from "./pages/Details";
import './App.css'
import { useEffect, useState } from 'react'
import axios from 'axios'
// const { useEffect, useState } = require('react');
// const axios = require('axios');

function App(){
  // <Details/>
  let component
  switch (window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About/>
      break
    case "/booking":
      component = <Bookings/>
      break
    case "/complaints":
      component = <Complaints/>
      break
    case "/admin":
      component = <Admin/>
      break
    
  }
  
  return(
    <>
    <Navbar/>
    
    <div className="container">
    {component}
    </div>

    


         
    </>
  )
}

export default App