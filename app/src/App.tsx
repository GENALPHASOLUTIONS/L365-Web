import { Routes, Route } from 'react-router-dom'
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
  '🏢 Iceland Business Centre, Colombo 03',
  '🚢 Sea Freight | ✈️ Air Freight | 📦 Warehousing | 🛃 Customs Brokerage',
  '🌐 20+ Years Industry Experience via CL Synergy Limited',
  '⏰ 24/7/365 Operations — Always Here For You',
]

export default function App() {
  const full = [...tickerItems, ...tickerItems].join('   ·   ')
  return (
    <div className="min-h-screen bg-white">
      {/* Announcement bar */}
      <div className="bg-[#0F1923] text-gray-400 text-xs overflow-hidden" style={{ height: '36px', display: 'flex', alignItems: 'center' }}>
        <div className="ticker-inner whitespace-nowrap flex-shrink-0" style={{ display: 'inline-flex', gap: '3rem' }}>
          <span>{full}</span>
          <span aria-hidden="true">{full}</span>
        </div>
      </div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/network" element={<Network />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}
