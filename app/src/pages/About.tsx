import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { ArrowRight, Shield, Globe, Award, Users, Target, Eye, Heart, Zap } from 'lucide-react'

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

const team = [
  { name: 'Anuradha Sooriyaarachi', role: 'Managing Director', initials: 'AS', color: '#E8541A' },
  { name: 'Rahula Silva',            role: 'Executive Director',  initials: 'RS', color: '#0E9B9B' },
  { name: 'Rachini Liyanage',        role: 'Executive Director',  initials: 'RL', color: '#7BC14A' },
]

const values = [
  { icon: Shield, title: 'Integrity',    desc: 'Honest, transparent dealings in every transaction — no hidden fees, no surprises.' },
  { icon: Zap,    title: 'Excellence',   desc: 'We continuously raise the bar in service quality, speed, and accuracy.' },
  { icon: Heart,  title: 'Partnership',  desc: 'We treat every client as a long-term partner, not a transaction.' },
  { icon: Globe,  title: 'Global Reach', desc: 'Local expertise with a global network spanning 150+ countries.' },
  { icon: Users,  title: 'People First', desc: 'Our team is our greatest asset — we invest in their growth and wellbeing.' },
  { icon: Award,  title: 'Compliance',   desc: 'Fully licensed, SLAFFA-certified, and internationally compliant.' },
]

export default function About() {
  return (
    <div style={{ background: '#F6F5F2' }}>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-40 pb-24 px-4"
        style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #152436 60%, #0D1B2A 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: '#E8541A' }} />
        <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full blur-3xl opacity-10" style={{ background: '#0E9B9B' }} />
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(232,84,26,0.15)', color: '#E8541A' }}>
              Our Story
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.08] mb-6">
              Built on 20 Years of<br /><span style={{ color: '#E8541A' }}>Freight Excellence</span>
            </h1>
            <p className="text-lg max-w-2xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Logistics 365 (Pvt) Ltd is the evolution of CL Synergy Limited — carrying forward two decades of trust, networks and expertise into a new era of freight forwarding.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MISSION / VISION ────────────────────────────────── */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <FadeUp>
            <div className="rounded-3xl p-10 h-full" style={{ background: 'linear-gradient(135deg, #E8541A 0%, #c7431a 100%)' }}>
              <Target size={40} className="text-white mb-6 opacity-80" />
              <h3 className="text-2xl font-extrabold text-white mb-4">Our Mission</h3>
              <p className="text-white/80 leading-relaxed text-base">
                To deliver seamless, reliable and cost-effective freight forwarding and logistics solutions that empower businesses to compete globally — with the precision, transparency and care that only 20+ years of experience can provide.
              </p>
            </div>
          </FadeUp>
          <FadeUp delay={0.1}>
            <div className="rounded-3xl p-10 h-full" style={{ background: 'linear-gradient(135deg, #0E9B9B 0%, #0a7a7a 100%)' }}>
              <Eye size={40} className="text-white mb-6 opacity-80" />
              <h3 className="text-2xl font-extrabold text-white mb-4">Our Vision</h3>
              <p className="text-white/80 leading-relaxed text-base">
                To be Sri Lanka's most trusted and innovative freight forwarder — renowned for our end-to-end supply chain excellence, digital transparency, and unwavering commitment to client success across every corridor of global trade.
              </p>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── TIMELINE ────────────────────────────────────────── */}
      <section className="py-24 px-4 stripe-bg">
        <div className="max-w-4xl mx-auto">
          <FadeUp className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8541A' }}>Heritage</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">Our Journey</h2>
          </FadeUp>
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px -translate-x-1/2" style={{ background: 'rgba(232,84,26,0.3)' }} />
            {[
              { year: '2004', title: 'CL Synergy Founded',        desc: 'Established in Colombo as a full-service freight forwarding company.', side: 'left' },
              { year: '2008', title: 'SLAFFA Membership',         desc: 'Officially recognized by the Sri Lanka Freight Forwarders Association.', side: 'right' },
              { year: '2012', title: 'Global Network Expansion',  desc: 'Network grew to 80+ countries with key agent partnerships.', side: 'left' },
              { year: '2018', title: 'ISO Certification',         desc: 'Achieved ISO-certified operations for quality management systems.', side: 'right' },
              { year: '2022', title: '150+ Country Network',      desc: 'Expanded reach to 150+ countries across all major trade lanes.', side: 'left' },
              { year: '2024', title: 'Logistics 365 Launched',    desc: 'Rebranded as Logistics 365 (Pvt) Ltd — a new chapter of innovation.', side: 'right' },
            ].map((item, i) => (
              <FadeUp key={item.year} delay={i * 0.08}>
                <div className={`relative flex items-start gap-6 mb-10 ${item.side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  <div className="flex-1 hidden md:block" />
                  <div className="relative z-10 w-12 h-12 rounded-full flex items-center justify-center shrink-0 font-extrabold text-xs"
                    style={{ background: '#E8541A', color: 'white', boxShadow: '0 0 0 4px rgba(232,84,26,0.2)' }}>
                    {item.year.slice(2)}
                  </div>
                  <div className={`flex-1 rounded-2xl p-6 ${item.side === 'right' ? 'md:text-right' : ''}`}
                    style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.1)' }}>
                    <div className="font-bold text-xs mb-1" style={{ color: '#E8541A' }}>{item.year}</div>
                    <div className="font-extrabold text-white mb-2">{item.title}</div>
                    <div className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>{item.desc}</div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── TEAM ────────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8541A' }}>Leadership</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3" style={{ color: '#0D1B2A' }}>The Team Behind Logistics 365</h2>
          </FadeUp>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {team.map((p, i) => (
              <FadeUp key={p.name} delay={i * 0.1}>
                <div className="card p-8 text-center">
                  <div className="w-20 h-20 rounded-full flex items-center justify-center text-2xl font-extrabold text-white mx-auto mb-5"
                    style={{ background: p.color }}>
                    {p.initials}
                  </div>
                  <h3 className="font-extrabold text-lg" style={{ color: '#0D1B2A' }}>{p.name}</h3>
                  <p className="text-sm mt-1" style={{ color: '#E8541A' }}>{p.role}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── VALUES ──────────────────────────────────────────── */}
      <section className="py-24 px-4" style={{ background: '#F6F5F2' }}>
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8541A' }}>What Drives Us</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3" style={{ color: '#0D1B2A' }}>Core Values</h2>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <FadeUp key={v.title} delay={i * 0.06}>
                <div className="card p-7 flex gap-5">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(232,84,26,0.1)' }}>
                    <v.icon size={18} style={{ color: '#E8541A' }} />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-sm mb-1" style={{ color: '#0D1B2A' }}>{v.title}</h4>
                    <p className="text-xs leading-relaxed text-slate-500">{v.desc}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 px-4 text-center" style={{ background: '#0D1B2A' }}>
        <FadeUp>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">Partner with Logistics 365</h2>
          <p className="text-slate-400 max-w-lg mx-auto mb-8">
            Two decades of expertise. A fresh approach. Let's build your supply chain together.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white"
            style={{ background: '#E8541A', boxShadow: '0 8px 32px rgba(232,84,26,0.3)' }}>
            Talk to an Expert <ArrowRight size={16} />
          </Link>
        </FadeUp>
      </section>
    </div>
  )
}
