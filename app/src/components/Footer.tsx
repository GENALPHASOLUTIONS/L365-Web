import { Link } from 'react-router-dom'
import { MapPin, Phone, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#0D1B2A' }}>
      {/* Top gradient strip */}
      <div className="divider-grad" />

      <div className="wrap" style={{ paddingTop: '3.5rem', paddingBottom: '3.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr 1fr 1fr', gap: '2.5rem' }}>

          {/* Brand */}
          <div>
            <img src="/logo.png" alt="Logistics 365" style={{ height: 46, width: 'auto', objectFit: 'contain', marginBottom: '1.25rem' }} />
            <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.7, marginBottom: '1.25rem' }}>
              Sri Lanka's premier freight forwarder. A subsidiary of CL Synergy Limited — serving global trade since 2004.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem' }}>
              <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: '#7BC14A', display: 'inline-block' }} />
              <span style={{ fontSize: '.72rem', color: '#7BC14A', fontWeight: 600 }}>24 / 7 / 365 Operations</span>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h5 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '.72rem', letterSpacing: '.1em', textTransform: 'uppercase', color: '#E8541A', marginBottom: '1.25rem' }}>Company</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.625rem' }}>
              {[['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/network', 'Network'], ['/contact', 'Contact']].map(([to, label]) => (
                <li key={to}><Link to={to} style={{ fontSize: '.82rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.45)'}>{label}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h5 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '.72rem', letterSpacing: '.1em', textTransform: 'uppercase', color: '#0E9B9B', marginBottom: '1.25rem' }}>Services</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.625rem' }}>
              {['Sea Freight','Air Freight','Customs Brokerage','Warehousing','3PL / 4PL','Project Cargo'].map(s => (
                <li key={s}><Link to="/services" style={{ fontSize: '.82rem', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.45)'}>{s}</Link></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h5 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '.72rem', letterSpacing: '.1em', textTransform: 'uppercase', color: '#7BC14A', marginBottom: '1.25rem' }}>Get in Touch</h5>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li style={{ display: 'flex', gap: '.75rem', alignItems: 'flex-start' }}>
                <MapPin size={13} style={{ color: '#E8541A', flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontSize: '.78rem', color: 'rgba(255,255,255,0.4)', lineHeight: 1.6 }}>06th Floor, Iceland Business Centre, Colombo 03</span>
              </li>
              <li style={{ display: 'flex', gap: '.75rem', alignItems: 'center' }}>
                <Phone size={13} style={{ color: '#0E9B9B', flexShrink: 0 }} />
                <a href="tel:+94115300250" style={{ fontSize: '.78rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)'}>+94 11 530 0250</a>
              </li>
              <li style={{ display: 'flex', gap: '.75rem', alignItems: 'center' }}>
                <Mail size={13} style={{ color: '#7BC14A', flexShrink: 0 }} />
                <a href="mailto:info@log-365.com" style={{ fontSize: '.78rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color .2s' }}
                  onMouseEnter={e => (e.currentTarget as HTMLAnchorElement).style.color = '#fff'}
                  onMouseLeave={e => (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.4)'}>info@log-365.com</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="wrap" style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '.5rem' }}>
          <p style={{ fontSize: '.72rem', color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} Logistics 365 (Pvt) Ltd. All rights reserved. A CL Synergy Group Company.
          </p>
          <p style={{ fontSize: '.72rem', color: 'rgba(255,255,255,0.2)' }}>SLAFFA Member · Licensed Customs Brokers</p>
        </div>
      </div>
    </footer>
  )
}
