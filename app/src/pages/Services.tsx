import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const services = [
  { icon: '🚢', title: 'Sea Freight', accent: '#0E9B9B',
    desc: 'Full Container Load (FCL) and Less than Container Load (LCL) ocean freight solutions. We work with all major shipping lines for competitive rates and reliable transit times.',
    features: ['FCL & LCL shipments', 'Door-to-door service', 'Reefer & dangerous goods', 'Real-time tracking'],
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=700&q=80' },
  { icon: '✈️', title: 'Air Freight', accent: '#E8541A',
    desc: 'Time-critical cargo delivered with speed and precision. Our air freight services connect Colombo to major global hubs with express and economy options.',
    features: ['Express & economy options', 'Charter solutions', 'Perishable cargo handling', 'Next-flight-out service'],
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=700&q=80' },
  { icon: '📋', title: 'Customs Clearance', accent: '#7BC14A',
    desc: 'Expert customs brokerage services ensuring smooth, compliant border crossings. Our licensed agents handle all documentation and regulatory requirements.',
    features: ['Import & export customs', 'HS code classification', 'Permit facilitation', 'Duty optimization'],
    img: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=700&q=80' },
  { icon: '🏭', title: 'Warehousing', accent: '#0E9B9B',
    desc: 'Modern, secure warehouse facilities in Colombo with advanced inventory management systems. Bonded and non-bonded options available.',
    features: ['Bonded warehousing', 'Pick & pack services', 'Inventory management', 'Distribution services'],
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=700&q=80' },
  { icon: '🏗️', title: 'Project Cargo', accent: '#E8541A',
    desc: 'Specialized handling for heavy lift, oversized, and out-of-gauge cargo. We coordinate complex multi-modal movements for major industrial projects.',
    features: ['Heavy lift operations', 'Route surveys', 'Multi-modal solutions', 'On-site supervision'],
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=700&q=80' },
  { icon: '🔗', title: 'Supply Chain Solutions', accent: '#7BC14A',
    desc: 'Integrated supply chain management from origin to destination, providing end-to-end visibility and optimization for your entire logistics network.',
    features: ['Supply chain consulting', 'Vendor management', 'Demand forecasting', 'Digital visibility platform'],
    img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=700&q=80' },
]

export default function Services() {
  return (
    <>
      <SEO title="Services" canonical="/services" description="Logistics 365 offers comprehensive freight forwarding services: sea freight, air freight, customs clearance, warehousing, project cargo and supply chain solutions." keywords="freight forwarding services Sri Lanka, sea freight, air freight, customs clearance" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0F1923] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1923] to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-3">What We Do</p>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Our Services</h1>
            <p className="text-gray-300 text-lg max-w-xl">Comprehensive freight and logistics solutions designed to move your business forward.</p>
          </motion.div>
        </div>
      </section>

      {/* Services list */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-10 space-y-14">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:[&>*:first-child]:order-2' : ''}`}>
              <div>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-5" style={{ backgroundColor: s.accent + '18' }}>{s.icon}</div>
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-5">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-gray-700 text-sm">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: s.accent }}>
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/></svg>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? 'order-first md:order-none' : ''}>
                <img src={s.img} alt={s.title} className="rounded-2xl shadow-lg w-full h-64 object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
