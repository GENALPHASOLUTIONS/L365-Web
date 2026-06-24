import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock, Ship, Globe } from 'lucide-react'

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  )
}

const offices = [
  { city: 'Colombo', country: 'Sri Lanka (HQ)', flag: '🇱🇰', accent: '#E8541A', addr: '06th Floor, Iceland Business Centre, Colombo 03', phone: '+94 11 530 0250', email: 'info@log-365.com' },
  { city: 'Dubai',     country: 'UAE',       flag: '🇦🇪', accent: '#0E9B9B', addr: 'Dubai, United Arab Emirates', phone: '', email: '' },
  { city: 'Singapore', country: 'Singapore', flag: '🇸🇬', accent: '#7BC14A', addr: 'Singapore — Asia Pacific Hub',  phone: '', email: '' },
]

const corridors = [
  { from: 'Colombo', to: 'Dubai',      days: '10–14',  mode: 'Sea' },
  { from: 'Colombo', to: 'Singapore',  days: '3–5',    mode: 'Sea' },
  { from: 'Colombo', to: 'Shanghai',   days: '18–22',  mode: 'Sea' },
  { from: 'Colombo', to: 'Rotterdam',  days: '24–28',  mode: 'Sea' },
  { from: 'Colombo', to: 'Los Angeles',days: '20–25',  mode: 'Sea' },
  { from: 'Colombo', to: 'Mumbai',     days: '3–5',    mode: 'Sea' },
]

const partners = [
  { name: 'Maersk Line',         cat: 'Ocean Carrier' },
  { name: 'MSC',                 cat: 'Ocean Carrier' },
  { name: 'CMA CGM',             cat: 'Ocean Carrier' },
  { name: 'Emirates SkyCargo',   cat: 'Air Carrier' },
  { name: 'SriLankan Cargo',     cat: 'Air Carrier' },
  { name: 'Qatar Airways Cargo', cat: 'Air Carrier' },
  { name: 'WCA Network',         cat: 'Agent Network' },
  { name: 'SLAFFA',              cat: 'Industry Body' },
  { name: 'FIATA',               cat: 'Industry Body' },
]

const catColor: Record<string, string> = {
  'Ocean Carrier': '#E8541A',
  'Air Carrier':   '#0E9B9B',
  'Agent Network': '#7BC14A',
  'Industry Body': '#6B7280',
}

