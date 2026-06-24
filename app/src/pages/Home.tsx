import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const stats = [
  { value: '15+', label: 'Years Experience', color: '#E8541A' },
  { value: '50+', label: 'Global Partners', color: '#0E9B9B' },
  { value: '10K+', label: 'Shipments Delivered', color: '#E8541A' },
  { value: '365', label: 'Days a Year', color: '#0E9B9B' },
]

const services = [
  { title: 'Sea Freight', desc: 'FCL & LCL ocean freight connecting Sri Lanka to global ports with competitive rates and reliable schedules.', accent: '#0E9B9B', img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=500&q=80',
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}><path d="M3 17l1-4h16l1 4M5 13V7h3V5h8v2h3v6M3 17h18" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: 'Air Freight', desc: 'Time-critical cargo worldwide with express and economy options through major airline partnerships.', accent: '#E8541A', img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&q=80',
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}><path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: 'Customs Clearance', desc: 'Expert customs brokerage ensuring smooth, compliant border crossings with complete documentation support.', accent: '#7BC14A', img: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=500&q=80',
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}><path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: 'Warehousing', desc: 'Secure bonded and non-bonded warehouse facilities with advanced real-time inventory management systems.', accent: '#0E9B9B', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=500&q=80',
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}><path d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: 'Project Cargo', desc: 'Specialized heavy lift and out-of-gauge cargo for complex industrial and infrastructure projects.', accent: '#E8541A', img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500&q=80',
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}><path d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { title: 'Supply Chain', desc: 'End-to-end supply chain visibility, planning and optimization for your entire logistics network.', accent: '#7BC14A', img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=500&q=80',
    icon: <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6" stroke="currentColor" strokeWidth={2}><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/></svg> },
]

const whyUs = [
  { title: 'Global Network', desc: 'Connected to 150+ countries via trusted partners worldwide.', icon: '🌐' },
  { title: 'Live Tracking', desc: 'Real-time shipment visibility through our digital platform.', icon: '📡' },
  { title: 'Compliance', desc: 'Expert regulatory and customs documentation handling.', icon: '✅' },
  { title: '24/7 Support', desc: 'Our team is available every day of the year for you.', icon: '🕐' },
]

const schema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Logistics 365 (Pvt) Ltd",
  "url": "https://logistics365.lk",
  "logo": "https://logistics365.lk/logo.png",
  "description": "Premier freight forwarding company in Sri Lanka",
  "address": { "@type": "PostalAddress", "addressCountry": "LK", "addressLocality": "Colombo" },
}

export default function Home() {
  return (
    <>
      <SEO canonical="/" keywords="freight forwarding Sri Lanka, sea freight, air freight, customs clearance, logistics company Sri Lanka" schema={schema} />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0F1923] pt-28">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1923]/95 via-[#0F1923]/80 to-[#0F1923]/50" />
        <div className="relative z-10 wrap py-20">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="max-w-2xl">
            <span className="inline-flex items-center gap-2 bg-[#E8541A]/15 border border-[#E8541A]/30 text-[#E8541A] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8541A] animate-pulse" />
              Seamless Synergy
            </span>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-6">
              Global Freight<br />
              <span className="text-[#E8541A]">Forwarding</span><br />
              <span className="text-[#0E9B9B]">Solutions</span>
            </h1>
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-lg">
              Connecting Sri Lanka to the world with precision, reliability, and expertise — 365 days a year.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/services" className="bg-[#E8541A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#c9440f] transition-all hover:shadow-xl hover:shadow-[#E8541A]/30 hover:-translate-y-0.5">
                Our Services →
              </Link>
              <Link to="/contact" className="border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold hover:border-white hover:bg-white/10 transition-all">
                Get a Free Quote
              </Link>
            </div>
          </motion.div>
        </div>
        {/* Scroll hint */}
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }} className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="w-5 h-9 border border-white/30 rounded-full flex justify-center pt-1.5">
            <div className="w-1 h-2.5 bg-white/40 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="wrap py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="text-center">
              <div className="text-4xl md:text-5xl font-black mb-1" style={{ color: s.color }}>{s.value}</div>
              <div className="text-gray-500 text-sm font-medium">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="wrap">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-2">What We Offer</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Our Logistics Services</h2>
            <p className="text-gray-500 mt-3 max-w-lg mx-auto">End-to-end freight solutions tailored to your business needs</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} viewport={{ once: true }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                <div className="relative h-44 overflow-hidden">
                  <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-3 left-3 w-10 h-10 rounded-xl flex items-center justify-center" style={{ backgroundColor: s.accent }}>
                    <span className="text-white">{s.icon}</span>
                  </div>
                </div>
                <div className="p-6" style={{ borderTop: `3px solid ${s.accent}` }}>
                  <h3 className="text-lg font-black text-gray-900 mb-2">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{s.desc}</p>
                  <Link to="/services" className="inline-flex items-center gap-1 text-sm font-bold transition-colors" style={{ color: s.accent }}>
                    Learn more
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 border-2 border-[#0E9B9B] text-[#0E9B9B] px-8 py-3.5 rounded-full font-bold hover:bg-[#0E9B9B] hover:text-white transition-all">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="wrap grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-2">Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">Your Trusted Logistics Partner</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">With over a decade of experience, Logistics 365 delivers seamless synergy between speed, reliability, and cost efficiency — every single day.</p>
            <div className="space-y-4">
              {whyUs.map((w, i) => (
                <motion.div key={w.title} initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-[#F8FAFC] transition-colors border border-transparent hover:border-gray-100">
                  <span className="text-2xl mt-0.5">{w.icon}</span>
                  <div>
                    <h4 className="font-bold text-gray-900">{w.title}</h4>
                    <p className="text-gray-500 text-sm mt-0.5">{w.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" alt="Cargo" className="rounded-2xl shadow-xl w-full h-96 object-cover" />
            <div className="absolute -bottom-5 -left-5 bg-[#E8541A] text-white p-5 rounded-2xl shadow-xl">
              <div className="text-3xl font-black">365</div>
              <div className="text-xs font-bold tracking-wider uppercase opacity-80">Days Support</div>
            </div>
            <div className="absolute -top-5 -right-5 bg-[#0E9B9B] text-white p-5 rounded-2xl shadow-xl">
              <div className="text-3xl font-black">150+</div>
              <div className="text-xs font-bold tracking-wider uppercase opacity-80">Countries</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0F1923] relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80')" }} />
        <div className="relative z-10 wrap text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-3">Start Today</p>
            <h2 className="text-3xl md:text-5xl font-black text-white mb-4">Ready to Ship Globally?</h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">Get a competitive freight quote within 24 hours from our expert team.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact" className="bg-[#E8541A] text-white px-10 py-4 rounded-full font-black text-lg hover:bg-[#c9440f] hover:shadow-xl hover:shadow-[#E8541A]/30 transition-all hover:-translate-y-0.5">
                Request a Quote →
              </Link>
              <Link to="/network" className="border border-white/20 text-white px-10 py-4 rounded-full font-bold hover:border-white/50 hover:bg-white/5 transition-all">
                Our Network
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
