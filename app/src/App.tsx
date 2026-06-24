import { Routes, Route } from 'react-router-dom'
import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Network from './pages/Network'
import Contact from './pages/Contact'

const tickerItems = [
  '📞 +94 11 530 0250',
  '✉️ info@log-365.com',
  '🏢 Iceland Business Centre, Colombo 03, Sri Lanka',
  '🚢 Sea Freight  ✈️ Air Freight  📦 Warehousing  🛃 Customs Brokerage',
  '🌐 A Subsidiary of CL Synergy Limited — Serving Since 2004',
  '⏰ 24 / 7 / 365 — Always Operational',
]
const full = [...tickerItems, ...tickerItems].join('   ·   ')

export default function App() {
  return (
    <div className="min-h-screen" style={{ background: '#F6F5F2' }}>
      <CustomCursor />

      {/* Slim announcement ticker */}
      <div style={{ background: '#0D1B2A', height: '34px', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div className="ticker-inner whitespace-nowrap" style={{ display: 'inline-flex', color: 'rgba(255,255,255,0.5)', fontSize: '11px', letterSpacing: '.03em' }}>
          <span>{full}</span><span aria-hidden="true">&nbsp;&nbsp;&nbsp;·&nbsp;&nbsp;&nbsp;{full}</span>
        </div>
      </div>

      <Navbar />
      <main>
        <Routes>
          <Route path="/"        element={<Home />} />
          <Route path="/about"   element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/network" element={<Network />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
