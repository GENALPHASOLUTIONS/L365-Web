import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Ship, Plane, Package, Truck, FileCheck, Globe, Warehouse, BarChart3, ArrowLeftRight, Layers } from 'lucide-react'

const serviceItems = [
  { cat: 'Ocean & Air',    items: [{ icon: Ship,         label: 'FCL / LCL Sea Freight' }, { icon: Plane,       label: 'Air Freight' },         { icon: ArrowLeftRight, label: 'Cross-Trade & Transshipment' }] },
  { cat: 'Land & Customs', items: [{ icon: Truck,        label: 'Land Transport' },         { icon: FileCheck,   label: 'Customs Brokerage' },   { icon: Package,        label: 'Project Cargo' }] },
  { cat: 'Supply Chain',   items: [{ icon: Warehouse,    label: 'Warehousing' },            { icon: Layers,      label: '3PL / 4PL Solutions' }, { icon: BarChart3,      label: 'Supply Chain Consulting' }] },
  { cat: 'Value Added',    items: [{ icon: Globe,        label: 'Global Trade Intel' },     { icon: Package,     label: 'Packing & Labelling' }, { icon: FileCheck,      label: 'Dangerous Goods' }] },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [svcOpen, setSvcOpen]       = useState(false)
  const location = useLocation()
  const isHome   = location.pathname === '/'

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', h); h()
    return () => window.removeEventListener('scroll', h)
  }, [])

  useEffect(() => { setMobileOpen(false); setSvcOpen(false) }, [location.pathname])

  const solid = !isHome || scrolled
  const navBg = solid ? 'bg-white shadow-[0_2px_20px_rgba(13,27,42,0.10)]' : 'bg-transparent'
  const lc    = solid ? 'text-[#1a2535]' : 'text-white'
  const logo  = solid ? '' : 'bg-white/90 rounded-xl px-3 py-1.5 shadow-md'

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-[34px] left-0 right-0 z-50 transition-all duration-300 ${navBg} ${solid ? 'py-3' : 'py-4'}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <div className={`transition-all duration-300 ${logo}`}>
            <img src="/l365-logo.png" alt="Logistics 365" className="h-10 md:h-12 w-auto object-contain" />
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {(['/', '/about', '/services', '/network', '/contact'] as const).map((path, i) => {
            const label = ['Home', 'About', 'Services', 'Network', 'Contact'][i]
            if (path === '/services') return (
              <div key={path} className="mega-trigger relative flex items-center gap-1 cursor-pointer">
                <span className={`nav-link text-sm font-semibold ${lc} flex items-center gap-1`}>
                  Services <ChevronDown size={14} />
                </span>
                <div className="mega-dropdown">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                    {serviceItems.map(cat => (
                      <div key={cat.cat}>
                        <div className="svc-cat">{cat.cat}</div>
                        {cat.items.map(item => (
                          <Link key={item.label} to="/services" className="svc-item">
                            <item.icon size={14} style={{ color: 'var(--orange)' }} />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100 flex gap-3">
                    <Link to="/services" className="flex-1 text-center py-2.5 rounded-lg text-xs font-bold text-white" style={{ background: 'var(--orange)' }}>All Services</Link>
                    <Link to="/contact"  className="flex-1 text-center py-2.5 rounded-lg text-xs font-bold border" style={{ borderColor: 'var(--teal)', color: 'var(--teal)' }}>Get a Quote</Link>
                  </div>
                </div>
              </div>
            )
            return (
              <Link key={path} to={path}
                className={`nav-link text-sm font-semibold transition-colors ${lc} ${location.pathname === path ? 'active' : ''}`}>
                {label}
              </Link>
            )
          })}
          <Link to="/contact"
            className="glow-btn ml-2 px-5 py-2.5 rounded-full text-sm font-bold text-white"
            style={{ background: 'var(--orange)' }}>
            Get a Quote
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button className={`md:hidden ${lc}`} onClick={() => setMobileOpen(v => !v)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden">
            <div className="px-6 py-4 flex flex-col gap-4">
              {[['/', 'Home'], ['/about', 'About'], ['/network', 'Network'], ['/contact', 'Contact']].map(([path, label]) => (
                <Link key={path} to={path} className="text-[#1a2535] font-semibold">{label}</Link>
              ))}
              <button onClick={() => setSvcOpen(v => !v)} className="flex items-center justify-between text-[#1a2535] font-semibold">
                Services <ChevronDown size={16} className={`transition-transform ${svcOpen ? 'rotate-180' : ''}`} />
              </button>
              {svcOpen && (
                <div className="pl-3 flex flex-col gap-2 border-l-2" style={{ borderColor: 'var(--orange)' }}>
                  {serviceItems.flatMap(cat => cat.items).map(item => (
                    <Link key={item.label} to="/services" className="text-sm text-gray-600 flex items-center gap-2">
                      <item.icon size={13} style={{ color: 'var(--orange)' }} /> {item.label}
                    </Link>
                  ))}
                </div>
              )}
              <Link to="/contact" className="mt-2 text-center py-3 rounded-full text-white font-bold" style={{ background: 'var(--orange)' }}>Get a Quote</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
