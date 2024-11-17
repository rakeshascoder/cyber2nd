import React from 'react'
import './App.css'
import Data from './Components/Data'
import { BrowserRouter } from 'react-router-dom'
import Accordian from './Components/Accordian'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Clients from './Components/Clients'
import Happy from './Components/Happy'
import Clientfeeds from './Components/Clientfeeds'

function App() {
return(
  <>
  
 <BrowserRouter>


{/* <Data/> */}
 {/* <Services/> */}
 {/* <AboutUs/> */}
 {/* <Clients/> */}
 {/* <Happy/> */}
 <Clientfeeds/>
 </BrowserRouter>


  </>
)
}

export default App
