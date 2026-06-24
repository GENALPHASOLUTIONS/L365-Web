import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const stats = [
  { value: '15+', label: 'Years Experience', icon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}><path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )},
  { value: '50+', label: 'Global Partners', icon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}><path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )},
  { value: '10K+', label: 'Shipments Done', icon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}><path d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )},
  { value: '365', label: 'Days a Year', icon: (
    <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7" stroke="currentColor" strokeWidth={1.5}><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round"/></svg>
  )},
]

const services = [
  {
    title: 'Sea Freight',
    desc: 'FCL & LCL ocean freight solutions connecting Sri Lanka to global ports with competitive rates.',
    gradient: 'from-[#0E9B9B] to-[#0a7a7a]',
    hoverGlow: 'shadow-[#0E9B9B]/30',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="white" strokeWidth={1.5}>
        <path d="M3 17l1-4h16l1 4M5 13V7h3V5h8v2h3v6M3 17h18M3 17l-1 2h20l-1-2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80',
  },
  {
    title: 'Air Freight',
    desc: 'Time-critical cargo delivered worldwide with express and economy air freight options.',
    gradient: 'from-[#E8541A] to-[#c9440f]',
    hoverGlow: 'shadow-[#E8541A]/30',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="white" strokeWidth={1.5}>
        <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
  },
  {
    title: 'Customs Clearance',
    desc: 'Expert customs brokerage for smooth, compliant border crossings and documentation.',
    gradient: 'from-[#7BC14A] to-[#5da030]',
    hoverGlow: 'shadow-[#7BC14A]/30',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="white" strokeWidth={1.5}>
        <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    img: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=600&q=80',
  },
  {
    title: 'Warehousing',
    desc: 'Secure bonded and non-bonded warehouse facilities with advanced inventory management.',
    gradient: 'from-[#0E9B9B] to-[#0a7a7a]',
    hoverGlow: 'shadow-[#0E9B9B]/30',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="white" strokeWidth={1.5}>
        <path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=600&q=80',
  },
  {
    title: 'Project Cargo',
    desc: 'Specialized heavy lift and out-of-gauge cargo solutions for complex industrial projects.',
    gradient: 'from-[#E8541A] to-[#c9440f]',
    hoverGlow: 'shadow-[#E8541A]/30',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="white" strokeWidth={1.5}>
        <path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
  },
  {
    title: 'Supply Chain',
    desc: 'End-to-end supply chain visibility and optimization for your entire logistics network.',
    gradient: 'from-[#7BC14A] to-[#5da030]',
    hoverGlow: 'shadow-[#7BC14A]/30',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8" stroke="white" strokeWidth={1.5}>
        <path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&q=80',
  },
]

const whyUs = [
  { icon: '🌐', title: 'Global Reach', desc: 'Connected to 150+ countries through our trusted partner network worldwide.' },
  { icon: '📡', title: 'Real-Time Tracking', desc: 'Monitor your shipment status 24/7 through our digital visibility platform.' },
  { icon: '✅', title: 'Compliance Ready', desc: 'Full regulatory compliance and expert documentation handling.' },
  { icon: '🕐', title: '24/7 Support', desc: 'Dedicated team available around the clock, every single day of the year.' },
]

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Logistics 365 (Pvt) Ltd",
  "url": "https://logistics365.lk",
  "logo": "https://logistics365.lk/logo.png",
  "description": "Premier freight forwarding company in Sri Lanka",
  "address": { "@type": "PostalAddress", "addressCountry": "LK", "addressLocality": "Colombo" },
  "contactPoint": { "@type": "ContactPoint", "contactType": "customer service", "availableLanguage": ["English", "Sinhala"] }
}

