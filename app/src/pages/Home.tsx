import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'

function CountUp({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)
  useEffect(() => {
    if (!inView) return
    const duration = 1400, start = Date.now()
    const tick = () => {
      const p = Math.min((Date.now() - start) / duration, 1)
      setVal(Math.round((1 - Math.pow(1 - p, 3)) * to))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, to])
  return <span ref={ref}>{val}{suffix}</span>
}
import { Ship, Plane, Warehouse, FileCheck, Layers, Package, ArrowRight, Shield, Clock, Globe, Award, CheckCircle } from 'lucide-react'

function Reveal({ children, delay = 0, className = '', style }: { children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className} style={style}>
      {children}
    </motion.div>
  )
}

const services = [
  { icon: Ship,      label: 'Sea Freight',         desc: 'FCL · LCL · NVOCC across all major global ports and trade lanes.',           accent: '#E8541A', bg: 'rgba(232,84,26,0.08)' },
  { icon: Plane,     label: 'Air Freight',          desc: 'Express and consolidated air cargo with priority handling at BIA.',           accent: '#0E9B9B', bg: 'rgba(14,155,155,0.08)' },
  { icon: FileCheck, label: 'Customs Brokerage',    desc: 'Licensed import/export clearance and duty optimisation by experts.',          accent: '#7BC14A', bg: 'rgba(123,193,74,0.08)' },
  { icon: Warehouse, label: 'Warehousing',          desc: 'Bonded & general storage, pick-and-pack, real-time inventory.',              accent: '#E8541A', bg: 'rgba(232,84,26,0.08)' },
  { icon: Layers,    label: '3PL / 4PL Solutions', desc: 'Integrated supply chain from procurement to last-mile delivery.',             accent: '#0E9B9B', bg: 'rgba(14,155,155,0.08)' },
  { icon: Package,   label: 'Project Cargo',        desc: 'Heavy-lift and oversized cargo with specialised equipment and planning.',     accent: '#7BC14A', bg: 'rgba(123,193,74,0.08)' },
]

const stats = [
  { num: '20+',  sub: 'Years Heritage' },
  { num: '150+', sub: 'Countries Reached' },
  { num: '500+', sub: 'Clients Served' },
  { num: '24/7', sub: '365 Operations' },
]

const whyUs = [
  { icon: Shield, title: 'Rock-Solid Reliability',  desc: 'Zero-compromise on-time delivery backed by two decades of operational excellence.' },
  { icon: Globe,  title: 'Worldwide Coverage',       desc: '150+ countries — your cargo moves seamlessly across every trade lane.' },
  { icon: Award,  title: 'Fully Accredited',         desc: 'SLAFFA member, licensed customs brokers, internationally certified.' },
  { icon: Clock,  title: '24 / 7 / 365 Support',    desc: 'Real-time tracking, instant escalation — our ops team never clocks out.' },
]

const sectors = [
  { icon: '🏭', label: 'Manufacturing',       color: '#E8541A' },
  { icon: '🏥', label: 'Pharma & Healthcare', color: '#0E9B9B' },
  { icon: '👗', label: 'Fashion & Retail',    color: '#7BC14A' },
  { icon: '💻', label: 'Technology',          color: '#E8541A' },
  { icon: '🛢️', label: 'Energy & Chemicals', color: '#0E9B9B' },
  { icon: '🍎', label: 'Perishables',         color: '#7BC14A' },
  { icon: '🔧', label: 'Machinery',           color: '#E8541A' },
  { icon: '🌾', label: 'Agriculture',         color: '#0E9B9B' },
]

