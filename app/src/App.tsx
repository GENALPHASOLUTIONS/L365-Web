import { Routes, Route } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Network from './pages/Network'
import Contact from './pages/Contact'

const items = [
  '📞 +94 11 530 0250  ·  ✉ info@log-365.com',
  '🏢 06th Floor, Iceland Business Centre, Colombo 03',
  '🚢 Sea Freight · ✈️ Air Freight · 📦 Warehousing · 🛃 Customs Brokerage',
  '🌐 A CL Synergy Group Company · 20+ Years of Excellence',
  '⏰ 24 / 7 / 365 Operations',
]
const full = [...items, ...items].join('     ·     ')

export default function App() {
  return (
    <>
      <CustomCursor />

      {/* Slim top ticker */}
      <div style={{ background: 'var(--dark)', height: 34, display: 'flex', alignItems: 'center', overflow: 'hidden', position: 'relative', zIndex: 60 }}>
        <div className="ticker-scroll" style={{ whiteSpace: 'nowrap', display: 'inline-flex', fontSize: '11px', fontFamily: "'DM Sans', system-ui, sans-serif", color: 'rgba(255,255,255,0.45)', letterSpacing: '.04em' }}>
          <span>{full}</span>&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;<span aria-hidden>{full}</span>
        </div>
      </div>

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
