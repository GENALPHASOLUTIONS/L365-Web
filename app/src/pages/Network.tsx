import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { ArrowRight, MapPin, Clock, Ship, Globe } from 'lucide-react'

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      className={className}>
      {children}
    </motion.div>
  )
}

const offices = [
  { city: 'Colombo',   country: 'Sri Lanka (HQ)', flag: '🇱🇰', color: '#E8541A', desc: '06th Floor, Iceland Business Centre, Colombo 03', phone: '+94 11 530 0250', email: 'info@log-365.com' },
  { city: 'Dubai',     country: 'UAE',             flag: '🇦🇪', color: '#0E9B9B', desc: 'Dubai, United Arab Emirates', phone: '', email: '' },
  { city: 'Singapore', country: 'Singapore',       flag: '🇸🇬', color: '#7BC14A', desc: 'Singapore — Asia Trade Hub', phone: '', email: '' },
]

const corridors = [
  { from: 'Colombo', to: 'Dubai',     transit: '10–14 days', mode: 'Sea', icon: Ship },
  { from: 'Colombo', to: 'Singapore', transit: '3–5 days',   mode: 'Sea', icon: Ship },
  { from: 'Colombo', to: 'Shanghai',  transit: '18–22 days', mode: 'Sea', icon: Ship },
  { from: 'Colombo', to: 'Rotterdam', transit: '24–28 days', mode: 'Sea', icon: Ship },
  { from: 'Colombo', to: 'LA/LB',    transit: '20–25 days', mode: 'Sea', icon: Ship },
  { from: 'Colombo', to: 'Mumbai',    transit: '3–5 days',   mode: 'Sea', icon: Ship },
]

const partners = [
  { name: 'Maersk Line',        cat: 'Ocean Carrier' },
  { name: 'MSC',                cat: 'Ocean Carrier' },
  { name: 'CMA CGM',            cat: 'Ocean Carrier' },
  { name: 'Emirates SkyCargo',  cat: 'Air Carrier' },
  { name: 'Sri Lankan Cargo',   cat: 'Air Carrier' },
  { name: 'Qatar Airways Cargo',cat: 'Air Carrier' },
  { name: 'WCA Network',        cat: 'Agent Network' },
  { name: 'FIATA',              cat: 'Industry Body' },
  { name: 'SLAFFA',             cat: 'Industry Body' },
]

