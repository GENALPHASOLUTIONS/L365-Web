import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Ship, Plane, Warehouse, FileCheck, Layers, Package, BarChart3, ArrowRight, CheckCircle, ArrowLeftRight, Truck } from 'lucide-react'

function Reveal({ children, delay = 0, className = '', style }: { children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }} className={className} style={style}>
      {children}
    </motion.div>
  )
}

const cats = [
  {
    id: 'sea', label: 'Sea Freight', icon: Ship, accent: '#E8541A', bg: 'rgba(232,84,26,0.08)',
    headline: 'Ocean Freight Solutions',
    desc: 'Connecting Sri Lanka to every major port worldwide with FCL, LCL and NVOCC services — competitive rates, reliable transit times and door-to-door options on all trade lanes.',
    benefits: ['FCL — Full Container Load', 'LCL — Less than Container Load', 'NVOCC Operations', 'Reefer & Dangerous Goods', 'Port-to-Port & Door-to-Door', 'Transshipment via Port Colombo'],
    cards: [
      { icon: Ship,           name: 'FCL Services',      desc: 'Guaranteed space, competitive freight, door-to-port or door-to-door.' },
      { icon: Package,        name: 'LCL Consolidation', desc: 'Share container space — cost-effective with regular sailing schedules.' },
      { icon: ArrowLeftRight, name: 'Transshipment',     desc: 'Leverage Port Colombo, South Asia\'s leading transshipment hub.' },
    ],
  },
  {
    id: 'air', label: 'Air Freight', icon: Plane, accent: '#0E9B9B', bg: 'rgba(14,155,155,0.08)',
    headline: 'Air Cargo Solutions',
    desc: 'When speed is non-negotiable. Strong carrier partnerships at Bandaranaike International and key global hubs ensure your time-critical cargo lands exactly on schedule.',
    benefits: ['Express & Priority Air', 'Consolidated Air Freight', 'Charter Services', 'Airport-to-Airport / Door-to-Door', 'Perishables & Pharmaceuticals', 'IATA Dangerous Goods certified'],
    cards: [
      { icon: Plane,   name: 'Express Air',      desc: 'Same-day and next-day options for time-sensitive freight.' },
      { icon: Layers,  name: 'Consolidated Air', desc: 'Cost-efficient grouped shipments on regular freighter schedules.' },
      { icon: Package, name: 'Charter Cargo',    desc: 'Full aircraft charters for oversized or emergency cargo.' },
    ],
  },
  {
    id: 'customs', label: 'Customs & Trade', icon: FileCheck, accent: '#7BC14A', bg: 'rgba(123,193,74,0.08)',
    headline: 'Customs Brokerage & Trade Compliance',
    desc: 'Our licensed customs brokers navigate complex regulatory environments so you don\'t have to — from import/export declarations to tariff classification and duty optimisation.',
    benefits: ['Import & Export Clearance', 'Tariff Classification (HS Codes)', 'Duty & Tax Optimisation', 'Customs Audit Support', 'Dangerous Goods Documentation', 'FTA Advisory'],
    cards: [
      { icon: FileCheck, name: 'Import Clearance',   desc: 'Rapid, accurate clearance of all goods through Sri Lankan Customs.' },
      { icon: FileCheck, name: 'Export Declarations', desc: 'Compliant export documentation for all destination markets.' },
      { icon: BarChart3, name: 'Trade Compliance',   desc: 'Stay compliant with ever-changing international trade regulations.' },
    ],
  },
  {
    id: 'warehouse', label: 'Warehousing', icon: Warehouse, accent: '#E8541A', bg: 'rgba(232,84,26,0.08)',
    headline: 'Warehousing & Distribution',
    desc: 'Strategic warehousing in Colombo offering bonded storage, temperature control, pick-and-pack and last-mile distribution across Sri Lanka.',
    benefits: ['Bonded Warehousing', 'General & Temperature-Controlled', 'Pick, Pack & Label', 'Real-Time Inventory Management', 'Last-Mile Distribution', 'Value-Added Services'],
    cards: [
      { icon: Warehouse, name: 'Bonded Warehouse', desc: 'Duty-deferred storage for imported goods awaiting customs clearance.' },
      { icon: Package,   name: 'Pick & Pack',      desc: 'E-commerce and retail fulfilment with daily dispatch.' },
      { icon: BarChart3, name: 'Inventory Control', desc: 'Real-time WMS with full visibility into stock levels.' },
    ],
  },
  {
    id: '3pl', label: '3PL / 4PL', icon: Layers, accent: '#0E9B9B', bg: 'rgba(14,155,155,0.08)',
    headline: 'Integrated Supply Chain Management',
    desc: 'Our 3PL and 4PL solutions integrate your entire supply chain — from supplier to customer — with a single point of accountability and end-to-end visibility.',
    benefits: ['End-to-End Supply Chain Management', 'Vendor Management', 'Multi-modal Coordination', 'IT Systems Integration', 'KPI Reporting & Analytics', 'Demand Forecasting'],
    cards: [
      { icon: Layers,    name: '3PL Services',       desc: 'Outsource transport, warehousing and fulfilment to one expert.' },
      { icon: BarChart3, name: '4PL Orchestration',  desc: 'We manage your entire logistics ecosystem including third parties.' },
      { icon: Truck,     name: 'Supply Chain Design', desc: 'Strategic design and optimisation of your global supply chain.' },
    ],
  },
  {
    id: 'value', label: 'Value Added', icon: BarChart3, accent: '#7BC14A', bg: 'rgba(123,193,74,0.08)',
    headline: 'Value-Added Logistics Services',
    desc: 'Beyond moving cargo — we add value at every stage with specialised services that complete your logistics picture.',
    benefits: ['Project Cargo Management', 'Packing & Labelling', 'Dangerous Goods Handling', 'Trade Lane Intelligence', 'Cargo Insurance', 'Vendor Pre-qualification'],
    cards: [
      { icon: Package,   name: 'Project Cargo',    desc: 'Heavy-lift, oversized and complex shipments handled with precision.' },
      { icon: FileCheck, name: 'Cargo Insurance',   desc: 'Marine cargo insurance from underwriting to claims.' },
      { icon: BarChart3, name: 'Trade Intelligence', desc: 'Market insights, tariff alerts and analytics for strategic decisions.' },
    ],
  },
]

