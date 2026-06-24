import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, ChevronDown, Ship, Plane, Truck, FileCheck, Warehouse, Layers, Package, BarChart3, ArrowLeftRight } from 'lucide-react'

const svcGroups = [
  { cat: 'Ocean & Air',    items: [{ icon: Ship,          label: 'FCL / LCL Sea Freight' }, { icon: Plane,      label: 'Air Freight' },         { icon: ArrowLeftRight, label: 'Transshipment' }] },
  { cat: 'Land & Customs', items: [{ icon: Truck,         label: 'Land Transport' },         { icon: FileCheck,  label: 'Customs Brokerage' },   { icon: Package,        label: 'Project Cargo' }] },
  { cat: 'Supply Chain',   items: [{ icon: Warehouse,     label: 'Warehousing' },            { icon: Layers,     label: '3PL / 4PL Solutions' }, { icon: BarChart3,      label: 'Supply Chain Mgmt' }] },
]

const links = [
  { to: '/',         label: 'Home' },
  { to: '/about',    label: 'About' },
  { to: '/services', label: 'Services', mega: true },
  { to: '/network',  label: 'Network' },
  { to: '/contact',  label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled]     = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [svcOpen, setSvcOpen]       = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', h); h()
    return () => window.removeEventListener('scroll', h)
  }, [])
  useEffect(() => { setMobileOpen(false); setSvcOpen(false) }, [location.pathname])

  // transparent = over hero; solid = scrolled or not on home
  const transparent = isHome && !scrolled
  const linkColor   = transparent ? '#fff' : '#111827'
  const navBg         = transparent ? 'rgba(0,0,0,0)' : 'rgba(255,255,255,0.88)'
  const navBackdrop   = transparent ? 'none' : 'blur(22px) saturate(180%)'
  const navShadow     = transparent ? 'none' : '0 1px 0 rgba(229,231,235,0.7), 0 4px 24px rgba(0,0,0,0.07)'

  return (
    <motion.header
      initial={{ y: -72, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45 }}
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        background: navBg, boxShadow: navShadow,
        backdropFilter: navBackdrop, WebkitBackdropFilter: navBackdrop,
        transition: 'background .35s, box-shadow .35s, backdrop-filter .35s' }}
    >
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 2rem', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        {/* Logo — no white box; use drop-shadow for dark bg visibility */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: 'spring', stiffness: 320, damping: 20 }}
          >
            <img
              src="/logo.png"
              alt="Logistics 365"
              style={{
                height: 60, width: 'auto', objectFit: 'contain', display: 'block',
                filter: transparent
                  ? 'drop-shadow(0 0 12px rgba(255,255,255,0.6)) drop-shadow(0 2px 8px rgba(0,0,0,0.5))'
                  : 'none',
                transition: 'filter .3s',
              }}
            />
          </motion.div>
        </Link>

        {/* Desktop nav — all colours via inline style, no CSS class conflict */}
        <nav style={{ alignItems: 'center', gap: '2rem' }} className="hidden md:flex">
          {links.map(l => l.mega ? (
            <div key={l.to} className="mega-trigger" style={{ position: 'relative' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 4, cursor: 'pointer',
                fontFamily: "'DM Sans',system-ui,sans-serif", fontWeight: 500, fontSize: '.875rem',
                color: linkColor, transition: 'color .2s', position: 'relative' }}
                className="nav-link-hover">
                {l.label} <ChevronDown size={13} />
              </span>
              <div className="mega-dd">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0 1.5rem' }}>
                  {svcGroups.map(g => (
                    <div key={g.cat}>
                      <p style={{ fontSize: '.65rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: '#9CA3AF', marginBottom: '.5rem' }}>{g.cat}</p>
                      {g.items.map(item => (
                        <Link key={item.label} to="/services" className="mega-dd-item">
                          <item.icon size={13} style={{ color: 'var(--orange)', flexShrink: 0 }} /> {item.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '1.25rem', paddingTop: '1.25rem', borderTop: '1px solid #F3F4F6', display: 'flex', gap: '.75rem' }}>
                  <Link to="/services" className="btn btn-orange" style={{ flex: 1, justifyContent: 'center', padding: '.625rem 1rem' }}>All Services</Link>
                  <Link to="/contact"  className="btn btn-teal"   style={{ flex: 1, justifyContent: 'center', padding: '.625rem 1rem' }}>Get a Quote</Link>
                </div>
              </div>
            </div>
          ) : (
            <Link key={l.to} to={l.to}
              style={{ fontFamily: "'DM Sans',system-ui,sans-serif", fontWeight: 500, fontSize: '.875rem',
                color: location.pathname === l.to ? 'var(--orange)' : linkColor,
                textDecoration: 'none', position: 'relative', transition: 'color .2s' }}
              className="nav-underline">
              {l.label}
            </Link>
          ))}
          <Link to="/contact" className="btn btn-orange" style={{ padding: '.625rem 1.5rem', fontSize: '.82rem' }}>Get a Quote</Link>
        </nav>

        {/* Mobile toggle */}
        <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: linkColor }}
          className="md:hidden" onClick={() => setMobileOpen(v => !v)}>
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }}
            style={{ background: '#fff', borderTop: '1px solid #F3F4F6', overflow: 'hidden' }}>
            <div style={{ padding: '1.25rem 2rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {[['/', 'Home'], ['/about', 'About'], ['/network', 'Network'], ['/contact', 'Contact']].map(([to, label]) => (
                <Link key={to} to={to} style={{ color: '#111827', fontWeight: 600, fontSize: '.9rem', textDecoration: 'none' }}>{label}</Link>
              ))}
              <button onClick={() => setSvcOpen(v => !v)}
                style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#111827', fontWeight: 600, fontSize: '.9rem', background: 'none', border: 'none', padding: 0, cursor: 'pointer' }}>
                Services <ChevronDown size={15} style={{ transform: svcOpen ? 'rotate(180deg)' : 'none', transition: 'transform .2s' }} />
              </button>
              {svcOpen && (
                <div style={{ paddingLeft: '1rem', borderLeft: '3px solid var(--orange)', display: 'flex', flexDirection: 'column', gap: '.625rem' }}>
                  {svcGroups.flatMap(g => g.items).map(item => (
                    <Link key={item.label} to="/services" style={{ fontSize: '.8rem', color: '#6B7280', display: 'flex', alignItems: 'center', gap: '.5rem', textDecoration: 'none' }}>
                      <item.icon size={12} style={{ color: 'var(--orange)' }} /> {item.label}
                    </Link>
                  ))}
                </div>
              )}
              <Link to="/contact" className="btn btn-orange" style={{ textAlign: 'center', justifyContent: 'center', marginTop: '.5rem' }}>Get a Quote</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
