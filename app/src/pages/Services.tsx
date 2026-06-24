import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Ship, Plane, Package, Truck, FileCheck, Globe, Warehouse, Layers, BarChart3, ArrowRight, CheckCircle } from 'lucide-react'

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

const categories = [
  {
    id: 'sea', label: 'Sea Freight', icon: Ship,
    headline: 'Global Ocean Freight Solutions',
    desc: 'From FCL to LCL consolidations, we offer comprehensive ocean freight services that connect Sri Lanka to every major port in the world with competitive rates and reliable transit times.',
    benefits: ['FCL (Full Container Load)', 'LCL (Less than Container Load)', 'NVOCC Operations', 'Reefer & Dangerous Goods', 'Port-to-Port & Door-to-Door', 'Transshipment via Colombo Hub'],
    subs: [
      { icon: Ship,    name: 'FCL Services',    desc: 'Full container solutions for large shipments with guaranteed space and competitive freight rates.' },
      { icon: Package, name: 'LCL Consolidation', desc: 'Share container space for smaller shipments — cost-effective with regular sailing schedules.' },
      { icon: Globe,   name: 'Transshipment',   desc: 'Leverage the Port of Colombo, one of South Asia\'s leading transshipment hubs.' },
    ],
  },
  {
    id: 'air', label: 'Air Freight', icon: Plane,
    headline: 'Time-Critical Air Cargo Solutions',
    desc: 'When speed is non-negotiable, our air freight services deliver. With carrier partnerships at Bandaranaike International Airport and global hub connections, we ensure your cargo arrives on time.',
    benefits: ['Express & Priority Air', 'Consolidated Air Freight', 'Charter Services', 'Airport-to-Airport / Door-to-Door', 'Perishables & Pharmaceuticals', 'Dangerous Goods (IATA certified)'],
    subs: [
      { icon: Plane,     name: 'Express Air',       desc: 'Same-day and next-day options for the most time-sensitive cargo.' },
      { icon: Layers,    name: 'Consolidated Air',  desc: 'Cost-effective grouped shipments on regular freighter schedules.' },
      { icon: Package,   name: 'Charter Cargo',     desc: 'Full aircraft charters for oversized or emergency cargo requirements.' },
    ],
  },
  {
    id: 'customs', label: 'Customs & Trade', icon: FileCheck,
    headline: 'Expert Customs Brokerage & Trade Compliance',
    desc: 'Our licensed customs brokers navigate complex regulatory environments so you don\'t have to. From import/export declarations to tariff classification and duty optimization.',
    benefits: ['Import & Export Clearance', 'Tariff Classification (HS Codes)', 'Duty & Tax Optimization', 'Customs Audit Support', 'Dangerous Goods Documentation', 'Free Trade Agreement Advisory'],
    subs: [
      { icon: FileCheck, name: 'Import Clearance',  desc: 'Rapid and accurate clearance of all imported goods through Sri Lankan Customs.' },
      { icon: FileCheck, name: 'Export Declarations', desc: 'Compliant export documentation for all destination markets.' },
      { icon: Globe,     name: 'Trade Compliance',  desc: 'Stay compliant with ever-changing international trade regulations.' },
    ],
  },
  {
    id: 'warehouse', label: 'Warehousing', icon: Warehouse,
    headline: 'Strategic Warehousing & Distribution',
    desc: 'Our modern warehousing facilities offer bonded storage, temperature-controlled environments, pick-and-pack operations and last-mile distribution across Sri Lanka.',
    benefits: ['Bonded Warehousing', 'General & Temperature-Controlled', 'Pick, Pack & Label', 'Inventory Management', 'Last-Mile Distribution', 'Value-Added Services'],
    subs: [
      { icon: Warehouse, name: 'Bonded Warehouse',  desc: 'Duty-deferred storage for imported goods awaiting customs clearance.' },
      { icon: Package,   name: 'Pick & Pack',       desc: 'Fulfillment services tailored for e-commerce and retail distribution.' },
      { icon: BarChart3, name: 'Inventory Control', desc: 'Real-time inventory management systems with full visibility.' },
    ],
  },
  {
    id: '3pl', label: '3PL / 4PL', icon: Layers,
    headline: 'Integrated 3PL & 4PL Supply Chain Management',
    desc: 'Go beyond basic logistics. Our 3PL and 4PL solutions integrate your entire supply chain — from supplier to customer — with a single point of accountability and full visibility.',
    benefits: ['End-to-End Supply Chain Management', 'Vendor Management', 'Multi-modal Coordination', 'IT Systems Integration', 'KPI Reporting & Analytics', 'Demand Forecasting'],
    subs: [
      { icon: Layers,    name: '3PL Services',       desc: 'Outsource transport, warehousing and fulfillment to one expert partner.' },
      { icon: BarChart3, name: '4PL Orchestration',  desc: 'We manage your entire logistics ecosystem, including third-party providers.' },
      { icon: Globe,     name: 'Supply Chain Design', desc: 'Strategic design and optimization of your global supply chain network.' },
    ],
  },
  {
    id: 'value', label: 'Value Added', icon: BarChart3,
    headline: 'Value-Added Logistics Services',
    desc: 'Beyond moving cargo — we add value at every stage. From trade intelligence to project cargo management, our specialized services complete your logistics picture.',
    benefits: ['Project Cargo Management', 'Packing & Labelling', 'Dangerous Goods Handling', 'Trade Lane Intelligence', 'Cargo Insurance', 'Vendor Pre-qualification'],
    subs: [
      { icon: Package,   name: 'Project Cargo',         desc: 'Specialized handling for heavy-lift, oversized and complex shipments.' },
      { icon: FileCheck, name: 'Cargo Insurance',        desc: 'Comprehensive marine cargo insurance from underwriting to claims.' },
      { icon: Globe,     name: 'Trade Intelligence',     desc: 'Market insights, tariff alerts and trade lane analytics for strategic decisions.' },
    ],
  },
]

