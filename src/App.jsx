import { } from 'react'
import './App.css'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero/Hero'
import Card from './Components/Card/Card'
import Section from './Components/Section/Section'
import Footer from './Components/Footer'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Menu from './pages/Menu';
import Contect from './pages/Contect';
import Blog from './pages/Blog';
import About from './pages/About';



function App() {

  return (
    <>
     <Router>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Contect" element={<Contect />} />
        <Route path='/About' element={<About />} />
        <Route path="*" element={() => <h2>Page Not Found</h2>} />
      </Routes>
      </Router>
     
      <Hero/>
      <Card />
      <Section/>
      <Footer/>
    </>
  )
}

export default App