export default function Network() {
  return (
    <div style={{ background: '#fff' }}>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(160deg, #0D1B2A 0%, #1a2f44 55%, #0E9B9B 150%)', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '-5%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,155,155,0.35) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge badge-teal" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>150+ Countries</span>
            <h1 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#fff', lineHeight: 1.08, marginBottom: '1.25rem', maxWidth: 580 }}>
              A Truly Global<br /><span style={{ color: '#E8541A' }}>Trade Network</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', maxWidth: 500, lineHeight: 1.7 }}>
              Anchored at the Port of Colombo — one of South Asia's premier transshipment hubs — we connect your cargo to the world on every major trade lane.
            </p>
          </motion.div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(to bottom, transparent, #fff)', pointerEvents: 'none' }} />
      </section>

      {/* ── Network stats ─────────────────────────────────── */}
      <section style={{ background: '#F9FAFB', padding: '3rem 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: '#E5E7EB', borderRadius: 12, overflow: 'hidden' }}>
            {[{ v: '150+', l: 'Countries' }, { v: '500+', l: 'Partners' }, { v: '6', l: 'Trade Lanes' }, { v: '24/7', l: 'Operations' }].map((s, i) => (
              <Reveal key={s.l} delay={i * 0.08}>
                <div style={{ background: '#fff', padding: '2rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: '2.25rem', color: i % 2 === 0 ? '#E8541A' : '#0E9B9B' }}>{s.v}</div>
                  <div style={{ fontSize: '.78rem', color: '#9CA3AF', marginTop: '.4rem', fontWeight: 500 }}>{s.l}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SVG Trade map ─────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="wrap">
          <Reveal style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <span className="badge badge-orange" style={{ marginBottom: '.75rem', display: 'inline-flex' }}>Coverage</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontSize: 'clamp(1.6rem,3.5vw,2.25rem)', color: '#111827' }}>Trade Lane Map</h2>
          </Reveal>

          <div style={{ background: '#0D1B2A', borderRadius: 16, padding: '2rem', overflow: 'hidden' }}>
            <svg viewBox="0 0 800 380" style={{ width: '100%', display: 'block' }}>
              {/* Grid lines */}
              {[80,160,240,320,400,480,560,640,720].map(x => <line key={x} x1={x} y1="0" x2={x} y2="380" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />)}
              {[76,152,228,304].map(y => <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />)}
              <line x1="0" y1="190" x2="800" y2="190" stroke="rgba(255,255,255,0.07)" strokeWidth="1" strokeDasharray="4 4" />

              {/* Route lines from Colombo (577,175) */}
              {[
                [577,175, 510,148],   // Dubai
                [577,175, 623,190],   // Singapore
                [577,175, 660,138],   // Shanghai
                [577,175, 342,95],    // Rotterdam
                [577,175, 85,136],    // LA
                [577,175, 558,155],   // Mumbai
              ].map(([x1,y1,x2,y2], i) => (
                <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="rgba(232,84,26,0.45)" strokeWidth="1.5" strokeDasharray="5 3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.4, delay: 0.3 + i * 0.18 }} />
              ))}

              {/* Nodes */}
              {[
                { x: 577, y: 175, label: 'Colombo',     color: '#E8541A', r: 7,  main: true },
                { x: 510, y: 148, label: 'Dubai',        color: '#0E9B9B', r: 5,  main: false },
                { x: 623, y: 190, label: 'Singapore',    color: '#7BC14A', r: 5,  main: false },
                { x: 660, y: 138, label: 'Shanghai',     color: 'rgba(255,255,255,0.5)', r: 4, main: false },
                { x: 342, y: 95,  label: 'Rotterdam',    color: 'rgba(255,255,255,0.5)', r: 4, main: false },
                { x: 85,  y: 136, label: 'Los Angeles',  color: 'rgba(255,255,255,0.5)', r: 4, main: false },
                { x: 558, y: 155, label: 'Mumbai',       color: 'rgba(255,255,255,0.5)', r: 4, main: false },
              ].map(n => (
                <g key={n.label}>
                  {n.main && <circle cx={n.x} cy={n.y} r="18" fill={n.color} opacity="0.12" />}
                  <circle cx={n.x} cy={n.y} r={n.r} fill={n.color} />
                  <text x={n.x} y={n.y - (n.r + 5)} textAnchor="middle" fill={n.color} fontSize={n.main ? "10" : "8"} fontWeight="600" fontFamily="Outfit, sans-serif">{n.label}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* ── Office cards ──────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#F9FAFB' }}>
        <div className="wrap">
          <Reveal style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <span className="badge badge-green" style={{ marginBottom: '.75rem', display: 'inline-flex' }}>Our Presence</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontSize: 'clamp(1.6rem,3.5vw,2.25rem)', color: '#111827' }}>Global Offices</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
            {offices.map((o, i) => (
              <Reveal key={o.city} delay={i * 0.1}>
                <div className="card-l365" style={{ padding: '2rem', borderTop: `4px solid ${o.accent}` }}>
                  <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{o.flag}</div>
                  <h3 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 800, fontSize: '1.25rem', color: '#111827', marginBottom: '.25rem' }}>{o.city}</h3>
                  <p style={{ fontSize: '.72rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: o.accent, marginBottom: '1.25rem' }}>{o.country}</p>
                  <div style={{ display: 'flex', gap: '.625rem', alignItems: 'flex-start', marginBottom: '.75rem' }}>
                    <MapPin size={13} style={{ color: o.accent, marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: '.82rem', color: '#6B7280', lineHeight: 1.5 }}>{o.addr}</span>
                  </div>
                  {o.phone && <p style={{ fontSize: '.82rem', color: '#6B7280', marginBottom: '.375rem' }}>📞 {o.phone}</p>}
                  {o.email && <p style={{ fontSize: '.82rem', color: '#6B7280' }}>✉ {o.email}</p>}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trade corridors ───────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="wrap">
          <Reveal style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <span className="badge badge-orange" style={{ marginBottom: '.75rem', display: 'inline-flex' }}>Key Routes</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontSize: 'clamp(1.6rem,3.5vw,2.25rem)', color: '#111827' }}>Major Trade Corridors</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1rem' }}>
            {corridors.map((c, i) => (
              <Reveal key={c.to} delay={i * 0.06}>
                <div className="card-l365" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.5rem' }}>
                      <span style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '.95rem', color: '#111827' }}>{c.from}</span>
                      <span style={{ color: '#D1D5DB', fontSize: '1rem' }}>→</span>
                      <span style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '.95rem', color: '#E8541A' }}>{c.to}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                      <span style={{ fontSize: '.75rem', color: '#9CA3AF', display: 'flex', alignItems: 'center', gap: '.3rem' }}>
                        <Clock size={10} /> {c.days} days
                      </span>
                      <span style={{ fontSize: '.72rem', fontWeight: 700, padding: '.2rem .625rem', borderRadius: 4, background: 'rgba(14,155,155,0.1)', color: '#0E9B9B' }}>{c.mode}</span>
                    </div>
                  </div>
                  <Ship size={26} style={{ color: '#E8541A', opacity: 0.3 }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Partners ──────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#F9FAFB' }}>
        <div className="wrap">
          <Reveal style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <span className="badge badge-teal" style={{ marginBottom: '.75rem', display: 'inline-flex' }}>Our Network</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontSize: 'clamp(1.6rem,3.5vw,2.25rem)', color: '#111827' }}>Carrier & Agent Partners</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(220px,1fr))', gap: '1rem' }}>
            {partners.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.05}>
                <div className="card-l365" style={{ padding: '1.25rem 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '.9rem', color: '#111827' }}>{p.name}</div>
                    <div style={{ fontSize: '.72rem', marginTop: '.25rem', color: catColor[p.cat] || '#6B7280', fontWeight: 600 }}>{p.cat}</div>
                  </div>
                  <Globe size={15} style={{ color: '#D1D5DB', flexShrink: 0 }} />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section style={{ background: '#0E9B9B', padding: '4rem 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(1.6rem,3.5vw,2.25rem)', color: '#fff', marginBottom: '1rem' }}>
              Reach Any Destination
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: 420, margin: '0 auto 2rem' }}>
              Our network spans 150+ countries. Tell us where you need to go.
            </p>
            <Link to="/contact" className="btn" style={{ background: '#fff', color: '#0E9B9B' }}>
              Plan a Shipment <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
