import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Network', to: '/network' },
  { label: 'Contact', to: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const solid = scrolled || !isHome

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${solid ? 'bg-white shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.png" alt="Logistics 365" className="h-12 w-auto" />
        </Link>
        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <Link
              key={l.to}
              to={l.to}
              className={`font-semibold text-sm tracking-wide transition-colors ${pathname === l.to ? 'text-[#E8541A]' : solid ? 'text-gray-700 hover:text-[#E8541A]' : 'text-white hover:text-[#E8541A]'}`}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="bg-[#E8541A] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#c9440f] transition-colors">
            Get a Quote
          </Link>
        </div>
        {/* Mobile hamburger */}
        <button className={`md:hidden p-2 ${solid ? 'text-gray-800' : 'text-white'}`} onClick={() => setMenuOpen(!menuOpen)}>
          <div className="w-6 flex flex-col gap-1.5">
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 bg-current transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white shadow-xl overflow-hidden">
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(l => (
                <Link key={l.to} to={l.to} onClick={() => setMenuOpen(false)} className={`font-semibold text-sm ${pathname === l.to ? 'text-[#E8541A]' : 'text-gray-700'}`}>{l.label}</Link>
              ))}
              <Link to="/contact" onClick={() => setMenuOpen(false)} className="bg-[#E8541A] text-white px-5 py-2.5 rounded-full text-sm font-bold text-center">Get a Quote</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
