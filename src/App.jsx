import React from 'react'
import './App.css'
import Data from './Components/Data'
import { BrowserRouter } from 'react-router-dom'
import Accordian from './Components/Accordian'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'

function App() {
return(
  <>
  
 <BrowserRouter>


{/* <Data/> */}
 {/* <Services/> */}
 <AboutUs/>
 </BrowserRouter>


  </>
)
}

export default App