export default function Services() {
  const [active, setActive] = useState(categories[0].id)
  const cat = categories.find(c => c.id === active)!

  return (
    <div style={{ background: '#F6F5F2' }}>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-40 pb-24 px-4"
        style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #152436 60%, #0D1B2A 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: '#E8541A' }} />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(232,84,26,0.15)', color: '#E8541A' }}>
              20+ Services
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.08] mb-6">
              Complete Freight<br /><span style={{ color: '#E8541A' }}>Forwarding Solutions</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              From a single parcel to a full supply chain — our comprehensive service portfolio covers every logistics need.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── TABS ────────────────────────────────────────────── */}
      <section className="py-4 px-4 bg-white border-b border-gray-100 sticky top-[34px] z-30" style={{ top: 'calc(34px + 68px)' }}>
        <div className="max-w-7xl mx-auto flex gap-1 overflow-x-auto scrollbar-hide">
          {categories.map(c => (
            <button key={c.id} onClick={() => setActive(c.id)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold whitespace-nowrap transition-all shrink-0"
              style={{
                background: active === c.id ? '#E8541A' : 'transparent',
                color: active === c.id ? 'white' : '#6B7280',
              }}>
              <c.icon size={14} /> {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* ── CATEGORY DETAIL ─────────────────────────────────── */}
      <motion.section key={active} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
        className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-lg text-xs font-bold mb-4"
              style={{ background: 'rgba(232,84,26,0.1)', color: '#E8541A' }}>
              <cat.icon size={12} /> {cat.label}
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#0D1B2A' }}>{cat.headline}</h2>
            <p className="text-slate-500 leading-relaxed mb-8">{cat.desc}</p>
            <ul className="space-y-2.5">
              {cat.benefits.map(b => (
                <li key={b} className="flex items-center gap-3 text-sm font-medium" style={{ color: '#0D1B2A' }}>
                  <CheckCircle size={16} style={{ color: '#E8541A', flexShrink: 0 }} /> {b}
                </li>
              ))}
            </ul>
            <Link to="/contact" className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full font-bold text-sm text-white"
              style={{ background: '#E8541A' }}>
              Request a Quote <ArrowRight size={14} />
            </Link>
          </div>
          <div className="space-y-4">
            {cat.subs.map((s, i) => (
              <motion.div key={s.name}
                initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}
                className="card p-6 flex gap-4 items-start">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'rgba(232,84,26,0.1)' }}>
                  <s.icon size={18} style={{ color: '#E8541A' }} />
                </div>
                <div>
                  <h4 className="font-extrabold text-sm mb-1" style={{ color: '#0D1B2A' }}>{s.name}</h4>
                  <p className="text-xs leading-relaxed text-slate-500">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* ── ALL SERVICES GRID ───────────────────────────────── */}
      <section className="py-20 px-4 stripe-bg">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8541A' }}>Full Portfolio</span>
            <h2 className="text-3xl font-extrabold text-white mt-3">All Service Areas</h2>
          </FadeUp>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories.map((c, i) => (
              <FadeUp key={c.id} delay={i * 0.07}>
                <button onClick={() => { setActive(c.id); window.scrollTo({ top: 300, behavior: 'smooth' }) }}
                  className="w-full rounded-2xl p-6 text-left transition-all hover:-translate-y-1"
                  style={{ background: active === c.id ? 'rgba(232,84,26,0.15)' : 'rgba(255,255,255,0.06)', border: active === c.id ? '1px solid rgba(232,84,26,0.4)' : '1px solid rgba(255,255,255,0.1)' }}>
                  <c.icon size={28} className="mb-3" style={{ color: '#E8541A' }} />
                  <div className="font-extrabold text-white text-sm">{c.label}</div>
                  <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>{c.benefits.length} services</div>
                </button>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 px-4 text-center" style={{ background: '#F6F5F2' }}>
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4" style={{ color: '#0D1B2A' }}>Can't Find What You Need?</h2>
          <p className="text-slate-500 max-w-lg mx-auto mb-8">Our logistics experts can design a custom solution for any cargo, any route, any requirement.</p>
          <Link to="/contact" className="glow-btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white"
            style={{ background: '#E8541A' }}>
            Talk to an Expert <ArrowRight size={16} />
          </Link>
        </FadeUp>
      </section>
    </div>
  )
}
