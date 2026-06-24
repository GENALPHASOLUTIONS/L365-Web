import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Phone, Mail, Ship, Plane, Globe, CheckCircle } from 'lucide-react'

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
  {
    city: 'Colombo', country: 'Sri Lanka', flag: '🇱🇰', role: 'Head Office', accent: '#E8541A',
    addr: '06th Floor, Iceland Business Centre, Colombo 03',
    phone: '+94 11 530 0250', email: 'info@log-365.com',
    tags: ['Operations', 'Customs', 'Management'],
  },
  {
    city: 'Dubai', country: 'United Arab Emirates', flag: '🇦🇪', role: 'Regional Partner', accent: '#0E9B9B',
    addr: 'Business Bay, Dubai, UAE',
    phone: '+971 4 000 0000', email: 'dubai@log-365.com',
    tags: ['Sea Freight', 'Air Freight', 'Middle East'],
  },
  {
    city: 'Singapore', country: 'Singapore', flag: '🇸🇬', role: 'ASEAN Hub', accent: '#7BC14A',
    addr: 'Raffles Place, Singapore',
    phone: '+65 6000 0000', email: 'sg@log-365.com',
    tags: ['Transshipment', 'ASEAN', 'Project Cargo'],
  },
]

const networkStats = [
  { num: '150+', label: 'Countries', icon: Globe },
  { num: '50+',  label: 'Agent Partners', icon: CheckCircle },
  { num: '12',   label: 'Trade Lanes', icon: Ship },
  { num: '24/7', label: '365 Ops', icon: Plane },
]

const corridors = [
  { from: '🇱🇰 Sri Lanka', to: '🇬🇧 UK & Europe',    mode: 'Sea + Air', accent: '#E8541A', desc: 'FCL/LCL and priority air from Colombo to all major European ports and airports.' },
  { from: '🇱🇰 Sri Lanka', to: '🇺🇸 North America',   mode: 'Sea Freight', accent: '#0E9B9B', desc: 'Westbound services via transshipment hubs to East and West Coast USA/Canada.' },
  { from: '🇱🇰 Sri Lanka', to: '🇦🇪 Middle East',     mode: 'Sea + Air', accent: '#7BC14A', desc: 'Short-sea and air connections to UAE, Saudi, Qatar and Oman with weekly sailings.' },
  { from: '🇱🇰 Sri Lanka', to: '🌏 South & East Asia', mode: 'All Modes', accent: '#E8541A', desc: 'Strong intra-Asia coverage including India, China, Japan, Singapore and Thailand.' },
  { from: '🇱🇰 Sri Lanka', to: '🌍 Africa',            mode: 'Sea Freight', accent: '#0E9B9B', desc: 'Services to East and West Africa via Colombo Port transshipment connections.' },
  { from: '🇱🇰 Sri Lanka', to: '🌎 South America',    mode: 'Sea Freight', accent: '#7BC14A', desc: 'South American coverage with competitive rates and reliable transit times.' },
]

const partners = [
  'Maersk Line', 'MSC', 'CMA CGM', 'Hapag-Lloyd',
  'Emirates SkyCargo', 'Qatar Airways Cargo', 'Singapore Airlines Cargo', 'SriLankan Cargo',
  'DHL Express', 'FedEx',
]

