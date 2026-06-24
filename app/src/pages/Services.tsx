import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const services = [
  {
    icon: '🚢', title: 'Sea Freight', color: '#0E9B9B',
    desc: 'Full Container Load (FCL) and Less than Container Load (LCL) ocean freight solutions. We work with all major shipping lines to offer competitive rates and reliable transit times.',
    features: ['FCL & LCL shipments', 'Door-to-door service', 'Reefer & dangerous goods', 'Real-time tracking'],
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80',
  },
  {
    icon: '✈️', title: 'Air Freight', color: '#E8541A',
    desc: 'Time-critical cargo delivered with speed and precision. Our air freight services connect Colombo Bandaranaike International Airport to major hubs worldwide.',
    features: ['Express & economy options', 'Charter solutions', 'Perishable cargo', 'Next-flight-out service'],
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
  },
  {
    icon: '📋', title: 'Customs Clearance', color: '#7BC14A',
    desc: 'Expert customs brokerage services ensuring smooth, compliant border crossings. Our licensed customs agents handle all documentation and regulatory requirements.',
    features: ['Import & export customs', 'HS code classification', 'Permit facilitation', 'Duty optimization'],
    img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
  },
  {
    icon: '🏭', title: 'Warehousing', color: '#0E9B9B',
    desc: 'Modern, secure warehouse facilities in Colombo with advanced inventory management systems. Bonded and non-bonded options available.',
    features: ['Bonded warehousing', 'Pick & pack', 'Inventory management', 'Distribution services'],
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80',
  },
  {
    icon: '🏗️', title: 'Project Cargo', color: '#E8541A',
    desc: 'Specialized handling for heavy lift, oversized, and out-of-gauge cargo. We coordinate complex multi-modal movements for industrial projects.',
    features: ['Heavy lift operations', 'Route surveys', 'Multi-modal solutions', 'On-site supervision'],
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  },
  {
    icon: '🔗', title: 'Supply Chain Solutions', color: '#7BC14A',
    desc: 'Integrated supply chain management from origin to destination. We provide end-to-end visibility and optimization for your entire logistics network.',
    features: ['Supply chain consulting', 'Vendor management', 'Demand forecasting', 'Digital visibility'],
    img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80',
  },
]

export default function Services() {
  return (
    <>
      <SEO title="Services" canonical="/services" description="Logistics 365 offers comprehensive freight forwarding services: sea freight, air freight, customs clearance, warehousing, project cargo and supply chain solutions." keywords="freight forwarding services Sri Lanka, sea freight, air freight, customs clearance, warehousing, project cargo" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0F1923] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1923] to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#E8541A] font-bold text-sm tracking-widest uppercase">What We Do</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-6">Our Services</h1>
            <p className="text-gray-300 text-xl max-w-2xl">Comprehensive freight and logistics solutions designed to move your business forward.</p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 space-y-16">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
              className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
              <div className={i % 2 === 1 ? 'md:col-start-2' : ''}>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-2xl mb-6" style={{ backgroundColor: s.color + '20' }}>
                  {s.icon}
                </div>
                <h2 className="text-3xl font-black text-gray-900 mb-4">{s.title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{s.desc}</p>
                <ul className="space-y-2">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-gray-700">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: s.color }}>
                        <span className="text-white text-xs">✓</span>
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <div className={i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                <img src={s.img} alt={s.title} className="rounded-2xl shadow-xl w-full h-72 object-cover" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  )
}