export default function Network() {
  return (
    <div style={{ background: '#F6F5F2' }}>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-40 pb-24 px-4"
        style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #152436 60%, #0D1B2A 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: '#0E9B9B' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ background: '#E8541A' }} />
        {/* Animated world grid lines */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)',
          backgroundSize: '60px 60px'
        }} />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(14,155,155,0.15)', color: '#0E9B9B' }}>
              150+ Countries
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.08] mb-6">
              A Truly Global<br /><span style={{ color: '#E8541A' }}>Trade Network</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Leveraging the strategic position of the Port of Colombo — one of South Asia's largest transshipment hubs — we connect your cargo to the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TRADE STATS ─────────────────────────────────────── */}
      <section style={{ background: '#0D1B2A' }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4">
          {[
            { v: '150+',   l: 'Countries Reached' },
            { v: '500+',   l: 'Shipping Partners' },
            { v: '6',      l: 'Major Trade Lanes' },
            { v: '24/7',   l: 'Port Operations' },
          ].map((s, i) => (
            <FadeUp key={s.l} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center py-8 px-4 border-r border-white/10 last:border-0">
                <div className="text-4xl font-extrabold" style={{ color: '#E8541A' }}>{s.v}</div>
                <div className="text-xs mt-2 font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.l}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── VISUAL WORLD MAP — SVG ───────────────────────────── */}
      <section className="py-20 px-4 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8541A' }}>Coverage</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3" style={{ color: '#0D1B2A' }}>Trade Lane Map</h2>
          </FadeUp>
          <div className="rounded-3xl overflow-hidden" style={{ background: '#0D1B2A', padding: '2rem' }}>
            <svg viewBox="0 0 800 400" className="w-full" style={{ maxHeight: '400px' }}>
              {/* World map simplified paths */}
              <rect width="800" height="400" fill="#0D1B2A" />
              {/* Grid */}
              {[80,160,240,320,400,480,560,640,720].map(x => <line key={x} x1={x} y1="0" x2={x} y2="400" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />)}
              {[80,160,240,320].map(y => <line key={y} x1="0" y1={y} x2="800" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />)}
              {/* Equator */}
              <line x1="0" y1="200" x2="800" y2="200" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="4 4" />

              {/* OFFICES — real positions mapped to 800x400 */}
              {/* Colombo: ~80°E 7°N → x≈577 y≈183 */}
              {/* Dubai: ~55°E 25°N → x≈511 y≈153 */}
              {/* Singapore: ~104°E 1°N → x≈620 y≈198 */}
              {/* Shanghai: ~121°E 31°N → x≈657 y≈145 */}
              {/* Rotterdam: ~4°E 52°N → x≈345 y≈101 */}
              {/* LA: ~118°W 34°N → x≈88 y≈142 */}
              {/* Mumbai: ~73°E 19°N → x≈561 y≈160 */}

              {/* Dashed route lines from Colombo */}
              {[
                [577,183, 511,153],
                [577,183, 620,198],
                [577,183, 657,145],
                [577,183, 345,101],
                [577,183, 88,142],
                [577,183, 561,160],
              ].map(([x1,y1,x2,y2], i) => (
                <motion.line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="rgba(232,84,26,0.5)" strokeWidth="1.5" strokeDasharray="6 3"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.5, delay: i * 0.2 }} />
              ))}

              {/* Office nodes */}
              {[
                { x: 577, y: 183, label: 'Colombo', color: '#E8541A', main: true },
                { x: 511, y: 153, label: 'Dubai',     color: '#0E9B9B', main: false },
                { x: 620, y: 198, label: 'Singapore', color: '#7BC14A', main: false },
                { x: 657, y: 145, label: 'Shanghai',  color: 'rgba(255,255,255,0.5)', main: false },
                { x: 345, y: 101, label: 'Rotterdam', color: 'rgba(255,255,255,0.5)', main: false },
                { x: 88,  y: 142, label: 'Los Angeles', color: 'rgba(255,255,255,0.5)', main: false },
                { x: 561, y: 160, label: 'Mumbai',    color: 'rgba(255,255,255,0.5)', main: false },
              ].map(n => (
                <g key={n.label}>
                  {n.main && <circle cx={n.x} cy={n.y} r="16" fill={n.color} opacity="0.15" />}
                  <circle cx={n.x} cy={n.y} r={n.main ? 6 : 4} fill={n.color} />
                  <text x={n.x} y={n.y - 10} textAnchor="middle" fill={n.color} fontSize={n.main ? "10" : "8"} fontWeight="600">{n.label}</text>
                </g>
              ))}
            </svg>
          </div>
        </div>
      </section>

      {/* ── OFFICES ─────────────────────────────────────────── */}
      <section className="py-20 px-4" style={{ background: '#F6F5F2' }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8541A' }}>Our Presence</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3" style={{ color: '#0D1B2A' }}>Global Offices</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {offices.map((o, i) => (
              <FadeUp key={o.city} delay={i * 0.1}>
                <div className="card p-8">
                  <div className="text-4xl mb-4">{o.flag}</div>
                  <div className="font-extrabold text-xl mb-1" style={{ color: '#0D1B2A' }}>{o.city}</div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: o.color }}>{o.country}</div>
                  <div className="flex items-start gap-2 text-sm text-slate-500 mb-2">
                    <MapPin size={14} style={{ color: o.color, marginTop: 2, flexShrink: 0 }} /> {o.desc}
                  </div>
                  {o.phone && <div className="text-sm text-slate-500 mb-1">📞 {o.phone}</div>}
                  {o.email && <div className="text-sm text-slate-500">✉️ {o.email}</div>}
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRADE CORRIDORS ─────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8541A' }}>Key Routes</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3" style={{ color: '#0D1B2A' }}>Major Trade Corridors</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {corridors.map((c, i) => (
              <FadeUp key={`${c.from}-${c.to}`} delay={i * 0.07}>
                <div className="card p-6 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-extrabold text-sm" style={{ color: '#0D1B2A' }}>{c.from}</span>
                      <span className="text-gray-300">→</span>
                      <span className="font-extrabold text-sm" style={{ color: '#E8541A' }}>{c.to}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-slate-500 flex items-center gap-1"><Clock size={10} /> {c.transit}</span>
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{ background: 'rgba(14,155,155,0.1)', color: '#0E9B9B' }}>{c.mode}</span>
                    </div>
                  </div>
                  <c.icon size={28} style={{ color: '#E8541A', opacity: 0.4 }} />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── PARTNERS ────────────────────────────────────────── */}
      <section className="py-20 px-4 stripe-bg">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8541A' }}>Partnerships</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">Carrier & Agent Network</h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {partners.map((p, i) => (
              <FadeUp key={p.name} delay={i * 0.05}>
                <div className="rounded-2xl p-5 flex items-center justify-between" style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div>
                    <div className="font-bold text-white text-sm">{p.name}</div>
                    <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>{p.cat}</div>
                  </div>
                  <Globe size={16} style={{ color: 'rgba(232,84,26,0.6)' }} />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className="py-20 px-4 text-center" style={{ background: '#F6F5F2' }}>
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#0D1B2A' }}>Reach Any Destination</h2>
          <p className="text-slate-500 max-w-lg mx-auto mb-8">Our network spans 150+ countries. Tell us where you need to go — we'll find the best route.</p>
          <Link to="/contact" className="glow-btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white"
            style={{ background: '#E8541A' }}>
            Plan a Shipment <ArrowRight size={16} />
          </Link>
        </FadeUp>
      </section>
    </div>
  )
}