export default function Network() {
  return (
    <div style={{ background: '#fff' }}>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(160deg, #0D1B2A 0%, #1a2f44 55%, #0E9B9B 150%)', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-5%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,84,26,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />
        {/* Decorative globe rings */}
        <div style={{ position: 'absolute', right: '6%', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none' }}>
          {[240, 320, 410].map((s, i) => (
            <div key={i} style={{ position: 'absolute', width: s, height: s, borderRadius: '50%', border: '1px solid rgba(255,255,255,0.05)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }} />
          ))}
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: '4rem', opacity: 0.07 }}>🌐</div>
        </div>

        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge badge-orange" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>Global Network</span>
            <h1 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#fff', lineHeight: 1.08, marginBottom: '1.25rem', maxWidth: 580 }}>
              150+ Countries.<br /><span style={{ color: '#E8541A' }}>One Point of Contact.</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', maxWidth: 500, lineHeight: 1.7 }}>
              Our global agent network connects Colombo to every major trade port and airport on earth — with local expertise at every node.
            </p>
          </motion.div>

          {/* Stats strip */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', marginTop: '3.5rem', background: 'rgba(255,255,255,0.08)', borderRadius: 14, overflow: 'hidden', maxWidth: 640 }}>
            {networkStats.map(s => (
              <div key={s.num} style={{ padding: '1.5rem 1rem', background: 'rgba(255,255,255,0.04)', textAlign: 'center' }}>
                <s.icon size={20} style={{ color: '#E8541A', marginBottom: '.625rem' }} />
                <div style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: '1.75rem', color: '#fff', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,0.4)', marginTop: '.35rem', fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(to bottom, transparent, #fff)', pointerEvents: 'none' }} />
      </section>

      {/* ── Trade Lane SVG Map ────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="wrap">
          <Reveal style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
            <span className="badge badge-teal" style={{ marginBottom: '.75rem', display: 'inline-flex' }}>Coverage</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem,4vw,2.75rem)', color: '#111827' }}>
              Our <span style={{ color: '#E8541A' }}>Trade Lane Map</span>
            </h2>
          </Reveal>

          <Reveal>
            <div style={{ background: '#0D1B2A', borderRadius: 20, padding: '2rem', overflow: 'hidden' }}>
              <svg viewBox="0 0 860 400" style={{ width: '100%', display: 'block' }}>
                {/* Grid */}
                {[86,172,258,344,430,516,602,688,774].map(x => (
                  <line key={x} x1={x} y1="0" x2={x} y2="400" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                ))}
                {[80,160,240,320].map(y => (
                  <line key={y} x1="0" y1={y} x2="860" y2={y} stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                ))}
                {/* Equator */}
                <line x1="0" y1="200" x2="860" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="5 5" />

                {/* Trade lane arcs — from Colombo (620,185) */}
                {[
                  { x2: 545, y2: 155, color: '#E8541A' }, // Dubai
                  { x2: 670, y2: 200, color: '#0E9B9B' }, // Singapore
                  { x2: 715, y2: 145, color: '#7BC14A' }, // Shanghai
                  { x2: 360, y2: 100, color: '#E8541A' }, // Rotterdam
                  { x2: 88,  y2: 145, color: '#0E9B9B' }, // LA
                  { x2: 600, y2: 162, color: '#7BC14A' }, // Mumbai
                ].map((r, i) => (
                  <motion.line key={i}
                    x1="620" y1="185" x2={r.x2} y2={r.y2}
                    stroke={r.color} strokeWidth="1.5" strokeDasharray="5 4" opacity="0.55"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.55 }}
                    transition={{ duration: 1.2, delay: 0.4 + i * 0.15 }}
                  />
                ))}

                {/* Nodes */}
                {[
                  { x: 620, y: 185, label: 'Colombo',    color: '#E8541A', r: 8, main: true },
                  { x: 545, y: 155, label: 'Dubai',       color: '#0E9B9B', r: 5 },
                  { x: 670, y: 200, label: 'Singapore',   color: '#7BC14A', r: 5 },
                  { x: 715, y: 145, label: 'Shanghai',    color: 'rgba(255,255,255,0.6)', r: 4 },
                  { x: 360, y: 100, label: 'Rotterdam',   color: 'rgba(255,255,255,0.6)', r: 4 },
                  { x: 88,  y: 145, label: 'Los Angeles', color: 'rgba(255,255,255,0.6)', r: 4 },
                  { x: 600, y: 162, label: 'Mumbai',      color: 'rgba(255,255,255,0.6)', r: 4 },
                ].map(n => (
                  <g key={n.label}>
                    {n.main && (
                      <>
                        <circle cx={n.x} cy={n.y} r="22" fill="#E8541A" opacity="0.1" />
                        <circle cx={n.x} cy={n.y} r="14" fill="#E8541A" opacity="0.15" />
                      </>
                    )}
                    <circle cx={n.x} cy={n.y} r={n.r} fill={n.color} />
                    <text x={n.x} y={n.y - (n.r + 6)} textAnchor="middle" fill={n.color}
                      fontSize={n.main ? '11' : '8'} fontWeight={n.main ? '700' : '600'}
                      fontFamily="Outfit, sans-serif">
                      {n.label}
                    </text>
                  </g>
                ))}
              </svg>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Offices ───────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#F9FAFB' }}>
        <div className="wrap">
          <Reveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-orange" style={{ marginBottom: '.875rem', display: 'inline-flex' }}>Presence</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem,4vw,2.75rem)', color: '#111827' }}>
              Our <span style={{ color: '#E8541A' }}>Offices</span>
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.25rem' }}>
            {offices.map((o, i) => (
              <Reveal key={o.city} delay={i * 0.09}>
                <div style={{ borderRadius: 18, overflow: 'hidden', border: `1.5px solid ${o.accent}22`, background: '#fff', transition: 'transform .25s, box-shadow .25s' }}
                  onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.transform = 'translateY(-6px)'; d.style.boxShadow = `0 20px 50px ${o.accent}20` }}
                  onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.transform = 'none'; d.style.boxShadow = 'none' }}>
                  {/* Header */}
                  <div style={{ background: o.accent, padding: '1.75rem', display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ fontSize: '2.5rem', marginBottom: '.5rem' }}>{o.flag}</div>
                      <h3 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 800, fontSize: '1.4rem', color: '#fff' }}>{o.city}</h3>
                      <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '.8rem' }}>{o.country}</p>
                    </div>
                    <span style={{ background: 'rgba(255,255,255,0.2)', color: '#fff', padding: '4px 10px', borderRadius: 20, fontSize: '.65rem', fontWeight: 700, whiteSpace: 'nowrap' }}>{o.role}</span>
                  </div>
                  {/* Body */}
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ display: 'flex', gap: '.75rem', marginBottom: '.875rem', alignItems: 'flex-start' }}>
                      <MapPin size={13} style={{ color: o.accent, flexShrink: 0, marginTop: 2 }} />
                      <span style={{ fontSize: '.8rem', color: '#6B7280', lineHeight: 1.5 }}>{o.addr}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '.75rem', marginBottom: '.625rem', alignItems: 'center' }}>
                      <Phone size={13} style={{ color: o.accent, flexShrink: 0 }} />
                      <a href={`tel:${o.phone.replace(/\s/g,'')}`} style={{ fontSize: '.8rem', color: '#374151', textDecoration: 'none', fontWeight: 500 }}>{o.phone}</a>
                    </div>
                    <div style={{ display: 'flex', gap: '.75rem', marginBottom: '1.25rem', alignItems: 'center' }}>
                      <Mail size={13} style={{ color: o.accent, flexShrink: 0 }} />
                      <a href={`mailto:${o.email}`} style={{ fontSize: '.8rem', color: '#374151', textDecoration: 'none', fontWeight: 500 }}>{o.email}</a>
                    </div>
                    <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
                      {o.tags.map(t => (
                        <span key={t} style={{ background: `${o.accent}12`, color: o.accent, padding: '3px 10px', borderRadius: 20, fontSize: '.65rem', fontWeight: 700 }}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trade Corridors ───────────────────────────────── */}
      <section style={{ padding: '6rem 0', background: '#0D1B2A', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,155,155,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-teal" style={{ marginBottom: '.875rem', display: 'inline-flex' }}>Trade Lanes</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem,4vw,2.75rem)', color: '#fff' }}>
              Key Trade <span style={{ color: '#E8541A' }}>Corridors</span>
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '1rem' }}>
            {corridors.map((c, i) => (
              <Reveal key={c.to} delay={i * 0.07}>
                <div style={{ background: 'rgba(255,255,255,0.04)', border: `1px solid ${c.accent}30`, borderRadius: 14, padding: '1.5rem', transition: 'background .2s, border-color .2s' }}
                  onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.background = `${c.accent}10`; d.style.borderColor = c.accent }}
                  onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.background = 'rgba(255,255,255,0.04)'; d.style.borderColor = `${c.accent}30` }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.75rem', marginBottom: '.875rem', flexWrap: 'wrap' }}>
                    <span style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 600, fontSize: '.88rem' }}>{c.from}</span>
                    <div style={{ height: 1, flex: 1, minWidth: 24, background: `linear-gradient(90deg, ${c.accent}, transparent)` }} />
                    <ArrowRight size={14} style={{ color: c.accent, flexShrink: 0 }} />
                    <span style={{ color: 'rgba(255,255,255,0.75)', fontWeight: 600, fontSize: '.88rem' }}>{c.to}</span>
                  </div>
                  <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6, marginBottom: '.875rem' }}>{c.desc}</p>
                  <span style={{ background: `${c.accent}20`, color: c.accent, padding: '3px 10px', borderRadius: 20, fontSize: '.65rem', fontWeight: 700 }}>{c.mode}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Carrier Partners ─────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="wrap">
          <Reveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-green" style={{ marginBottom: '.75rem', display: 'inline-flex' }}>Partners</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem,4vw,2.5rem)', color: '#111827' }}>
              Carrier <span style={{ color: '#0E9B9B' }}>Partners</span>
            </h2>
            <p style={{ color: '#6B7280', marginTop: '.75rem', maxWidth: 440, margin: '.75rem auto 0', lineHeight: 1.7 }}>
              World-leading ocean carriers and air cargo airlines — securing the best rates and space for your cargo.
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: '.875rem' }}>
            {partners.map((p, i) => (
              <Reveal key={p} delay={i * 0.04}>
                <div style={{ background: '#F9FAFB', border: '1.5px solid #E5E7EB', borderRadius: 12, padding: '1.25rem', textAlign: 'center', fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '.78rem', color: '#374151', transition: 'border-color .2s, color .2s, background .2s, box-shadow .2s' }}
                  onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = '#E8541A'; d.style.color = '#E8541A'; d.style.background = '#fff'; d.style.boxShadow = '0 8px 24px rgba(232,84,26,0.1)' }}
                  onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = '#E5E7EB'; d.style.color = '#374151'; d.style.background = '#F9FAFB'; d.style.boxShadow = 'none' }}>
                  {p}
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
              Ready to Ship Anywhere in the World?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: 420, margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Our global network is ready for your cargo — let's plan your next shipment.
            </p>
            <Link to="/contact" className="btn" style={{ background: '#fff', color: '#0E9B9B' }}>
              Get a Free Quote <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
