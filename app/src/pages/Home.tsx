import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { Ship, Plane, Package, Truck, FileCheck, Globe, Warehouse, Layers, ArrowRight, Shield, Clock, Award, CheckCircle, Star } from 'lucide-react'

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

const services = [
  { icon: Ship,      title: 'Sea Freight',         desc: 'FCL and LCL solutions for bulk cargo with cost-efficient routing across major global ports.',      color: 'bg-orange-50', iconBg: 'bg-[#E8541A]' },
  { icon: Plane,     title: 'Air Freight',          desc: 'Time-critical shipments handled with precision — express, consolidated and charter options.',      color: 'bg-teal-50',   iconBg: 'bg-[#0E9B9B]' },
  { icon: FileCheck, title: 'Customs Brokerage',    desc: 'End-to-end import/export clearance by licensed professionals with zero-error documentation.',      color: 'bg-orange-50', iconBg: 'bg-[#E8541A]' },
  { icon: Warehouse, title: 'Warehousing',          desc: 'Bonded and general warehousing with temperature control, pick-and-pack, and real-time inventory.', color: 'bg-teal-50',   iconBg: 'bg-[#0E9B9B]' },
  { icon: Layers,    title: '3PL / 4PL Solutions', desc: 'Fully integrated supply chain management — from procurement to last-mile delivery.',               color: 'bg-orange-50', iconBg: 'bg-[#E8541A]' },
  { icon: Package,   title: 'Project Cargo',        desc: 'Heavy-lift and oversized cargo handled with specialised equipment and watertight planning.',        color: 'bg-teal-50',   iconBg: 'bg-[#0E9B9B]' },
]

const stats = [
  { value: '20+',  label: 'Years Heritage' },
  { value: '150+', label: 'Countries Served' },
  { value: '24/7', label: 'Operations' },
  { value: '500+', label: 'Clients Worldwide' },
]

const sparklePos = [
  { top: '12%', left: '8%',  delay: 0,   size: 18 },
  { top: '20%', left: '88%', delay: 0.4, size: 14 },
  { top: '55%', left: '5%',  delay: 0.8, size: 22 },
  { top: '70%', left: '92%', delay: 0.2, size: 16 },
  { top: '80%', left: '15%', delay: 1.0, size: 12 },
  { top: '35%', left: '95%', delay: 0.6, size: 20 },
  { top: '88%', left: '80%', delay: 1.2, size: 14 },
  { top: '10%', left: '50%', delay: 0.3, size: 10 },
]

