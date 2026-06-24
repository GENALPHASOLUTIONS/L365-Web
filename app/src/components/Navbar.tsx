import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const serviceCategories = [
  {
    title: 'Ocean Freight',
    color: '#0E9B9B',
    icon: '🚢',
    items: ['Sea Freight (FCL & LCL)', 'FCL Shipments', 'LCL Consolidation'],
  },
  {
    title: 'Air Freight',
    color: '#E8541A',
    icon: '✈️',
    items: ['Air Freight', 'Express Delivery'],
  },
  {
    title: 'Customs & Trade',
    color: '#7BC14A',
    icon: '🛃',
    items: ['Customs House Brokerage', 'Import & Export Mgmt', 'Cross Border Logistics', 'Entrepot Trade Ops'],
  },
  {
    title: 'Warehousing',
    color: '#0E9B9B',
    icon: '🏭',
    items: ['Warehousing Solutions', 'Bonded Warehousing'],
  },
  {
    title: '3PL / 4PL',
    color: '#E8541A',
    icon: '🔄',
    items: ['3PL Solutions', '4PL Solutions', 'Supply Chain Mgmt'],
  },
  {
    title: 'Value Added',
    color: '#7BC14A',
    icon: '⭐',
    items: ['Project Cargo Handling', 'Door-to-Door Logistics', 'Cargo Insurance', 'Last Mile Delivery'],
  },
]

function OrbitLogo() {
  return (
    <div className="relative flex items-center">
      <div className="relative" style={{ perspective: '400px' }}>
        <img src="/logo.png" alt="Logistics 365" className="relative z-10 w-auto"
          style={{ height: '72px', minWidth: '190px' }} />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'translateZ(0)' }}>
          <div style={{ width: '115%', height: '115%', border: '1.5px solid rgba(232,84,26,0.3)', borderRadius: '50%', animation: 'orbit1 4s linear infinite', transformStyle: 'preserve-3d' }} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'translateZ(0)' }}>
          <div style={{ width: '108%', height: '108%', border: '1.5px solid rgba(14,155,155,0.25)', borderRadius: '50%', animation: 'orbit2 6s linear infinite', transformStyle: 'preserve-3d' }} />
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const location = useLocation()
  const isActive = (path: string) => location.pathname === path

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100" style={{ boxShadow: '0 2px 20px rgba(0,0,0,0.06)' }}>
      <div className="wrap flex items-center justify-between" style={{ height: '88px' }}>
        {/* Logo */}
        <Link to="/" className="flex-shrink-0" onClick={() => setMobileOpen(false)}>
          <OrbitLogo />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className={`nav-link ${isActive('/') ? 'active' : ''}`}>Home</Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'active' : ''}`}>About Us</Link>

          {/* Services mega dropdown */}
          <div className="mega-trigger relative">
            <Link to="/services" className={`nav-link flex items-center gap-1 ${isActive('/services') ? 'active' : ''}`}>
              Services
              <svg className="w-3.5 h-3.5 mt-0.5 opacity-60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </Link>

            <div className="mega-dropdown">
              <div className="grid grid-cols-3 gap-4 mb-4">
                {serviceCategories.map(cat => (
                  <div key={cat.title}>
                    <div className="service-cat-title flex items-center gap-1.5">
                      <span>{cat.icon}</span> {cat.title}
                    </div>
                    {cat.items.map(item => (
                      <Link key={item} to="/services" className="service-item">
                        <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: cat.color }} />
                        {item}
                      </Link>
                    ))}
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-100 pt-3 flex items-center justify-between">
                <span className="text-xs text-gray-400">20+ comprehensive logistics services</span>
                <Link to="/services" className="inline-flex items-center gap-1.5 text-sm font-bold text-[#E8541A] hover:gap-2.5 transition-all">
                  View All Services
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </Link>
              </div>
            </div>
          </div>

          <Link to="/network" className={`nav-link ${isActive('/network') ? 'active' : ''}`}>Network</Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'active' : ''}`}>Contact</Link>

          <Link to="/contact"
            className="ml-2 bg-[#E8541A] text-white text-sm font-bold px-6 py-2.5 rounded-full hover:bg-[#c9440f] hover:shadow-lg hover:shadow-[#E8541A]/30 hover:-translate-y-0.5"
            style={{ transition: 'all 0.2s' }}>
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button className="lg:hidden p-2 rounded-lg" onClick={() => setMobileOpen(o => !o)} aria-label="Menu">
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 bg-gray-800 transition-all ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-gray-800 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-gray-800 transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100 overflow-hidden">
            <div className="px-6 py-4 space-y-1">
              {([['/', 'Home'], ['/about', 'About Us'], ['/network', 'Network'], ['/contact', 'Contact']] as [string, string][]).map(([path, label]) => (
                <Link key={path} to={path} onClick={() => setMobileOpen(false)}
                  className={`block py-2.5 px-3 rounded-lg text-sm font-semibold transition-colors ${isActive(path) ? 'text-[#E8541A] bg-orange-50' : 'text-gray-700 hover:text-[#E8541A] hover:bg-gray-50'}`}>
                  {label}
                </Link>
              ))}
              <button onClick={() => setMobileServicesOpen(o => !o)}
                className="w-full flex items-center justify-between py-2.5 px-3 rounded-lg text-sm font-semibold text-gray-700 hover:text-[#E8541A] hover:bg-gray-50 transition-colors">
                Services
                <svg className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {mobileServicesOpen && (
                <div className="pl-4 space-y-0.5">
                  {serviceCategories.map(cat => (
                    <div key={cat.title} className="mb-2">
                      <div className="text-xs font-bold text-gray-400 uppercase tracking-wide px-3 py-1">{cat.icon} {cat.title}</div>
                      {cat.items.map(item => (
                        <Link key={item} to="/services" onClick={() => setMobileOpen(false)}
                          className="block py-1.5 px-3 text-sm text-gray-600 hover:text-[#E8541A] rounded-lg">
                          {item}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
              <div className="pt-2">
                <Link to="/contact" onClick={() => setMobileOpen(false)}
                  className="block text-center bg-[#E8541A] text-white py-3 rounded-xl font-bold text-sm hover:bg-[#c9440f] transition-colors">
                  Get a Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
