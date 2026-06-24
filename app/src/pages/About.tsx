import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Shield, Globe, Award, Users, Zap, Heart } from 'lucide-react'

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

const team = [
  {
    name: 'Anuradha Sooriyaarachi',
    role: 'Managing Director',
    initials: 'AS',
    color: '#E8541A',
    bg: 'rgba(232,84,26,0.08)',
    desc: 'With over two decades at the helm of CL Synergy Limited, Anuradha drives the strategic vision of Logistics 365. His deep expertise in global freight, trade compliance and business development has shaped one of Sri Lanka\'s most trusted logistics brands. He leads the company with a philosophy of precision, reliability and long-term client partnerships.',
  },
  {
    name: 'Rahula Silva',
    role: 'Executive Director',
    initials: 'RS',
    color: '#0E9B9B',
    bg: 'rgba(14,155,155,0.08)',
    desc: 'Rahula oversees operational excellence across sea and air freight divisions. With a strong background in supply chain management and multi-modal logistics, he ensures that every shipment — from a single parcel to complex project cargo — is handled with the highest standard of care and efficiency.',
  },
  {
    name: 'Rachini Liyanage',
    role: 'Executive Director',
    initials: 'RL',
    color: '#7BC14A',
    bg: 'rgba(123,193,74,0.08)',
    desc: 'Rachini leads client relations, business development and compliance at Logistics 365. Her expertise in customs brokerage and trade regulations across South Asian and Middle Eastern markets has been instrumental in expanding the company\'s global footprint and maintaining its reputation for zero-error documentation.',
  },
]

const timeline = [
  { year: '2004', title: 'CL Synergy Founded',       desc: 'Established in Colombo as a full-service freight forwarding company, serving Sri Lanka\'s growing trade sector.' },
  { year: '2008', title: 'SLAFFA Membership',         desc: 'Officially recognised by the Sri Lanka Freight Forwarders Association, cementing industry credibility.' },
  { year: '2012', title: 'Global Network Expanded',   desc: 'Agent network grew to 80+ countries across all major ocean and air trade corridors worldwide.' },
  { year: '2018', title: 'ISO Certification',         desc: 'Achieved ISO-certified quality management systems — raising the standard across every operation.' },
  { year: '2022', title: '150+ Country Coverage',     desc: 'Full global coverage achieved on all major ocean and air corridors, serving clients across five continents.' },
  { year: '2024', title: 'Logistics 365 Launched',    desc: 'Rebranded as Logistics 365 (Pvt) Ltd — a new identity, fresh capabilities, same trusted foundation.' },
]

const values = [
  { icon: Shield, title: 'Integrity',    desc: 'Transparent dealings, no surprises — every commitment honoured.' },
  { icon: Zap,    title: 'Excellence',   desc: 'We continuously raise the bar in speed, accuracy and service quality.' },
  { icon: Heart,  title: 'Partnership',  desc: 'Every client is a long-term partner, not a one-time transaction.' },
  { icon: Globe,  title: 'Global Reach', desc: 'Local expertise, worldwide execution across 150+ countries.' },
  { icon: Users,  title: 'People First', desc: 'Our team is our biggest asset — we invest in their growth daily.' },
  { icon: Award,  title: 'Compliance',   desc: 'SLAFFA certified, licensed brokers, internationally compliant.' },
]

