import { Routes, Route } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Network from './pages/Network'
import Contact from './pages/Contact'


export default function App() {
  return (
    <>
      <CustomCursor />

      <Navbar />

      <main style={{ paddingTop: 0 }}>
        <Routes>
          <Route path="/"         element={<Home />} />
          <Route path="/about"    element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/network"  element={<Network />} />
          <Route path="/contact"  element={<Contact />} />
        </Routes>
      </main>

      <Footer />
    </>
  )
}
