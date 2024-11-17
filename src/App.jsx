
import './App.css'
import Data from './Components/Data'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Services from './pages/Services'
import AboutUs from './pages/AboutUs'

function App() {
return(
  <>
  
 <BrowserRouter>


<Routes>
  <Route path="/" element={<Data />} />
  <Route path="/services" element={<Services />} />
  <Route path="/about-us" element={<AboutUs />} />
</Routes>
 </BrowserRouter>


  </>
)
}

export default App