export default function About() {
  return (
    <div style={{ background: '#fff' }}>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(160deg, #0D1B2A 0%, #1a2f44 55%, #0E9B9B 150%)', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-5%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,84,26,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />
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
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.4rem' }}>🎯</div>
                <h3 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 800, fontSize: '1.4rem', color: '#fff', marginBottom: '1rem' }}>Our Mission</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontSize: '.9rem' }}>
                  To deliver seamless, reliable and cost-effective freight solutions that empower Sri Lankan and global businesses to compete — with the precision only two decades of experience can provide.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div style={{ background: '#0E9B9B', borderRadius: 16, padding: '2.5rem', height: '100%' }}>
                <div style={{ width: 48, height: 48, borderRadius: 12, background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem', fontSize: '1.4rem' }}>👁️</div>
                <h3 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 800, fontSize: '1.4rem', color: '#fff', marginBottom: '1rem' }}>Our Vision</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, fontSize: '.9rem' }}>
                  To be Sri Lanka's most trusted and innovative freight forwarder — recognised for supply chain excellence, digital transparency and unwavering commitment to client success.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Managing Director ─────────────────────────────── */}
      <section style={{ padding: '6rem 0', background: '#F9FAFB' }}>
        <div className="wrap">
          <Reveal style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <span className="badge badge-orange" style={{ marginBottom: '.875rem', display: 'inline-flex' }}>Leadership</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: '#111827' }}>
              The People Who <span style={{ color: '#E8541A' }}>Drive Logistics 365</span>
            </h2>
          </Reveal>

          {/* MD — full width showcase */}
          <Reveal>
            <div style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #1a2f44 100%)', borderRadius: 20, overflow: 'hidden', display: 'grid', gridTemplateColumns: 'auto 1fr', marginBottom: '3rem' }}>
              {/* Left orange accent */}
              <div style={{ width: 6, background: '#E8541A' }} />
              <div style={{ padding: '3rem 3.5rem', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: '3rem', alignItems: 'flex-start' }}>
                {/* Avatar column */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', flexShrink: 0, minWidth: 160 }}>
                  <div style={{ width: 120, height: 120, borderRadius: '50%', background: '#E8541A', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: '2.5rem', color: '#fff', boxShadow: '0 12px 40px rgba(232,84,26,0.45)' }}>
                    AS
                  </div>
                  <span style={{ background: 'rgba(232,84,26,0.15)', color: '#E8541A', padding: '6px 16px', borderRadius: 20, fontSize: '.7rem', fontWeight: 700, whiteSpace: 'nowrap', border: '1px solid rgba(232,84,26,0.3)' }}>Managing Director</span>
                </div>
                {/* Content */}
                <div>
                  <h3 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: '1.75rem', color: '#fff', marginBottom: '1.5rem' }}>
                    Anuradha Sooriyaarachi
                  </h3>
                  {/* Quote */}
                  <blockquote style={{ borderLeft: '4px solid #E8541A', paddingLeft: '1.25rem', marginBottom: '1.5rem' }}>
                    <p style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontStyle: 'italic', fontSize: '1.1rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, fontWeight: 500 }}>
                      "Logistics is not just about moving cargo — it's about moving businesses forward. For 20 years, we've built trust, one shipment at a time."
                    </p>
                  </blockquote>
                  <p style={{ fontSize: '.9rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8 }}>
                    With over two decades at the helm of CL Synergy Limited, Anuradha drives the strategic vision of Logistics 365. His deep expertise in global freight, trade compliance and business development has shaped one of Sri Lanka's most trusted logistics brands. He leads with a philosophy of precision, reliability and long-term client partnership — values that define every operation at Logistics 365.
                  </p>
                  <div style={{ marginTop: '1.5rem', display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
                    {['Strategic Vision', 'Global Trade', 'SLAFFA', '20+ Years'].map(t => (
                      <span key={t} style={{ background: 'rgba(232,84,26,0.12)', color: 'rgba(255,255,255,0.7)', padding: '4px 12px', borderRadius: 20, fontSize: '.7rem', fontWeight: 600 }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Executive Directors — 2-col grid */}
          <Reveal style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span className="badge badge-teal" style={{ display: 'inline-flex' }}>Executive Directors</span>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
            {[
              {
                name: 'Rahula Silva', initials: 'RS', color: '#0E9B9B', bg: 'rgba(14,155,155,0.08)',
                tags: ['Operations', 'Sea Freight', 'Air Freight'],
                desc: 'Rahula oversees operational excellence across sea and air freight divisions. With a strong background in supply chain management and multi-modal logistics, he ensures that every shipment — from a single parcel to complex project cargo — is handled with the highest standard of care and efficiency.',
              },
              {
                name: 'Rachini Liyanage', initials: 'RL', color: '#7BC14A', bg: 'rgba(123,193,74,0.08)',
                tags: ['Client Relations', 'Customs', 'Compliance'],
                desc: 'Rachini leads client relations, business development and compliance at Logistics 365. Her expertise in customs brokerage and trade regulations across South Asian and Middle Eastern markets has been instrumental in expanding the company\'s global footprint and maintaining its reputation for zero-error documentation.',
              },
            ].map((ed, i) => (
              <Reveal key={ed.name} delay={i * 0.1}>
                <div style={{ background: '#fff', border: `1.5px solid ${ed.color}22`, borderRadius: 16, overflow: 'hidden' }}>
                  <div style={{ height: 5, background: ed.color }} />
                  <div style={{ padding: '2rem 2rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.75rem', flexShrink: 0 }}>
                      <div style={{ width: 80, height: 80, borderRadius: '50%', background: ed.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: '1.5rem', color: '#fff', boxShadow: `0 8px 24px ${ed.color}44` }}>
                        {ed.initials}
                      </div>
                      <span style={{ background: ed.bg, color: ed.color, padding: '4px 10px', borderRadius: 20, fontSize: '.65rem', fontWeight: 700, whiteSpace: 'nowrap' }}>Executive Director</span>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 800, fontSize: '1.1rem', color: '#111827', marginBottom: '.75rem' }}>{ed.name}</h3>
                      <p style={{ fontSize: '.82rem', color: '#6B7280', lineHeight: 1.75, marginBottom: '1rem' }}>{ed.desc}</p>
                      <div style={{ display: 'flex', gap: '.5rem', flexWrap: 'wrap' }}>
                        {ed.tags.map(t => (
                          <span key={t} style={{ background: ed.bg, color: ed.color, padding: '3px 10px', borderRadius: 20, fontSize: '.65rem', fontWeight: 700 }}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Journey — centered timeline ───────────────── */}
      <section style={{ padding: '6rem 0', background: '#0D1B2A', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-10%', left: '50%', transform: 'translateX(-50%)', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,84,26,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <Reveal style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <span className="badge badge-teal" style={{ marginBottom: '.875rem', display: 'inline-flex' }}>Heritage</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: '#fff' }}>
              Our <span style={{ color: '#E8541A' }}>Journey</span>
            </h2>
          </Reveal>

          {/* Center vertical line */}
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, transparent, rgba(232,84,26,0.6), rgba(14,155,155,0.6), transparent)', transform: 'translateX(-50%)' }} />

            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0
              const accent = i % 3 === 0 ? '#E8541A' : i % 3 === 1 ? '#0E9B9B' : '#7BC14A'
              return (
                <Reveal key={item.year} delay={i * 0.08}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 48px 1fr', gap: '1.5rem', alignItems: 'center', marginBottom: '2rem' }}>
                    {/* Left slot */}
                    {isLeft ? (
                      <div style={{ textAlign: 'right' }}>
                        <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '1.5rem', display: 'inline-block', textAlign: 'left', maxWidth: 320 }}>
                          <div style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: '1.5rem', color: accent, marginBottom: '.5rem' }}>{item.year}</div>
                          <h4 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '.95rem', color: '#fff', marginBottom: '.4rem' }}>{item.title}</h4>
                          <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      </div>
                    ) : <div />}

                    {/* Center dot */}
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <div style={{ width: 16, height: 16, borderRadius: '50%', background: accent, boxShadow: `0 0 0 4px rgba(${accent === '#E8541A' ? '232,84,26' : accent === '#0E9B9B' ? '14,155,155' : '123,193,74'},0.25)`, zIndex: 1 }} />
                    </div>

                    {/* Right slot */}
                    {!isLeft ? (
                      <div>
                        <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 12, padding: '1.5rem', display: 'inline-block', maxWidth: 320 }}>
                          <div style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: '1.5rem', color: accent, marginBottom: '.5rem' }}>{item.year}</div>
                          <h4 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '.95rem', color: '#fff', marginBottom: '.4rem' }}>{item.title}</h4>
                          <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{item.desc}</p>
                        </div>
                      </div>
                    ) : <div />}
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── Values ───────────────────────────────────────── */}
      <section style={{ padding: '6rem 0', background: '#fff' }}>
        <div className="wrap">
          <Reveal style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-green" style={{ marginBottom: '.875rem', display: 'inline-flex' }}>What Drives Us</span>
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(2rem,4vw,3rem)', color: '#111827' }}>Core Values</h2>
          </Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06}>
                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 14, padding: '1.75rem', display: 'flex', gap: '1.25rem', alignItems: 'flex-start', transition: 'border-color .2s, background .2s' }}
                  onMouseEnter={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = '#E8541A'; d.style.background = '#FFF4F0' }}
                  onMouseLeave={e => { const d = e.currentTarget as HTMLDivElement; d.style.borderColor = '#E5E7EB'; d.style.background = '#F9FAFB' }}>
                  <div style={{ width: 42, height: 42, borderRadius: 10, background: 'rgba(232,84,26,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <v.icon size={18} style={{ color: '#E8541A' }} />
                  </div>
                  <div>
                    <h5 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '.9rem', color: '#111827', marginBottom: '.4rem' }}>{v.title}</h5>
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
            <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(1.6rem,3.5vw,2.25rem)', color: '#fff', marginBottom: '1rem' }}>Partner with Logistics 365</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: 420, margin: '0 auto 2rem' }}>Two decades of expertise. A fresh approach. Let's build your supply chain together.</p>
            <Link to="/contact" className="btn" style={{ background: '#fff', color: '#0E9B9B' }}>Talk to an Expert <ArrowRight size={15} /></Link>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