export default function Services() {
  const [active, setActive] = useState(cats[0].id)
  const cat = cats.find(c => c.id === active)!

  return (
    <div style={{ background: '#fff' }}>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(160deg, #0D1B2A 0%, #1a2f44 55%, #0E9B9B 150%)', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-5%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,84,26,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge badge-orange" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>20+ Services</span>
            <h1 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#fff', lineHeight: 1.08, marginBottom: '1.25rem', maxWidth: 580 }}>
              Complete Freight<br /><span style={{ color: '#E8541A' }}>Forwarding Solutions</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', maxWidth: 500, lineHeight: 1.7 }}>
              From a single parcel to a full supply chain — our portfolio covers every logistics need across sea, air, land and beyond.
            </p>
          </motion.div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(to bottom, transparent, #fff)', pointerEvents: 'none' }} />
      </section>

      {/* ── Service tiles grid ────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="wrap">
          <Reveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-teal" style={{ marginBottom: '.75rem', display: 'inline-flex' }}>Choose a Service</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem,4vw,2.5rem)', color: '#111827' }}>All Service Areas</h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem', marginBottom: '3rem' }}>
            {cats.map((c, i) => (
              <Reveal key={c.id} delay={i * 0.06}>
                <button onClick={() => setActive(c.id)}
                  style={{ width: '100%', background: active === c.id ? c.accent : c.bg, border: `2px solid ${active === c.id ? c.accent : 'transparent'}`, borderRadius: 14, padding: '1.75rem', textAlign: 'left', cursor: 'pointer', transition: 'all .2s' }}>
                  <div style={{ width: 48, height: 48, borderRadius: 12, background: active === c.id ? 'rgba(255,255,255,0.2)' : '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
                    <c.icon size={22} style={{ color: active === c.id ? '#fff' : c.accent }} />
                  </div>
                  <div style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '1rem', color: active === c.id ? '#fff' : '#111827', marginBottom: '.35rem' }}>{c.label}</div>
                  <div style={{ fontSize: '.75rem', color: active === c.id ? 'rgba(255,255,255,0.7)' : '#9CA3AF' }}>{c.benefits.length} services</div>
                </button>
              </Reveal>
            ))}
          </div>

          {/* Detail panel */}
          <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}
            style={{ background: '#F9FAFB', borderRadius: 20, overflow: 'hidden', border: `1.5px solid ${cat.accent}22` }}>
            {/* Header strip */}
            <div style={{ background: cat.accent, padding: '2rem 2.5rem', display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
              <div style={{ width: 56, height: 56, borderRadius: 14, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <cat.icon size={26} color="#fff" />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 800, fontSize: '1.5rem', color: '#fff' }}>{cat.headline}</h3>
                <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '.85rem', marginTop: '.25rem' }}>{cat.label}</p>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: '2.5rem', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }}>
              <div>
                <p style={{ color: '#6B7280', lineHeight: 1.75, fontSize: '.9rem', marginBottom: '1.75rem' }}>{cat.desc}</p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.625rem', marginBottom: '2rem' }}>
                  {cat.benefits.map(b => (
                    <li key={b} style={{ display: 'flex', alignItems: 'center', gap: '.75rem', fontSize: '.875rem', color: '#374151', fontWeight: 500 }}>
                      <CheckCircle size={14} style={{ color: cat.accent, flexShrink: 0 }} /> {b}
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn btn-orange">Request a Quote <ArrowRight size={14} /></Link>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {cat.cards.map((card, i) => (
                  <motion.div key={card.name} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                    style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 12, padding: '1.25rem', display: 'flex', gap: '.875rem', alignItems: 'flex-start' }}>
                    <div style={{ width: 38, height: 38, borderRadius: 8, background: cat.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <card.icon size={16} style={{ color: cat.accent }} />
                    </div>
                    <div>
                      <h5 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '.875rem', color: '#111827', marginBottom: '.3rem' }}>{card.name}</h5>
                      <p style={{ fontSize: '.78rem', color: '#6B7280', lineHeight: 1.6 }}>{card.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section style={{ background: '#E8541A', padding: '4rem 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(1.6rem,3.5vw,2.25rem)', color: '#fff', marginBottom: '1rem' }}>Can't Find What You Need?</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: 420, margin: '0 auto 2rem' }}>Our experts can design a custom solution for any cargo, route or requirement.</p>
            <Link to="/contact" className="btn" style={{ background: '#fff', color: '#E8541A' }}>Talk to an Expert <ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
