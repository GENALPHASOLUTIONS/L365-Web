import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const stats = [
  { value: '20+', label: 'Years Industry Experience', color: '#E8541A', sub: 'via CL Synergy Limited' },
  { value: '20+', label: 'Comprehensive Services', color: '#0E9B9B', sub: 'End-to-end logistics' },
  { value: '150+', label: 'Countries Covered', color: '#E8541A', sub: 'Global partner network' },
  { value: '365', label: 'Days Service Commitment', color: '#0E9B9B', sub: '24/7 always operational' },
]

const services = [
  { title: 'Sea Freight', desc: 'FCL & LCL ocean freight connecting Sri Lanka to global ports with competitive rates and reliable weekly sailings.', accent: '#0E9B9B', img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80' },
  { title: 'Air Freight', desc: 'Time-critical cargo worldwide with express and economy options through major airline partnerships globally.', accent: '#E8541A', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80' },
  { title: 'Customs Brokerage', desc: 'Expert licensed customs house brokers ensuring smooth, compliant border crossings with full documentation.', accent: '#7BC14A', img: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=600&q=80' },
  { title: 'Warehousing', desc: 'Secure bonded and non-bonded warehouse facilities with advanced real-time inventory management systems.', accent: '#0E9B9B', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80' },
  { title: 'Project Cargo', desc: 'Specialized heavy lift and out-of-gauge cargo for complex industrial and infrastructure projects regionally.', accent: '#E8541A', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80' },
  { title: '3PL / 4PL Solutions', desc: 'Complete third and fourth party logistics outsourcing — from single functions to total supply chain management.', accent: '#7BC14A', img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80' },
]

const advantages = [
  { icon: '⏰', title: '24/7 Operational Support', desc: 'Round-the-clock customer service and shipment monitoring — every single day of the year.' },
  { icon: '👥', title: 'Experienced Professionals', desc: 'Our team has deep industry knowledge built on over two decades of freight forwarding excellence.' },
  { icon: '🎯', title: 'Customized Solutions', desc: 'Tailored logistics strategies designed around your unique business requirements and budget.' },
  { icon: '🌐', title: 'Global Partner Network', desc: 'Strong carrier and agent relationships ensuring competitive rates across 150+ countries worldwide.' },
  { icon: '📡', title: 'End-to-End Visibility', desc: 'Real-time tracking and shipment transparency from origin to final destination, always.' },
  { icon: '🛃', title: 'Fast Customs Clearance', desc: 'Expert brokerage for swift documentation processing and compliant border crossings.' },
]

const industries = [
  { name: 'Manufacturing', icon: '🏭' },
  { name: 'Retail & FMCG', icon: '🛒' },
  { name: 'Healthcare', icon: '🏥' },
  { name: 'Automotive', icon: '🚗' },
  { name: 'Electronics', icon: '💻' },
  { name: 'E-Commerce', icon: '📦' },
  { name: 'Construction', icon: '🏗️' },
  { name: 'Trading', icon: '🤝' },
]

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Logistics365 (Pvt) Ltd",
  "url": "https://www.log-365.com",
  "logo": "https://www.log-365.com/logo.png",
  "description": "Premier freight forwarding and logistics company in Sri Lanka — a subsidiary of CL Synergy Limited.",
  "telephone": "+94115300250",
  "email": "info@log-365.com",
  "address": { "@type": "PostalAddress", "streetAddress": "06th Floor, No. 30, Iceland Business Centre, R.A. De Mel Mawatha", "addressLocality": "Colombo 03", "addressCountry": "LK" },
}

export default function Home() {
  return (
    <>
      <SEO canonical="/" keywords="freight forwarding Sri Lanka, sea freight Colombo, air freight Sri Lanka, customs clearance, 3PL logistics, supply chain Sri Lanka" schema={schema} />

      {/* Hero */}
      <section className="relative overflow-hidden bg-[#0F1923]" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,25,35,0.97) 0%, rgba(15,25,35,0.82) 55%, rgba(14,155,155,0.15) 100%)' }} />
        <div className="relative z-10 wrap pt-20 pb-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-[#E8541A]/15 border border-[#E8541A]/30 text-[#E8541A] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-7">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8541A] animate-pulse" />
              Seamless Synergy. Reliable Logistics. 365 Days.
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Global Freight<br />
              <span className="text-[#E8541A]">Forwarding</span><br />
              <span className="text-[#0E9B9B]">Excellence</span>
            </h1>
            <p className="text-lg text-gray-300 mb-4 leading-relaxed max-w-lg">
              Sri Lanka's trusted freight partner — connecting Colombo to 150+ countries with precision, reliability, and expert logistics solutions.
            </p>
            <p className="text-sm text-gray-500 mb-10">
              A subsidiary of <span className="text-gray-300 font-semibold">CL Synergy Limited</span> — serving the freight forwarding industry since 2004.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="bg-[#E8541A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#c9440f] transition-all hover:shadow-xl hover:shadow-[#E8541A]/30 hover:-translate-y-0.5">
                Explore Services →
              </Link>
              <Link to="/contact" className="border-2 border-white/25 text-white px-8 py-4 rounded-full font-bold hover:border-white/60 hover:bg-white/8 transition-all">
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating contact pill */}
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.8, duration: 0.6 }}
          className="absolute bottom-24 right-8 hidden xl:block">
          <a href="tel:+94115300250" className="flex items-center gap-3 glass-card px-5 py-3.5 text-white hover:border-[#E8541A]/30 transition-all">
            <div className="w-8 h-8 rounded-full bg-[#E8541A]/20 flex items-center justify-center">
              <svg className="w-4 h-4 text-[#E8541A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
            </div>
            <div>
              <div className="text-xs text-gray-400">Call us anytime</div>
              <div className="text-sm font-bold">+94 11 530 0250</div>
            </div>
          </a>
        </motion.div>

        {/* Scroll hint */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2" style={{ transform: 'translateX(-50%)' }}>
          <div className="w-5 h-9 border border-white/25 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2.5 bg-white/40 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats bar */}
      <section className="bg-white border-b border-gray-100">
        <div className="wrap py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="text-center">
              <div className="text-4xl md:text-5xl font-black mb-1" style={{ color: s.color }}>{s.value}</div>
              <div className="font-bold text-gray-900 text-sm">{s.label}</div>
              <div className="text-gray-400 text-xs mt-0.5">{s.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About snippet */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="wrap grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-3">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 leading-tight">
              Sri Lanka's Freight<br />Forwarding Experts
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Logistics365 (Pvt) Ltd</strong> is a modern logistics and freight management company delivering end-to-end supply chain solutions. Established in April 2024 and built on the 20-year legacy of <strong>CL Synergy Limited</strong>, we provide stable, uninterrupted logistics that power global trade.
            </p>
            <p className="text-gray-600 leading-relaxed mb-7">
              From our headquarters at Iceland Business Centre, Colombo 03 — we connect Sri Lankan businesses to the world through sea freight, air freight, customs clearance, warehousing, and beyond.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Client First', 'Integrity', 'Excellence', 'Collaboration'].map(v => (
                <span key={v} className="flex items-center gap-1.5 text-sm font-semibold text-gray-700 bg-white border border-gray-200 px-4 py-2 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#E8541A]" />{v}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80"
              alt="Cargo operations" className="rounded-2xl shadow-2xl w-full object-cover" style={{ height: '420px' }} />
            <div className="absolute -bottom-5 -left-5 bg-[#E8541A] text-white p-5 rounded-2xl shadow-xl">
              <div className="text-3xl font-black">365</div>
              <div className="text-xs font-bold tracking-wider uppercase opacity-80 mt-0.5">Days Service</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white text-gray-900 p-4 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-xs font-bold text-[#0E9B9B]">Est. 2004</div>
              <div className="text-base font-black">CL Synergy</div>
              <div className="text-xs text-gray-400">20+ yrs experience</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white">
        <div className="wrap">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">20+ Logistics Services</h2>
            <p className="text-gray-500 mt-3" style={{ maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
              Comprehensive freight solutions from sea and air to customs, warehousing, and complete supply chain management
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100 card-lift">
                <div className="relative h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-3 left-4 text-white font-black text-base">{s.title}</div>
                </div>
                <div className="p-5" style={{ borderTop: `3px solid ${s.accent}` }}>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-sm font-bold transition-colors group-hover:gap-2"
                    style={{ color: s.accent }}>
                    Learn more
                    <svg className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 border-2 border-[#0E9B9B] text-[#0E9B9B] px-8 py-3.5 rounded-full font-bold hover:bg-[#0E9B9B] hover:text-white transition-all">
              View All 20+ Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-[#0F1923] relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553413077-190dd305871c?w=1920&q=80')" }} />
        <div className="relative z-10 wrap">
          <div className="text-center mb-14">
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-2">Our Advantages</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Why Choose Logistics365?</h2>
            <p className="text-gray-400 mt-2">Competitive advantages that set us apart in the Sri Lankan logistics industry</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advantages.map((a, i) => (
              <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                className="glass-card p-6 hover:border-white/25 transition-all card-lift group">
                <div className="text-3xl mb-4">{a.icon}</div>
                <h4 className="text-white font-black mb-2">{a.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-white">
        <div className="wrap">
          <div className="text-center mb-12">
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-2">Who We Serve</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Industries We Serve</h2>
            <p className="text-gray-500 mt-2">Specialized logistics solutions for every major industry sector</p>
          </div>
          <div className="grid grid-cols-4 md:grid-cols-8 gap-4">
            {industries.map((ind, i) => (
              <motion.div key={ind.name} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}
                className="text-center p-4 rounded-2xl border border-gray-100 hover:border-[#E8541A]/20 hover:shadow-md transition-all card-lift cursor-default">
                <div className="text-3xl mb-2">{ind.icon}</div>
                <div className="text-gray-700 font-semibold text-xs leading-tight">{ind.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Freight facts / marketing */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="wrap grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=800&q=80"
              alt="World trade" className="rounded-2xl shadow-xl w-full object-cover" style={{ height: '380px' }} />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-3">The Logistics Advantage</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5">
              Your Supply Chain is<br />Your Competitive Edge
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              In today's interconnected global marketplace, businesses require more than just transportation — they need a strategic partner who understands the complexities of international trade, customs regulations, and supply chain optimization.
            </p>
            <div className="space-y-4">
              {[
                { icon: '🚀', text: '90% of world trade moves by sea — getting the right freight partner means lower costs and faster delivery.' },
                { icon: '⚡', text: 'Delays at customs can cost thousands per day. Our licensed brokers ensure swift clearance every time.' },
                { icon: '📊', text: 'End-to-end supply chain visibility reduces inventory costs by up to 25% for our clients.' },
              ].map((f, i) => (
                <div key={i} className="flex gap-4 p-4 rounded-xl bg-white border border-gray-100 hover:shadow-sm transition-all">
                  <span className="text-2xl">{f.icon}</span>
                  <p className="text-gray-600 text-sm leading-relaxed">{f.text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-[#0F1923] relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-8" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80')" }} />
        <div className="absolute left-0 top-0 bottom-0 w-1/3" style={{ background: 'linear-gradient(to right, rgba(232,84,26,0.08), transparent)' }} />
        <div className="relative z-10 wrap text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-4">Start Today</p>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Ready to Ship Globally?</h2>
            <p className="text-gray-400 text-lg mb-2">Get a competitive freight quote within 24 hours from our expert team.</p>
            <p className="text-gray-500 text-sm mb-10">📞 +94 11 530 0250 &nbsp;|&nbsp; ✉️ info@log-365.com</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="bg-[#E8541A] text-white px-10 py-4 rounded-full font-black text-lg hover:bg-[#c9440f] hover:shadow-xl hover:shadow-[#E8541A]/30 transition-all hover:-translate-y-0.5">
                Request a Quote →
              </Link>
              <Link to="/network" className="border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:border-white/50 hover:bg-white/5 transition-all">
                Our Global Network
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
