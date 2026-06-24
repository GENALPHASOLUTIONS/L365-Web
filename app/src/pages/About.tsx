import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Shield, Globe, Award, Users, Zap, Heart, CheckCircle } from 'lucide-react'

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

const values = [
  { icon: Shield, title: 'Integrity',    desc: 'Transparent dealings, no surprises — every commitment honoured.' },
  { icon: Zap,    title: 'Excellence',   desc: 'We continuously raise the bar in speed, accuracy and service quality.' },
  { icon: Heart,  title: 'Partnership',  desc: 'Every client is a long-term partner, not a one-time transaction.' },
  { icon: Globe,  title: 'Global Reach', desc: 'Local expertise, worldwide execution across 150+ countries.' },
  { icon: Users,  title: 'People First', desc: 'Our team is our biggest asset — we invest in their growth daily.' },
  { icon: Award,  title: 'Compliance',   desc: 'SLAFFA certified, licensed brokers, internationally compliant.' },
]

const team = [
  { name: 'Anuradha Sooriyaarachi', role: 'Managing Director',  color: '#E8541A' },
  { name: 'Rahula Silva',            role: 'Executive Director', color: '#0E9B9B' },
  { name: 'Rachini Liyanage',        role: 'Executive Director', color: '#7BC14A' },
]

export default function About() {
  return (
    <div style={{ background: '#fff' }}>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(160deg, #0D1B2A 0%, #1a2f44 55%, #0E9B9B 150%)', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,84,26,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge badge-orange" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>Our Story</span>
            <h1 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#fff', lineHeight: 1.08, marginBottom: '1.25rem', maxWidth: 600 }}>
              Built on 20 Years of<br /><span style={{ color: '#E8541A' }}>Freight Excellence</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', maxWidth: 520, lineHeight: 1.7 }}>
              Logistics 365 (Pvt) Ltd is the evolution of CL Synergy Limited — Sri Lanka's trusted freight company since 2004 — reborn with a fresh identity and modern capabilities.
            </p>
          </motion.div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(to bottom, transparent, #fff)', pointerEvents: 'none' }} />
      </section>

      {/* ── Mission / Vision ──────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
            <Reveal>
              <div style={{ background: '#E8541A', borderRadius: 16, padding: '2.5rem', height: '100%' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.25rem' }}>🎯</span>
                </div>
                <h3 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 800, fontSize: '1.4rem', color: '#fff', marginBottom: '1rem' }}>Our Mission</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontSize: '.9rem' }}>
                  To deliver seamless, reliable and cost-effective freight solutions that empower Sri Lankan and global businesses to compete — with the precision only two decades of experience can provide.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div style={{ background: '#0E9B9B', borderRadius: 16, padding: '2.5rem', height: '100%' }}>
                <div style={{ width: 44, height: 44, borderRadius: 10, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                  <span style={{ fontSize: '1.25rem' }}>👁️</span>
                </div>
                <h3 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 800, fontSize: '1.4rem', color: '#fff', marginBottom: '1rem' }}>Our Vision</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontSize: '.9rem' }}>
                  To be Sri Lanka's most trusted and innovative freight forwarder — recognised for supply chain excellence, digital transparency and unwavering commitment to client success.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Journey Timeline ──────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#F9FAFB' }}>
        <div className="wrap">
          <Reveal style={{ marginBottom: '3rem' }}>
            <span className="badge badge-teal" style={{ marginBottom: '.75rem', display: 'inline-flex' }}>Heritage</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontSize: 'clamp(1.8rem,4vw,2.5rem)', color: '#111827' }}>Our Journey</h2>
          </Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {[
              { year: '2004', title: 'CL Synergy Founded',       desc: 'Established in Colombo as a full-service freight forwarding company.' },
              { year: '2008', title: 'SLAFFA Membership',         desc: 'Officially recognised by the Sri Lanka Freight Forwarders Association.' },
              { year: '2012', title: 'Global Network',            desc: 'Agent network expanded to 80+ countries across all major trade lanes.' },
              { year: '2018', title: 'ISO Certification',         desc: 'Achieved ISO-certified quality management systems.' },
              { year: '2022', title: '150+ Country Reach',        desc: 'Full global coverage on all major ocean and air corridors.' },
              { year: '2024', title: 'Logistics 365 Launched',    desc: 'Rebranded as Logistics 365 (Pvt) Ltd — a new chapter begins.' },
            ].map((item, i) => (
              <Reveal key={item.year} delay={i * 0.06}>
                <div style={{ display: 'grid', gridTemplateColumns: '100px 1fr', gap: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid #F3F4F6', marginBottom: '1.5rem', alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: '2rem', color: i % 2 === 0 ? '#E8541A' : '#0E9B9B', lineHeight: 1 }}>{item.year}</div>
                  <div>
                    <h4 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '1rem', color: '#111827', marginBottom: '.35rem' }}>{item.title}</h4>
                    <p style={{ fontSize: '.85rem', color: '#6B7280', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Leadership ────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#fff' }}>
        <div className="wrap">
          <Reveal style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <span className="badge badge-orange" style={{ marginBottom: '.75rem', display: 'inline-flex' }}>Leadership</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontSize: 'clamp(1.8rem,4vw,2.5rem)', color: '#111827' }}>The Team Behind It All</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1.5rem', maxWidth: 800, margin: '0 auto' }}>
            {team.map((p, i) => (
              <Reveal key={p.name} delay={i * 0.09}>
                <div className="card-l365" style={{ padding: '2rem', textAlign: 'center' }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: p.color, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: '1.5rem', color: '#fff' }}>
                    {p.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h4 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '.95rem', color: '#111827', marginBottom: '.25rem' }}>{p.name}</h4>
                  <p style={{ fontSize: '.78rem', color: p.color, fontWeight: 600 }}>{p.role}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section style={{ padding: '5rem 0', background: '#F9FAFB' }}>
        <div className="wrap">
          <Reveal style={{ marginBottom: '3rem', textAlign: 'center' }}>
            <span className="badge badge-green" style={{ marginBottom: '.75rem', display: 'inline-flex' }}>What Drives Us</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontSize: 'clamp(1.8rem,4vw,2.5rem)', color: '#111827' }}>Core Values</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(280px,1fr))', gap: '1rem' }}>
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.05}>
                <div className="card-l365" style={{ padding: '1.5rem', display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                  <div style={{ width: 40, height: 40, borderRadius: 8, background: 'rgba(232,84,26,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <v.icon size={17} style={{ color: '#E8541A' }} />
                  </div>
                  <div>
                    <h5 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '.9rem', color: '#111827', marginBottom: '.35rem' }}>{v.title}</h5>
                    <p style={{ fontSize: '.8rem', color: '#6B7280', lineHeight: 1.6 }}>{v.desc}</p>
                  </div>
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
              Partner with Logistics 365
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', maxWidth: 420, margin: '0 auto 2rem' }}>
              Two decades of expertise. A fresh approach. Let's build your supply chain together.
            </p>
            <Link to="/contact" className="btn" style={{ background: '#fff', color: '#0E9B9B' }}>
              Talk to an Expert <ArrowRight size={15} />
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
