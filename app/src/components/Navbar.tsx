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

function OrbitLogo() {
  return (
    <div className="relative flex items-center">
      <div className="relative">
        <img src="/logo.png" alt="Logistics 365" className="h-20 w-auto relative z-10" style={{ minWidth: '200px' }} />
        {/* Orbit ring 1 */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ transform: 'translateZ(0)' }}
        >
          <div
            style={{
              width: '110%',
              height: '110%',
              border: '1.5px solid rgba(232, 84, 26, 0.25)',
              borderRadius: '50%',
              animation: 'orbit1 4s linear infinite',
              transformStyle: 'preserve-3d',
            }}
          />
        </div>
        {/* Orbit ring 2 */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none"
          style={{ transform: 'translateZ(0)' }}
        >
          <div
            style={{
              width: '130%',
              height: '130%',
              border: '1px solid rgba(14, 155, 155, 0.2)',
              borderRadius: '50%',
              animation: 'orbit2 6s linear infinite',
              transformStyle: 'preserve-3d',
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <style>{`
        @keyframes orbit1 {
          0% { transform: rotateX(70deg) rotateZ(0deg); }
          100% { transform: rotateX(70deg) rotateZ(360deg); }
        }
        @keyframes orbit2 {
          0% { transform: rotateX(60deg) rotateY(20deg) rotateZ(360deg); }
          100% { transform: rotateX(60deg) rotateY(20deg) rotateZ(0deg); }
        }
      `}</style>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/95 backdrop-blur-sm py-0'}`}>
        <div className="wrap flex items-center justify-between h-28">
          <Link to="/" className="flex items-center">
            <OrbitLogo />
          </Link>
          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`text-sm font-semibold tracking-wide transition-colors ${pathname === l.to ? 'text-[#E8541A]' : 'text-gray-600 hover:text-[#E8541A]'}`}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" className="bg-[#E8541A] text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-[#c9440f] transition-all hover:shadow-lg hover:shadow-[#E8541A]/20">
              Get a Quote
            </Link>
          </div>
          {/* Mobile hamburger */}
          <button className="md:hidden p-2 text-gray-700" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="w-6 flex flex-col gap-1.5">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-0.5 bg-current transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </div>
          </button>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white border-t border-gray-100 overflow-hidden">
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
    </>
  )
}