export default function Home() {
  return (
    <div style={{ background: '#F6F5F2' }}>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0" style={{ background: '#0D1B2A' }} />
          <div className="absolute bottom-0 right-0 w-full h-full"
            style={{ background: 'linear-gradient(135deg, #0D1B2A 55%, #F6F5F2 55%)' }} />
        </div>
        <div className="absolute top-20 right-[30%] w-72 h-72 rounded-full border-2 border-white/5 z-0" />
        <div className="absolute top-32 right-[28%] w-48 h-48 rounded-full z-0" style={{ border: '1px solid rgba(232,84,26,0.12)' }} />
        <div className="absolute -bottom-10 left-20 w-96 h-96 rounded-full z-0 blur-3xl" style={{ background: 'rgba(232,84,26,0.06)' }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 py-32 grid md:grid-cols-2 gap-12 items-center w-full">
          <div>
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
                style={{ background: 'rgba(232,84,26,0.15)', color: '#E8541A' }}>
                Logistics 365 · CL Synergy Group
              </span>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold text-white leading-[1.08] mb-6">
                Cargo Moves.<br />
                <span style={{ color: '#E8541A' }}>World Turns.</span>
              </h1>
              <p className="text-lg md:text-xl leading-relaxed mb-10 max-w-lg" style={{ color: 'rgba(255,255,255,0.65)' }}>
                Sri Lanka's premier freight forwarder — sea, air, customs, warehousing and end-to-end supply chain solutions. Built on 20+ years of CL Synergy heritage.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/services"
                  className="glow-btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white"
                  style={{ background: '#E8541A' }}>
                  Explore Services <ArrowRight size={16} />
                </Link>
                <Link to="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 border-white font-bold text-sm text-white hover:bg-white hover:text-[#0D1B2A] transition-colors">
                  <Ship size={16} /> Get a Quote
                </Link>
              </div>
            </motion.div>
          </div>

          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:flex justify-center items-center">
            <div className="float relative">
              <div className="bg-white rounded-3xl p-10 flex flex-col items-center gap-6"
                style={{ boxShadow: '0 32px 80px rgba(13,27,42,0.2)' }}>
                <img src="/l365-logo.png" alt="Logistics 365" className="h-20 w-auto object-contain" />
                <div className="h-px w-full bg-slate-100" />
                <div className="grid grid-cols-2 gap-3 w-full">
                  {['🇱🇰 Sri Lanka', '🇦🇪 UAE', '🇸🇬 Singapore', '🌍 Worldwide'].map(o => (
                    <div key={o} className="flex items-center gap-2 bg-slate-50 rounded-xl px-3 py-2 text-xs font-medium" style={{ color: '#0D1B2A' }}>{o}</div>
                  ))}
                </div>
                <div className="w-full rounded-2xl p-4 text-center" style={{ background: '#E8541A' }}>
                  <p className="text-white text-xs font-bold tracking-widest uppercase">20+ Years of Excellence</p>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10" style={{ background: '#0E9B9B' }} />
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1" style={{ color: 'rgba(255,255,255,0.4)' }}>
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-8 animate-pulse" style={{ background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)' }} />
        </motion.div>
      </section>

      {/* ── STATS STRIP ─────────────────────────────────────── */}
      <section style={{ background: '#0D1B2A' }} className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <FadeUp key={s.label} delay={i * 0.1}>
              <div className="flex flex-col items-center text-center py-8 px-4 border-r border-white/10 last:border-0">
                <div className="text-4xl md:text-5xl font-extrabold leading-none" style={{ color: '#E8541A' }}>{s.value}</div>
                <div className="text-sm mt-2 font-medium" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</div>
              </div>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* ── 20 YEARS MILESTONE ──────────────────────────────── */}
      <section className="relative overflow-hidden py-28 px-4"
        style={{ background: 'linear-gradient(135deg, #091420 0%, #0D1B2A 40%, #112233 70%, #091420 100%)' }}>

        {sparklePos.map((s, i) => (
          <motion.div key={i} style={{ position: 'absolute', top: s.top, left: s.left }}
            animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.4, 1, 0.4], rotate: [0, 180, 360] }}
            transition={{ duration: 2.5, delay: s.delay, repeat: Infinity, ease: 'easeInOut' }}>
            <Star size={s.size} fill="#E8541A" style={{ color: '#E8541A' }} />
          </motion.div>
        ))}

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
          <motion.div animate={{ scale: [1, 1.12, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 3, repeat: Infinity }}
            className="w-80 h-80 rounded-full" style={{ border: '2px solid #E8541A' }} />
          <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.08, 0.2, 0.08] }} transition={{ duration: 3.5, repeat: Infinity }}
            className="absolute inset-0 scale-125 w-80 h-80 rounded-full" style={{ border: '1px solid #E8541A' }} />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full border text-xs font-bold tracking-widest uppercase mb-8"
              style={{ borderColor: 'rgba(232,84,26,0.4)', background: 'rgba(232,84,26,0.1)', color: '#E8541A' }}>
              ✦ CL Synergy Heritage
            </span>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.5 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
            transition={{ duration: 0.7, type: 'spring', bounce: 0.3 }} className="relative inline-block mb-4">
            <span className="font-extrabold leading-none select-none"
              style={{ fontSize: 'clamp(120px,20vw,200px)', color: '#E8541A', textShadow: '0 0 80px rgba(232,84,26,0.5), 0 0 160px rgba(232,84,26,0.25)' }}>
              20
            </span>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 -mt-4">Years of Excellence</h2>
            <p className="text-lg max-w-2xl mx-auto mb-12" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Since 2004, CL Synergy Limited built a legacy of freight excellence. In 2024, Logistics 365 (Pvt) Ltd was born — carrying forward two decades of trust, relationships and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { year: '2004', label: 'CL Synergy Founded in Colombo' },
              { year: '2010', label: 'Expanded to 150+ country network' },
              { year: '2020', label: 'ISO certified operations' },
              { year: '2024', label: 'Logistics 365 launched' },
            ].map((m, i) => (
              <motion.div key={m.year}
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="rounded-2xl p-5 text-center hover:bg-white/10 transition-colors"
                style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div className="font-extrabold text-2xl" style={{ color: '#E8541A' }}>{m.year}</div>
                <div className="text-xs mt-2 leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>{m.label}</div>
              </motion.div>
            ))}
          </div>

          <Link to="/about" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white"
            style={{ background: '#E8541A', boxShadow: '0 8px 32px rgba(232,84,26,0.35)' }}>
            Our Story <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* ── ABOUT STRIP ─────────────────────────────────────── */}
      <section className="py-24 px-4" style={{ background: '#F6F5F2' }}>
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <FadeUp>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden aspect-[4/3] relative"
                style={{ boxShadow: '0 32px 60px rgba(13,27,42,0.15)' }}>
                <div className="absolute inset-0 flex items-center justify-center"
                  style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #152436 100%)' }}>
                  <div className="text-center p-10">
                    <Ship size={80} style={{ color: '#E8541A', margin: '0 auto 24px' }} />
                    <p className="text-white text-2xl font-extrabold">Port Colombo Hub</p>
                    <p className="mt-2 text-sm" style={{ color: 'rgba(255,255,255,0.5)' }}>South Asia's Premier Transshipment Port</p>
                  </div>
                </div>
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(13,27,42,0.9) 0%, transparent 50%)' }} />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8541A' }}>Who We Are</span>
                  <h2 className="text-2xl font-extrabold text-white mt-2 mb-3">Sri Lanka's Trusted<br /><span style={{ color: '#E8541A' }}>Freight Forwarder</span></h2>
                  <div className="grid grid-cols-2 gap-2">
                    {['Sea & Air Freight', 'Project Cargo', 'Customs Brokerage', 'Supply Chain'].map(f => (
                      <div key={f} className="flex items-start gap-2 text-xs" style={{ color: 'rgba(255,255,255,0.7)' }}>
                        <CheckCircle size={12} style={{ color: '#E8541A', marginTop: 2, flexShrink: 0 }} /> {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 rounded-2xl -z-10" style={{ background: '#0E9B9B' }} />
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8541A' }}>20+ Years of Excellence</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-6" style={{ color: '#0D1B2A' }}>Why Choose Logistics 365?</h2>
            <div className="space-y-5">
              {[
                { icon: Shield, title: 'Reliable & Punctual',   desc: 'Built on proven CL Synergy systems — we deliver on-time, every time.' },
                { icon: Globe,  title: 'Global Reach',          desc: '150+ countries, trusted agent network, and NVOCC capabilities worldwide.' },
                { icon: Award,  title: 'Industry Accredited',   desc: 'SLAFFA member, customs-licensed brokers, fully compliant internationally.' },
                { icon: Clock,  title: '24/7 / 365 Operations', desc: 'Real-time tracking, instant escalation, round-the-clock customer support.' },
              ].map(f => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 mt-0.5 transition-all hover:scale-110"
                    style={{ background: 'rgba(13,27,42,0.06)' }}>
                    <f.icon size={18} style={{ color: '#0D1B2A' }} />
                  </div>
                  <div>
                    <div className="font-bold text-sm" style={{ color: '#0D1B2A' }}>{f.title}</div>
                    <div className="text-sm mt-1 leading-relaxed text-slate-500">{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────── */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8541A' }}>What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-extrabold mt-3" style={{ color: '#0D1B2A' }}>Our Services</h2>
            <p className="text-slate-500 mt-4 max-w-xl mx-auto">Comprehensive freight forwarding and logistics solutions for the modern supply chain.</p>
          </FadeUp>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((s, i) => (
              <FadeUp key={s.title} delay={i * 0.07}>
                <div className={`card p-8 ${s.color} flex flex-col h-full`}>
                  <div className={`w-14 h-14 rounded-2xl ${s.iconBg} flex items-center justify-center mb-5 shadow-lg shrink-0`}>
                    <s.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-extrabold mb-2" style={{ color: '#0D1B2A' }}>{s.title}</h3>
                  <p className="text-sm leading-relaxed text-slate-500 flex-1">{s.desc}</p>
                  <Link to="/services" className="mt-5 inline-flex items-center gap-1 text-sm font-bold" style={{ color: '#E8541A' }}>
                    Learn more <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeUp>
            ))}
          </div>
          <FadeUp className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white"
              style={{ background: '#E8541A', boxShadow: '0 8px 24px rgba(232,84,26,0.3)' }}>
              View All Services <ArrowRight size={16} />
            </Link>
          </FadeUp>
        </div>
      </section>

      {/* ── INDUSTRIES — dark stripe ─────────────────────── */}
      <section className="py-20 px-4 stripe-bg">
        <div className="max-w-7xl mx-auto">
          <FadeUp className="text-center mb-12">
            <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8541A' }}>Industries We Serve</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mt-3">Sector Expertise</h2>
          </FadeUp>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[['🏭','Manufacturing'],['🏥','Pharma & Healthcare'],['👗','Fashion & Retail'],['💻','Technology'],
              ['🛢️','Energy & Chemicals'],['🍎','Perishables'],['🔧','Machinery'],['🌾','Agriculture']].map(([icon, label]) => (
              <FadeUp key={label as string}>
                <div className="rounded-2xl p-5 text-center hover:-translate-y-1 transition-transform"
                  style={{ background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <div className="text-3xl mb-2">{icon}</div>
                  <div className="text-sm font-semibold text-white">{label}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────── */}
      <section className="py-20 px-4 text-center" style={{ background: '#F6F5F2' }}>
        <FadeUp>
          <span className="text-xs font-bold tracking-widest uppercase" style={{ color: '#E8541A' }}>Ready to Ship?</span>
          <h2 className="text-3xl md:text-5xl font-extrabold mt-3 mb-4" style={{ color: '#0D1B2A' }}>
            Let's Move Your Cargo<br /><span style={{ color: '#0E9B9B' }}>Anywhere in the World</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-8">
            Talk to our freight experts today. We'll design a solution that fits your timeline, budget and compliance requirements.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="glow-btn inline-flex items-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white"
              style={{ background: '#E8541A' }}>
              Get a Free Quote <ArrowRight size={16} />
            </Link>
            <a href="tel:+94115300250" className="inline-flex items-center gap-2 px-8 py-4 rounded-full border-2 font-bold text-sm"
              style={{ borderColor: '#0D1B2A', color: '#0D1B2A' }}>
              📞 +94 11 530 0250
            </a>
          </div>
        </FadeUp>
      </section>
    </div>
  )
}