export default function Home() {
  return (
    <div style={{ background: '#fff' }}>

      {/* ═══ HERO ═══════════════════════════════════════════ */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', background: 'linear-gradient(160deg, #0D1B2A 0%, #162336 55%, #0a2a2a 100%)' }}>
        {/* Aurora orbs */}
        <div className="aurora-1" style={{ position: 'absolute', top: '-8%', right: '-3%', width: 640, height: 640, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,84,26,0.32) 0%, transparent 68%)', pointerEvents: 'none' }} />
        <div className="aurora-2" style={{ position: 'absolute', bottom: '-12%', left: '8%', width: 480, height: 480, borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,155,155,0.28) 0%, transparent 68%)', pointerEvents: 'none' }} />
        <div className="aurora-3" style={{ position: 'absolute', top: '30%', left: '35%', width: 320, height: 320, borderRadius: '50%', background: 'radial-gradient(circle, rgba(123,193,74,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        {/* Grid overlay */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

        <div className="wrap" style={{ position: 'relative', zIndex: 1, paddingTop: 140, paddingBottom: 100 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: '4rem', alignItems: 'center' }}>
            <div>
              <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: [0.22,1,0.36,1] }}>
                <span className="badge badge-orange" style={{ marginBottom: '1.5rem', display: 'inline-flex' }}>CL Synergy Group · Est. 2004</span>
                <h1 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(2.8rem,6vw,5rem)', color: '#fff', lineHeight: 1.05, marginBottom: '1.5rem', maxWidth: 700 }}>
                  Sri Lanka's Premier<br /><span className="text-shimmer">Freight Forwarder</span>
                </h1>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.1rem', lineHeight: 1.7, maxWidth: 540, marginBottom: '2.5rem' }}>
                  Sea, air, customs, warehousing and end-to-end supply chain solutions — delivered with 20+ years of precision and trust.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                  <Link to="/services" className="btn btn-orange btn-shine">Explore Services <ArrowRight size={15} /></Link>
                  <Link to="/contact"  className="btn btn-outline-white btn-shine">Get a Free Quote</Link>
                </div>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.35 }}
                style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', marginTop: '4rem', background: 'rgba(255,255,255,0.08)', borderRadius: 14, overflow: 'hidden', maxWidth: 580, backdropFilter: 'blur(12px)', WebkitBackdropFilter: 'blur(12px)' }}>
                {[
                  { label: '20+', to: 20, suffix: '+', sub: 'Years Heritage', color: '#E8541A' },
                  { label: '150+', to: 150, suffix: '+', sub: 'Countries Reached', color: '#0E9B9B' },
                  { label: '500+', to: 500, suffix: '+', sub: 'Clients Served', color: '#7BC14A' },
                  { label: '24/7', to: null, suffix: '', sub: '365 Operations', color: '#E8541A' },
                ].map((s, i) => (
                  <div key={s.sub} style={{ padding: '1.35rem 1rem', background: i % 2 === 0 ? 'rgba(255,255,255,0.04)' : 'rgba(255,255,255,0.02)', textAlign: 'center' }}>
                    <div style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: '2rem', color: s.color, lineHeight: 1 }}>
                      {s.to ? <CountUp to={s.to} suffix={s.suffix} /> : s.label}
                    </div>
                    <div style={{ fontSize: '.68rem', color: 'rgba(255,255,255,0.5)', marginTop: '.4rem', fontWeight: 500, letterSpacing: '.04em' }}>{s.sub}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Logo showcase */}
            <motion.div initial={{ opacity: 0, scale: 0.85 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22,1,0.36,1] }}
              className="float" style={{ flexShrink: 0, position: 'relative' }}>
              <motion.div animate={{ scale: [1,1.08,1], opacity: [0.25,0.55,0.25] }} transition={{ duration: 3, repeat: Infinity }}
                style={{ position: 'absolute', inset: -24, borderRadius: '50%', border: '1.5px solid rgba(232,84,26,0.5)', pointerEvents: 'none' }} />
              <motion.div animate={{ scale: [1,1.05,1], opacity: [0.2,0.45,0.2] }} transition={{ duration: 2.4, repeat: Infinity, delay: 0.6 }}
                style={{ position: 'absolute', inset: -10, borderRadius: '50%', border: '1px solid rgba(14,155,155,0.5)', pointerEvents: 'none' }} />
              <div style={{ width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.97)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 0 4px rgba(232,84,26,0.3), 0 32px 100px rgba(0,0,0,0.4), 0 0 80px rgba(232,84,26,0.2)', position: 'relative', overflow: 'hidden' }}>
                <motion.div animate={{ x: [-400,400] }} transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 2 }}
                  style={{ position: 'absolute', top: 0, bottom: 0, width: 100, background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)', pointerEvents: 'none' }} />
                <img src="/logo.png" alt="Logistics 365" style={{ width: 220, height: 'auto', objectFit: 'contain', position: 'relative', zIndex: 1 }} />
              </div>
              <motion.div animate={{ y: [0,-6,0] }} transition={{ duration: 2.2, repeat: Infinity }}
                style={{ position: 'absolute', top: 20, right: -40, background: '#E8541A', color: '#fff', borderRadius: 8, padding: '6px 14px', fontSize: '.75rem', fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, whiteSpace: 'nowrap', boxShadow: '0 4px 14px rgba(232,84,26,0.45)' }}>
                20+ Years
              </motion.div>
              <motion.div animate={{ y: [0,6,0] }} transition={{ duration: 2.6, repeat: Infinity, delay: 0.4 }}
                style={{ position: 'absolute', bottom: 30, left: -48, background: '#0E9B9B', color: '#fff', borderRadius: 8, padding: '6px 14px', fontSize: '.75rem', fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, whiteSpace: 'nowrap', boxShadow: '0 4px 14px rgba(14,155,155,0.45)' }}>
                150+ Countries
              </motion.div>
              <motion.div animate={{ y: [0,-4,0] }} transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                style={{ position: 'absolute', bottom: -10, right: -20, background: '#7BC14A', color: '#fff', borderRadius: 8, padding: '6px 14px', fontSize: '.75rem', fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, whiteSpace: 'nowrap', boxShadow: '0 4px 14px rgba(123,193,74,0.45)' }}>
                24 / 7 / 365
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(to bottom, transparent, #fff)', pointerEvents: 'none' }} />
      </section>

      {/* ═══ WHAT WE DO ══════════════════════════════════════ */}
      <section style={{ padding: '7rem 0', background: '#fff' }}>
        <div className="wrap">
          <Reveal>
            <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
              <span className="badge badge-teal" style={{ marginBottom: '.875rem', display: 'inline-flex' }}>What We Do</span>
              <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: '#111827', marginBottom: '1rem' }}>
                Complete Freight <span style={{ color: '#E8541A' }}>Forwarding Solutions</span>
              </h2>
              <p style={{ color: '#6B7280', maxWidth: 520, margin: '0 auto', lineHeight: 1.7 }}>
                From a single shipment to a full supply chain — we handle every logistics need with precision and care.
              </p>
            </div>
          </Reveal>

          {/* Feature layout: big card top + 4 small below */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {/* Left col: big card */}
            <Reveal>
              <div style={{ background: 'linear-gradient(135deg, #E8541A 0%, #c74416 100%)', borderRadius: 16, padding: '2.5rem', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', minHeight: 280, position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', bottom: -30, right: -30, width: 150, height: 150, borderRadius: '50%', background: 'rgba(255,255,255,0.08)' }} />
                <div>
                  <div style={{ width: 52, height: 52, borderRadius: 14, background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                    <Ship size={26} color="#fff" />
                  </div>
                  <h3 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 800, fontSize: '1.4rem', color: '#fff', marginBottom: '.75rem' }}>Sea Freight</h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '.9rem', lineHeight: 1.6 }}>FCL · LCL · NVOCC services across all major global ports. Competitive rates, reliable transit, door-to-door options worldwide.</p>
                </div>
                <Link to="/services" style={{ marginTop: '1.5rem', display: 'inline-flex', alignItems: 'center', gap: '.5rem', color: '#fff', fontWeight: 700, fontSize: '.85rem', textDecoration: 'none' }}>
                  Learn more <ArrowRight size={14} />
                </Link>
              </div>
            </Reveal>

            {/* Right col: 2×2 grid */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
              {services.slice(1).map((s, i) => (
                <Reveal key={s.label} delay={i * 0.07}>
                  <div style={{ background: s.bg, borderRadius: 16, padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '.75rem', transition: 'transform .2s, box-shadow .2s', cursor: 'default' }}
                    onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = 'translateY(-4px)'; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 12px 32px ${s.accent}22` }}
                    onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = 'none'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none' }}>
                    <div style={{ width: 42, height: 42, borderRadius: 10, background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: `0 4px 12px ${s.accent}22` }}>
                      <s.icon size={20} style={{ color: s.accent }} />
                    </div>
                    <div style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '.9rem', color: '#111827' }}>{s.label}</div>
                    <p style={{ fontSize: '.78rem', color: '#6B7280', lineHeight: 1.6 }}>{s.desc}</p>
                    <Link to="/services" style={{ fontSize: '.75rem', fontWeight: 700, color: s.accent, display: 'flex', alignItems: 'center', gap: '.3rem', textDecoration: 'none', marginTop: 'auto' }}>
                      Details <ArrowRight size={12} />
                    </Link>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <Reveal style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/services" className="btn btn-outline btn-shine">View All Services <ArrowRight size={14} /></Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ WHY US ═══════════════════════════════════════ */}
      <section style={{ padding: '6rem 0', background: 'linear-gradient(135deg, #0D1B2A 0%, #1a2f44 100%)' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <Reveal>
              <span className="badge badge-orange" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>Why Logistics 365</span>
              <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontSize: 'clamp(1.8rem,3.5vw,2.5rem)', color: '#fff', marginBottom: '1.25rem' }}>
                Built on Trust.<br /><span style={{ color: '#0E9B9B' }}>Driven by Precision.</span>
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, fontSize: '.95rem', marginBottom: '2rem' }}>
                Logistics 365 is the next chapter of CL Synergy Limited — trusted by Sri Lankan businesses since 2004 to move cargo safely, on time and within budget.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '.75rem' }}>
                {['SLAFFA Member Organisation','Licensed Customs Brokers','150+ Country Agent Network','ISO-Certified Operations','Real-Time Shipment Tracking'].map(t => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '.75rem' }}>
                    <CheckCircle size={15} style={{ color: '#7BC14A', flexShrink: 0 }} />
                    <span style={{ fontSize: '.875rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{t}</span>
                  </div>
                ))}
              </div>
            </Reveal>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {whyUs.map((f, i) => {
                const accent = ['#E8541A','#0E9B9B','#7BC14A','#E8541A'][i]
                const accentRgb = ['232,84,26','14,155,155','123,193,74','232,84,26'][i]
                return (
                  <Reveal key={f.title} delay={i * 0.07} style={{ height: '100%' }}>
                    <div className="glass-dark" style={{ borderRadius: 14, padding: '1.5rem', cursor: 'default', height: '100%', display: 'flex', flexDirection: 'column' }}
                      onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.borderColor = `rgba(${accentRgb},0.35)`; (e.currentTarget as HTMLDivElement).style.boxShadow = `0 0 0 1px rgba(${accentRgb},0.15), 0 12px 32px rgba(0,0,0,0.25)` }}
                      onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(255,255,255,0.1)'; (e.currentTarget as HTMLDivElement).style.boxShadow = 'none' }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: `rgba(${accentRgb},0.15)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem', boxShadow: `0 0 16px rgba(${accentRgb},0.25)` }}>
                        <f.icon size={20} style={{ color: accent, filter: `drop-shadow(0 0 6px rgba(${accentRgb},0.6))` }} />
                      </div>
                      <h4 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '.9rem', color: '#fff', marginBottom: '.5rem' }}>{f.title}</h4>
                      <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{f.desc}</p>
                    </div>
                  </Reveal>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ HERITAGE STRIP ══════════════════════════════════ */}
      <section style={{ padding: '5rem 0', background: '#F9FAFB' }}>
        <div className="wrap">
          <Reveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-green" style={{ marginBottom: '.75rem', display: 'inline-flex' }}>Our Heritage</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontSize: 'clamp(1.8rem,4vw,2.75rem)', color: '#111827' }}>
              Two Decades of <span style={{ color: '#E8541A' }}>Moving the World</span>
            </h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1px', background: '#E5E7EB', borderRadius: 12, overflow: 'hidden' }}>
            {[
              { year: '2004', event: 'CL Synergy Founded in Colombo' },
              { year: '2012', event: 'Expanded to 80+ country network' },
              { year: '2020', event: 'ISO-certified operations' },
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

      {/* ═══ SECTORS WE SERVE ════════════════════════════════ */}
      <section style={{ padding: '6rem 0', background: '#fff' }}>
        <div className="wrap">
          <Reveal style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge badge-orange" style={{ marginBottom: '.875rem', display: 'inline-flex' }}>Industries</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: '#111827', marginBottom: '.75rem' }}>
              Sectors We <span style={{ color: '#0E9B9B' }}>Serve</span>
            </h2>
            <p style={{ color: '#6B7280', maxWidth: 440, margin: '0 auto', lineHeight: 1.7 }}>
              Deep expertise across 8 major industries — we speak your cargo's language.
            </p>
          </Reveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '1rem' }}>
            {sectors.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.06}>
                <div style={{ position: 'relative', borderRadius: 16, overflow: 'hidden', cursor: 'default', border: `1.5px solid ${s.color}30`, transition: 'transform .25s, box-shadow .25s, border-color .25s' }}
                  onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.transform = 'translateY(-7px)'; d.style.boxShadow = `0 24px 48px ${s.color}28`; d.style.borderColor = `${s.color}88` }}
                  onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.transform = 'none'; d.style.boxShadow = 'none'; d.style.borderColor = `${s.color}30` }}>
                  <div style={{ height: 4, background: `linear-gradient(90deg, ${s.color}, ${s.color}aa)` }} />
                  <div style={{ padding: '1.75rem 1.25rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '.75rem', background: '#fff' }}>
                    <div style={{ width: 62, height: 62, borderRadius: '50%', background: `linear-gradient(135deg, ${s.color}18, ${s.color}08)`, border: `1.5px solid ${s.color}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.8rem', boxShadow: `0 4px 16px ${s.color}18` }}>{s.icon}</div>
                    <span style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '.875rem', color: '#111827', lineHeight: 1.3 }}>{s.label}</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA BAND ════════════════════════════════════════ */}
      <section style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg, #c74416 0%, #E8541A 50%, #d65f20 100%)', padding: '5rem 0' }}>
        <div style={{ position: 'absolute', top: '-40%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-30%', left: '-5%', width: 350, height: 350, borderRadius: '50%', background: 'radial-gradient(circle, rgba(0,0,0,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="wrap" style={{ textAlign: 'center', position: 'relative', zIndex: 1 }}>
          <Reveal>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: 'rgba(255,255,255,0.15)', borderRadius: 6, padding: '4px 14px', marginBottom: '1.25rem' }}>
              <span className="pulse-dot" style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff', display: 'inline-block', flexShrink: 0 }} />
              <span style={{ fontSize: '.68rem', fontWeight: 700, color: '#fff', letterSpacing: '.1em' }}>24 / 7 / 365 OPERATIONS</span>
            </div>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem,4vw,2.75rem)', color: '#fff', marginBottom: '1rem' }}>Ready to Ship?</h2>
            <p style={{ color: 'rgba(255,255,255,0.82)', fontSize: '1rem', maxWidth: 480, margin: '0 auto 2rem', lineHeight: 1.7 }}>
              Talk to our freight experts — we'll design a solution that fits your cargo, timeline and budget.
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <Link to="/contact" className="btn btn-shine" style={{ background: '#fff', color: '#E8541A', fontFamily: "'Outfit',system-ui,sans-serif" }}>
                Get a Free Quote <ArrowRight size={15} />
              </Link>
              <a href="tel:+94115300250" className="btn btn-outline-white btn-shine">📞 +94 11 530 0250</a>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
