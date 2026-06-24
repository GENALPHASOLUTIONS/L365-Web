import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Ship, Plane, Warehouse, FileCheck, Layers, Package, ArrowRight, Shield, Clock, Globe, Award, CheckCircle } from 'lucide-react'

function Reveal({ children, delay = 0, x = 0, className = '' }: { children: React.ReactNode; delay?: number; x?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 28, x }}
      animate={inView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}>
      {children}
    </motion.div>
  )
}

const services = [
  { icon: Ship,      label: 'Sea Freight',         desc: 'FCL · LCL · NVOCC services across all major global ports and trade lanes.',         accent: '#E8541A' },
  { icon: Plane,     label: 'Air Freight',          desc: 'Express and consolidated air cargo with priority handling at BIA.',                  accent: '#0E9B9B' },
  { icon: FileCheck, label: 'Customs Brokerage',    desc: 'Licensed customs clearance — imports, exports, and duty optimisation.',              accent: '#7BC14A' },
  { icon: Warehouse, label: 'Warehousing',          desc: 'Bonded and general warehousing with pick-and-pack and real-time inventory.',         accent: '#E8541A' },
  { icon: Layers,    label: '3PL / 4PL Solutions', desc: 'Integrated supply chain management from procurement to last-mile delivery.',         accent: '#0E9B9B' },
  { icon: Package,   label: 'Project Cargo',        desc: 'Heavy-lift and oversized cargo moved with precision and meticulous planning.',       accent: '#7BC14A' },
]

const stats = [
  { num: '20+',  sub: 'Years Heritage' },
  { num: '150+', sub: 'Countries Reached' },
  { num: '500+', sub: 'Clients Served' },
  { num: '24/7', sub: 'Always On' },
]

const whyUs = [
  { icon: Shield, title: 'Rock-Solid Reliability',  desc: 'Zero-compromise on-time delivery backed by two decades of operational excellence from the CL Synergy Group.' },
  { icon: Globe,  title: 'Worldwide Coverage',       desc: 'An agent network spanning 150+ countries ensures your cargo moves seamlessly across every trade lane.' },
  { icon: Award,  title: 'Fully Accredited',         desc: 'SLAFFA member, licensed customs brokers, and internationally certified — your guarantee of quality.' },
  { icon: Clock,  title: '24 / 7 / 365 Support',    desc: 'Dedicated ops team online round-the-clock. Real-time tracking and instant escalation — always.' },
]

