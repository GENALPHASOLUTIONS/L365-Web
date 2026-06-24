import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const values = [
  { icon: '🎯', title: 'Precision', desc: 'Every shipment handled with meticulous attention to detail.' },
  { icon: '🤝', title: 'Partnership', desc: 'Long-term relationships built on trust and transparency.' },
  { icon: '💡', title: 'Innovation', desc: 'Leveraging technology for smarter logistics solutions.' },
  { icon: '🌱', title: 'Sustainability', desc: 'Committed to eco-friendly logistics practices.' },
]

export default function About() {
  return (
    <>
      <SEO title="About Us" canonical="/about" description="Learn about Logistics 365 (Pvt) Ltd — our story, mission, values and team dedicated to seamless freight forwarding in Sri Lanka." keywords="about Logistics 365, freight forwarding company Sri Lanka, logistics team" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0F1923] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1923] to-[#0F1923]/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#E8541A] font-bold text-sm tracking-widest uppercase">About Us</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-6">Our Story</h1>
            <p className="text-gray-300 text-xl max-w-2xl">Delivering seamless synergy in freight forwarding since day one — connecting Sri Lanka to the global marketplace.</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80" alt="Warehouse" className="rounded-2xl shadow-2xl w-full h-96 object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <span className="text-[#E8541A] font-bold text-sm tracking-widest uppercase">Who We Are</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2 mb-6">Built on Trust, Driven by Excellence</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Logistics 365 (Pvt) Ltd is a premier freight forwarding and logistics company headquartered in Colombo, Sri Lanka. We specialize in sea freight, air freight, customs clearance, and integrated supply chain solutions.</p>
            <p className="text-gray-600 leading-relaxed mb-4">Our tagline "Seamless Synergy" reflects our commitment to creating perfect harmony between our clients, their cargo, and global destinations. We operate 365 days a year because logistics never sleeps.</p>
            <div className="flex gap-8 mt-8">
              <div><div className="text-3xl font-black text-[#E8541A]">15+</div><div className="text-gray-500 text-sm">Years in Business</div></div>
              <div><div className="text-3xl font-black text-[#0E9B9B]">50+</div><div className="text-gray-500 text-sm">Global Partners</div></div>
              <div><div className="text-3xl font-black text-[#7BC14A]">150+</div><div className="text-gray-500 text-sm">Countries Served</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#E8541A] text-white p-10 rounded-2xl">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-2xl font-black mb-4">Our Mission</h3>
            <p className="leading-relaxed opacity-90">To provide world-class freight forwarding and logistics solutions that empower Sri Lankan businesses to compete globally, with unmatched reliability, transparency, and service excellence.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="bg-[#0E9B9B] text-white p-10 rounded-2xl">
            <div className="text-3xl mb-4">🌟</div>
            <h3 className="text-2xl font-black mb-4">Our Vision</h3>
            <p className="leading-relaxed opacity-90">To be the most trusted logistics partner in South Asia, recognized for seamless synergy between technology, expertise, and customer-centric service delivery across 365 days.</p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#E8541A] font-bold text-sm tracking-widest uppercase">Our Values</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }} className="text-center p-8 rounded-2xl border border-gray-100 hover:border-[#E8541A]/30 hover:shadow-lg transition-all">
                <div className="text-4xl mb-4">{v.icon}</div>
                <h4 className="font-bold text-gray-900 mb-2">{v.title}</h4>
                <p className="text-gray-500 text-sm">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
