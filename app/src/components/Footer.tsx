import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail, Globe } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#0A1520' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="md:col-span-1">
            <img src="/l365-logo.png" alt="Logistics 365" className="h-12 w-auto mb-4 object-contain" />
            <p className="text-xs leading-relaxed mb-5" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Sri Lanka's premier freight forwarder. A subsidiary of CL Synergy Limited — 20+ years of global logistics excellence.
            </p>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#7BC14A' }} />
              <span className="text-xs font-semibold" style={{ color: '#7BC14A' }}>24 / 7 / 365 Operations</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#E8541A' }}>Quick Links</h4>
            <ul className="space-y-2.5">
              {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/network', 'Network'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}>
                  <Link to={to} className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#E8541A' }}>Services</h4>
            <ul className="space-y-2.5">
              {['Sea Freight', 'Air Freight', 'Customs Brokerage', 'Warehousing', '3PL / 4PL', 'Project Cargo', 'Cross-Trade'].map(s => (
                <li key={s}>
                  <Link to="/services" className="text-sm transition-colors hover:text-white" style={{ color: 'rgba(255,255,255,0.5)' }}>{s}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase mb-5" style={{ color: '#E8541A' }}>Contact</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 items-start">
                <MapPin size={14} style={{ color: '#E8541A', marginTop: 2, flexShrink: 0 }} />
                <span className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
                  06th Floor, Iceland Business Centre,<br />Colombo 03, Sri Lanka
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone size={14} style={{ color: '#0E9B9B', flexShrink: 0 }} />
                <a href="tel:+94115300250" className="text-xs hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>+94 11 530 0250</a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail size={14} style={{ color: '#7BC14A', flexShrink: 0 }} />
                <a href="mailto:info@log-365.com" className="text-xs hover:text-white transition-colors" style={{ color: 'rgba(255,255,255,0.5)' }}>info@log-365.com</a>
              </li>
              <li className="flex gap-3 items-center">
                <Globe size={14} style={{ color: '#E8541A', flexShrink: 0 }} />
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.5)' }}>www.log-365.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#070E17' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © {new Date().getFullYear()} Logistics 365 (Pvt) Ltd. All rights reserved. A member of the CL Synergy Group.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>SLAFFA Member · Licensed Customs Brokers</p>
        </div>
      </div>
    </footer>
  )
}