export default function Home() {
  return (
    <div style={{ background: '#fff' }}>

      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: 'linear-gradient(160deg, #0D1B2A 0%, #1a2f44 55%, #0E9B9B 150%)' }}>
        {/* Gradient orb — orange */}
        <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,84,26,0.35) 0%, transparent 70%)', pointerEvents: 'none' }} />
        {/* Gradient orb — teal */}
        <div style={{ position: 'absolute', bottom: '-10%', left: '10%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,155,155,0.25) 0%, transparent 70%)', pointerEvents: 'none' }} />
        {/* Grid overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)', backgroundSize: '50px 50px', pointerEvents: 'none' }} />

        <div className="wrap" style={{ position: 'relative', zIndex: 1, paddingTop: 120, paddingBottom: 100 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}>
            <span className="badge badge-orange" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>
              CL Synergy Group · Est. 2004
            </span>

            <h1 style={{ fontFamily: "'Outfit', system-ui, sans-serif", fontWeight: 900, fontSize: 'clamp(2.8rem, 6vw, 5rem)', color: '#fff', lineHeight: 1.05, marginBottom: '1.5rem', maxWidth: 700 }}>
              Sri Lanka's Premier<br />
              <span className="text-shimmer">Freight Forwarder</span>
            </h1>

            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 540, marginBottom: '2.5rem' }}>
              Sea, air, customs, warehousing and end-to-end supply chain solutions — delivered with 20+ years of precision and trust.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <Link to="/services" className="btn btn-orange">Explore Services <ArrowRight size={15} /></Link>
              <Link to="/contact"  className="btn btn-outline-white">Get a Free Quote</Link>
            </div>
          </motion.div>

          {/* Stats row */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
            style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', marginTop: '5rem', background: 'rgba(255,255,255,0.1)', borderRadius: 12, overflow: 'hidden', maxWidth: 680 }}>
            {stats.map(s => (
              <div key={s.num} style={{ padding: '1.25rem 1rem', background: 'rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: '2rem', color: '#E8541A', lineHeight: 1 }}>{s.num}</div>
                <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,0.5)', marginTop: '.4rem', fontWeight: 500 }}>{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom fade */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to bottom, transparent, #fff)', pointerEvents: 'none' }} />
      </section>

      {/* ═══ SERVICES ═══════════════════════════════════════ */}
      <section style={{ padding: '6rem 0', background: '#fff' }}>
        <div className="wrap">
          <Reveal className="" style={{ marginBottom: '3rem' }}>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
              <div>
                <span className="badge badge-teal" style={{ marginBottom: '.75rem', display: 'inline-flex' }}>What We Do</span>
                <h2 style={{ fontSize: 'clamp(1.8rem,4vw,2.75rem)', color: '#111827' }}>
                  Complete Freight<br /><span style={{ color: '#E8541A' }}>Forwarding Solutions</span>
                </h2>
              </div>
              <Link to="/services" className="btn btn-outline" style={{ whiteSpace: 'nowrap' }}>View All Services <ArrowRight size={14} /></Link>
            </div>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
            {services.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div className="card-l365" style={{ padding: '1.75rem', height: '100%', display: 'flex', flexDirection: 'column', borderLeft: `4px solid ${s.accent}` }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `rgba(${s.accent === '#E8541A' ? '232,84,26' : s.accent === '#0E9B9B' ? '14,155,155' : '123,193,74'},.1)`, marginBottom: '1rem' }}>
                    <s.icon size={20} style={{ color: s.accent }} />
                  </div>
                  <h3 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '1rem', color: '#111827', marginBottom: '.5rem' }}>{s.label}</h3>
                  <p style={{ fontSize: '.85rem', color: '#6B7280', lineHeight: 1.65, flex: 1 }}>{s.desc}</p>
                  <Link to="/services" style={{ marginTop: '1rem', fontSize: '.8rem', fontWeight: 700, color: s.accent, display: 'flex', alignItems: 'center', gap: '.35rem', textDecoration: 'none' }}>
                    Learn more <ArrowRight size={13} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COLOR BAND — WHY US ════════════════════════════ */}
      <section style={{ padding: '5rem 0', background: 'linear-gradient(135deg, #0D1B2A 0%, #1a2f44 100%)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            {/* Left */}
            <Reveal>
              <span className="badge badge-orange" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>Why Logistics 365</span>
              <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', color: '#fff', marginBottom: '1.25rem' }}>
                Built on Trust.<br /><span style={{ color: '#0E9B9B' }}>Driven by Precision.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, fontSize: '.95rem', marginBottom: '2rem' }}>
                Logistics 365 is the next chapter of CL Synergy Limited — a company that has been trusted by Sri Lankan businesses since 2004 to move their cargo safely, on time, and within budget.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                {['SLAFFA Member Organisation', 'Licensed Customs Brokers', '150+ Country Agent Network', 'ISO-Certified Operations', 'Real-Time Shipment Tracking'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                    <CheckCircle size={15} style={{ color: '#7BC14A', flexShrink: 0 }} />
                    <span style={{ fontSize: '.875rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>

            {/* Right — feature cards */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {whyUs.map((f, i) => (
                <Reveal key={f.title} delay={i * 0.07}>
                  <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '1.5rem' }}>
                    <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(232,84,26,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                      <f.icon size={18} style={{ color: '#E8541A' }} />
                    </div>
                    <h4 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '.875rem', color: '#fff', marginBottom: '.5rem' }}>{f.title}</h4>
                    <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.6 }}>{f.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HERITAGE STRIP ═════════════════════════════════ */}
      <section style={{ padding: '5rem 0', background: '#F9FAFB' }}>
        <div className="wrap">
          <Reveal className="text-center" style={{ marginBottom: '3rem' }}>
            <span className="badge badge-green" style={{ marginBottom: '.75rem', display: 'inline-flex' }}>Our Heritage</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontSize: 'clamp(1.8rem,4vw,2.75rem)', color: '#111827' }}>
              Two Decades of <span style={{ color: '#E8541A' }}>Moving the World</span>
            </h2>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: '#E5E7EB', borderRadius: 12, overflow: 'hidden' }}>
            {[
              { year: '2004', event: 'CL Synergy Founded in Colombo, Sri Lanka' },
              { year: '2012', event: 'Expanded to 80+ country global agent network' },
              { year: '2020', event: 'ISO-certified operations achieved' },
              { year: '2024', event: 'Logistics 365 (Pvt) Ltd established' },
            ].map((m, i) => (
              <Reveal key={m.year} delay={i * 0.08}>
                <div style={{ background: '#fff', padding: '2rem 1.5rem', textAlign: 'center' }}>
                  <div style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: '2.25rem', color: i % 2 === 0 ? '#E8541A' : '#0E9B9B', marginBottom: '.625rem' }}>{m.year}</div>
                  <p style={{ fontSize: '.8rem', color: '#6B7280', lineHeight: 1.5 }}>{m.event}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ INDUSTRIES ═════════════════════════════════════ */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="wrap">
          <Reveal style={{ marginBottom: '2.5rem', textAlign: 'center' }}>
            <span className="badge badge-teal" style={{ marginBottom: '.75rem', display: 'inline-flex' }}>Industries</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontSize: 'clamp(1.6rem,3.5vw,2.25rem)', color: '#111827' }}>Sectors We Serve</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', gap: '.875rem' }}>
            {[['🏭','Manufacturing'],['🏥','Pharma'],['👗','Fashion & Retail'],['💻','Technology'],['🛢️','Energy'],['🍎','Perishables'],['🔧','Machinery'],['🌾','Agriculture']].map(([icon, label]) => (
              <Reveal key={label as string}>
                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 10, padding: '1.25rem 1rem', textAlign: 'center', transition: 'border-color .2s, background .2s', cursor: 'default' }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--orange)'; (e.currentTarget as HTMLDivElement).style.background = '#FFF4F0' }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = '#E5E7EB'; (e.currentTarget as HTMLDivElement).style.background = '#F9FAFB' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '.5rem' }}>{icon}</div>
                  <div style={{ fontSize: '.78rem', fontWeight: 600, color: '#374151' }}>{label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BAND ═══════════════════════════════════════ */}
      <section style={{ background: '#E8541A', padding: '5rem 0' }}>
        <div className="wrap" style={{ textAlign: 'center' }}>
          <Reveal>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem,4vw,2.75rem)', color: '#fff', marginBottom: '1rem' }}>
              Ready to Ship?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1rem', maxWidth: 480, margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Talk to our freight experts — we'll design a solution that fits your cargo, timeline and budget.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/contact" className="btn" style={{ background: '#fff', color: '#E8541A', fontFamily: "'Outfit',system-ui,sans-serif" }}>
                Get a Free Quote <ArrowRight size={15} />
              </Link>
              <a href="tel:+94115300250" className="btn btn-outline-white">📞 +94 11 530 0250</a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