function ServiceCard({ s, i }: { s: typeof services[0], i: number }) {
  const [hovered, setHovered] = useState(false)
  return (
    <motion.div
      key={s.title}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.08 }}
      viewport={{ once: true }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ${hovered ? `shadow-2xl ${s.hoverGlow} -translate-y-2` : 'shadow-md'}`}
    >
      {/* Background image */}
      <div className="relative h-52 overflow-hidden">
        <img
          src={s.img}
          alt={s.title}
          className={`w-full h-full object-cover transition-transform duration-700 ${hovered ? 'scale-110' : 'scale-100'}`}
        />
        <div className={`absolute inset-0 bg-gradient-to-t from-[#0F1923] via-[#0F1923]/40 to-transparent transition-opacity duration-300`} />
        {/* Icon badge */}
        <div className={`absolute top-4 left-4 w-14 h-14 rounded-xl bg-gradient-to-br ${s.gradient} flex items-center justify-center shadow-lg`}>
          {s.icon}
        </div>
      </div>
      {/* Content */}
      <div className="bg-[#0F1923] p-6 relative">
        <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${s.gradient} transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`} />
        <h3 className={`text-xl font-black mb-2 transition-colors duration-300 ${hovered ? 'text-white' : 'text-gray-100'}`}>{s.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
        <div className={`flex items-center gap-2 text-sm font-bold transition-all duration-300 ${hovered ? 'gap-3' : ''}`}
          style={{ color: hovered ? '#fff' : '#6B7280' }}>
          <span className={`bg-gradient-to-r ${s.gradient} bg-clip-text text-transparent font-bold`}>Learn more</span>
          <svg className={`w-4 h-4 transition-transform duration-300 ${hovered ? 'translate-x-1' : ''}`} style={{ color: '#E8541A' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  )
}

export default function Home() {
  return (
    <>
      <SEO
        canonical="/"
        keywords="freight forwarding Sri Lanka, sea freight, air freight, customs clearance, logistics company Sri Lanka, cargo Sri Lanka"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F1923]">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1923]/95 via-[#0F1923]/75 to-[#0E9B9B]/40" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-[500px] h-[500px] rounded-full bg-[#E8541A]/8 blur-3xl"
            animate={{ x: [0, 80, 0], y: [0, -60, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            style={{ top: '10%', left: '-5%' }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] rounded-full bg-[#0E9B9B]/10 blur-3xl"
            animate={{ x: [0, -60, 0], y: [0, 80, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            style={{ bottom: '10%', right: '-5%' }}
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.span
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-[#E8541A]/15 border border-[#E8541A]/30 text-[#E8541A] text-xs font-bold tracking-widest uppercase px-5 py-2.5 rounded-full mb-8 backdrop-blur-sm"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8541A] animate-pulse" />
              Seamless Synergy
            </motion.span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.05] mb-6 tracking-tight">
              Global Freight<br />
              <span className="text-[#E8541A]">Forwarding</span>{' '}
              <span className="text-[#0E9B9B]">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Connecting Sri Lanka to the world with precision, reliability, and expertise — 365 days a year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services"
                className="group relative bg-[#E8541A] text-white px-9 py-4 rounded-full font-bold text-base overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#E8541A]/40 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Our Services
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </span>
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </Link>
              <Link to="/contact"
                className="group border-2 border-white/40 text-white px-9 py-4 rounded-full font-bold text-base backdrop-blur-sm hover:border-white hover:bg-white/10 transition-all duration-300">
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-9 border border-white/20 rounded-full flex justify-center pt-1.5">
            <motion.div className="w-1 h-2 bg-white/50 rounded-full" animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} />
          </div>
        </motion.div>
      </section>

      {/* Stats — dark with cards */}
      <section className="bg-[#0F1923] py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 hover:bg-white/10 border border-white/10 hover:border-[#0E9B9B]/40 rounded-2xl p-6 text-center transition-all duration-300 cursor-default"
            >
              <div className="flex justify-center mb-3 text-[#0E9B9B] opacity-60 group-hover:opacity-100 transition-opacity">
                {s.icon}
              </div>
              <div className="text-4xl md:text-5xl font-black text-white mb-1">{s.value}</div>
              <div className="text-gray-400 text-xs font-semibold tracking-widest uppercase">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services — dark cards with image hover */}
      <section className="py-28 bg-[#111820]">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <span className="inline-flex items-center gap-2 text-[#E8541A] font-bold text-xs tracking-widest uppercase">
              <span className="w-8 h-px bg-[#E8541A]" />
              What We Offer
              <span className="w-8 h-px bg-[#E8541A]" />
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-white mt-4 tracking-tight">Comprehensive Logistics<br />
              <span className="text-[#0E9B9B]">Services</span>
            </h2>
            <p className="text-gray-400 mt-4 max-w-xl mx-auto">End-to-end freight solutions tailored to your business needs</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
          </div>
          <div className="text-center mt-14">
            <Link to="/services"
              className="group inline-flex items-center gap-3 border border-[#0E9B9B]/40 text-[#0E9B9B] hover:bg-[#0E9B9B] hover:text-white px-8 py-4 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:shadow-[#0E9B9B]/20">
              Explore All Services
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-28 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#0E9B9B]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8541A]/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-20 items-center relative">
          {/* Left */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 text-[#E8541A] font-bold text-xs tracking-widest uppercase">
              <span className="w-6 h-px bg-[#E8541A]" />
              Why Choose Us
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mt-4 mb-4 tracking-tight leading-tight">
              Your Trusted<br /><span className="text-[#E8541A]">Logistics</span> Partner
            </h2>
            <p className="text-gray-500 mb-10 leading-relaxed text-lg">With over a decade of experience, Logistics 365 delivers seamless synergy between speed, reliability, and cost efficiency.</p>
            <div className="space-y-5">
              {whyUs.map((w, i) => (
                <motion.div
                  key={w.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group flex gap-5 p-4 rounded-2xl hover:bg-gray-50 transition-all duration-200 cursor-default border border-transparent hover:border-gray-100"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F1923] to-[#1a2d40] flex items-center justify-center text-xl flex-shrink-0 group-hover:scale-110 transition-transform duration-200 shadow-lg">
                    {w.icon}
                  </div>
                  <div>
                    <h4 className="font-black text-gray-900 text-base group-hover:text-[#E8541A] transition-colors">{w.title}</h4>
                    <p className="text-gray-500 text-sm mt-1 leading-relaxed">{w.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="mt-10">
              <Link to="/about"
                className="group inline-flex items-center gap-2 bg-[#0F1923] text-white px-7 py-3.5 rounded-full font-bold text-sm hover:bg-[#E8541A] transition-all duration-300">
                Learn About Us
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
              </Link>
            </div>
          </motion.div>
          {/* Right — image with floating badges */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80" alt="Cargo operations" className="w-full h-[500px] object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0F1923]/60 to-transparent" />
            </div>
            {/* Badge bottom left */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -left-6 bg-[#E8541A] text-white p-5 rounded-2xl shadow-2xl shadow-[#E8541A]/30"
            >
              <div className="text-4xl font-black">365</div>
              <div className="text-[10px] font-bold tracking-widest uppercase mt-0.5 text-orange-200">Days Support</div>
            </motion.div>
            {/* Badge top right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute -top-5 -right-5 bg-[#0E9B9B] text-white p-5 rounded-2xl shadow-2xl shadow-[#0E9B9B]/30"
            >
              <div className="text-4xl font-black">150+</div>
              <div className="text-[10px] font-bold tracking-widest uppercase mt-0.5 text-teal-100">Countries</div>
            </motion.div>
            {/* Floating card */}
            <motion.div
              animate={{ y: [-4, 4, -4] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-16 right-4 bg-white/95 backdrop-blur rounded-2xl p-4 shadow-xl border border-gray-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#7BC14A]/15 flex items-center justify-center text-lg">✅</div>
                <div>
                  <div className="text-xs font-black text-gray-900">ISO Certified</div>
                  <div className="text-[10px] text-gray-400">Quality Assured</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-28 bg-[#0F1923] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-br from-[#0F1923] via-[#0F1923]/90 to-[#E8541A]/20" />
        </div>
        {/* Animated glow */}
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-[#E8541A]/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity }}
          style={{ top: '50%', left: '50%', transform: 'translate(-50%,-50%)' }}
        />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <span className="inline-flex items-center gap-2 text-[#E8541A] font-bold text-xs tracking-widest uppercase mb-6">
              <span className="w-8 h-px bg-[#E8541A]" />
              Start Today
              <span className="w-8 h-px bg-[#E8541A]" />
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight">Ready to Ship<br /><span className="text-[#E8541A]">Globally?</span></h2>
            <p className="text-gray-300 text-xl mb-10 max-w-xl mx-auto leading-relaxed">Get a competitive freight quote within 24 hours. Our experts are standing by.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact"
                className="group relative bg-[#E8541A] text-white px-10 py-5 rounded-full font-black text-lg overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-[#E8541A]/40 hover:scale-105">
                <span className="relative z-10 flex items-center gap-2 justify-center">
                  Request a Quote
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                </span>
              </Link>
              <Link to="/network"
                className="border border-white/20 text-white px-10 py-5 rounded-full font-bold text-lg hover:border-white/50 hover:bg-white/5 transition-all duration-300">
                View Our Network
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
