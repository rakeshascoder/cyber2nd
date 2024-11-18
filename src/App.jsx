
import './App.css'
import Data from './Components/Data'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
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


<Routes>
  <Route path="/" element={<Data />} />
  <Route path="/services" element={<Services />} />
  <Route path="/about-us" element={<AboutUs />} />
</Routes>
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
