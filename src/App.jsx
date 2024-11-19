
import './App.css'
import Data from './Components/Data'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'
import Testimonials from './pages/Testimonials';
import OurClients from './pages/OurClients';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function App() {
return(
  <>
  
 <BrowserRouter>


<Routes>
  <Route path="/" element={<Data />} />
  <Route path="/services" element={<Services />} />
  <Route path="/about-us" element={<AboutUs />} />
  <Route path="/testimonials" element={<Testimonials />} />
  <Route path="/clients" element={<OurClients />} />
</Routes>
{/* <Data/> */}
 {/* <Services/> */}
 {/* <AboutUs/> */}
 {/* <Clients/> */}
 {/* <Happy/> */}
 </BrowserRouter>


  </>
)
}

export default App
