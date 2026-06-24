import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const stats = [
  { value: '15+', label: 'Years Experience' },
  { value: '50+', label: 'Global Partners' },
  { value: '10K+', label: 'Shipments Delivered' },
  { value: '365', label: 'Days Support' },
]

const services = [
  { icon: '🚢', title: 'Sea Freight', desc: 'FCL & LCL ocean freight solutions connecting Sri Lanka to the world.' },
  { icon: '✈️', title: 'Air Freight', desc: 'Time-critical air cargo with express and economy options globally.' },
  { icon: '📋', title: 'Customs Clearance', desc: 'Expert customs brokerage ensuring smooth border transitions.' },
  { icon: '🏭', title: 'Warehousing', desc: 'Secure, modern warehouse facilities with real-time inventory.' },
  { icon: '🏗️', title: 'Project Cargo', desc: 'Heavy lift and out-of-gauge cargo handled with precision.' },
  { icon: '🔗', title: 'Supply Chain', desc: 'End-to-end supply chain visibility and management solutions.' },
]

const whyUs = [
  { title: 'Global Reach', desc: 'Connected to 150+ countries through our trusted partner network.' },
  { title: 'Real-Time Tracking', desc: 'Monitor your shipment status 24/7 through our digital platform.' },
  { title: 'Compliance Ready', desc: 'Full regulatory compliance and documentation expertise.' },
  { title: '24/7 Support', desc: 'Dedicated team available around the clock, 365 days a year.' },
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

export default function Home() {
  return (
    <>
      <SEO
        canonical="/"
        keywords="freight forwarding Sri Lanka, sea freight, air freight, customs clearance, logistics company Sri Lanka, cargo Sri Lanka"
        schema={schema}
      />

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          poster="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80"
        >
          <source src="https://www.pexels.com/video/4484936/download/" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1923]/90 via-[#0F1923]/70 to-[#0E9B9B]/30" />
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute w-96 h-96 rounded-full bg-[#E8541A]/10 blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            style={{ top: '20%', left: '10%' }}
          />
          <motion.div
            className="absolute w-80 h-80 rounded-full bg-[#0E9B9B]/15 blur-3xl"
            animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
            style={{ bottom: '20%', right: '10%' }}
          />
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="inline-block bg-[#E8541A]/20 border border-[#E8541A]/40 text-[#E8541A] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6">
              Seamless Synergy
            </span>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6">
              Global Freight<br />
              <span className="text-[#E8541A]">Forwarding</span>{' '}
              <span className="text-[#0E9B9B]">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-10 leading-relaxed">
              Connecting Sri Lanka to the world with precision, reliability, and expertise — 365 days a year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/services" className="bg-[#E8541A] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#c9440f] transition-all hover:scale-105 shadow-xl shadow-[#E8541A]/30">
                Our Services
              </Link>
              <Link to="/contact" className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-[#0F1923] transition-all">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/60 rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="bg-[#0E9B9B] py-16">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}>
              <div className="text-4xl md:text-5xl font-black text-white">{s.value}</div>
              <div className="text-teal-100 font-medium mt-1 text-sm tracking-wide uppercase">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#E8541A] font-bold text-sm tracking-widest uppercase">What We Offer</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">Comprehensive Logistics Services</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">End-to-end freight solutions tailored to your business needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 group">
                <div className="text-4xl mb-4">{s.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#E8541A] transition-colors">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="inline-flex items-center gap-2 bg-[#0E9B9B] text-white px-8 py-4 rounded-full font-bold hover:bg-[#0a7a7a] transition-all">
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[#E8541A] font-bold text-sm tracking-widest uppercase">Why Choose Us</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 mb-6">Your Trusted Logistics Partner</h2>
            <p className="text-gray-500 mb-8 leading-relaxed">With over a decade of experience in freight forwarding, Logistics 365 delivers seamless synergy between speed, reliability, and cost efficiency.</p>
            <div className="space-y-6">
              {whyUs.map(w => (
                <div key={w.title} className="flex gap-4">
                  <div className="w-10 h-10 rounded-full bg-[#E8541A]/10 flex items-center justify-center flex-shrink-0">
                    <div className="w-3 h-3 rounded-full bg-[#E8541A]" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{w.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{w.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80" alt="Cargo operations" className="rounded-2xl shadow-2xl w-full object-cover h-96" />
            <div className="absolute -bottom-6 -left-6 bg-[#E8541A] text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-black">365</div>
              <div className="text-xs font-bold tracking-widest uppercase mt-1">Days a Year</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-[#0E9B9B] text-white p-6 rounded-2xl shadow-xl">
              <div className="text-3xl font-black">150+</div>
              <div className="text-xs font-bold tracking-widest uppercase mt-1">Countries</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="relative py-24 bg-[#0F1923] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-20" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Ready to Ship Globally?</h2>
          <p className="text-gray-300 text-xl mb-10">Get a competitive freight quote within 24 hours. Our experts are ready to help.</p>
          <Link to="/contact" className="inline-block bg-[#E8541A] text-white px-10 py-5 rounded-full font-black text-lg hover:bg-[#c9440f] transition-all hover:scale-105 shadow-2xl shadow-[#E8541A]/40">
            Request a Quote Today →
          </Link>
        </div>
      </section>
    </>
  )
}
