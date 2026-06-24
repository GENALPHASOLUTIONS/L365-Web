import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const values = [
  { icon: '🎯', title: 'Precision', desc: 'Every shipment handled with meticulous attention to detail and care.' },
  { icon: '🤝', title: 'Partnership', desc: 'Long-term relationships built on trust, transparency and results.' },
  { icon: '💡', title: 'Innovation', desc: 'Leveraging technology for smarter, faster logistics solutions.' },
  { icon: '🌱', title: 'Sustainability', desc: 'Committed to environmentally responsible logistics practices.' },
]

export default function About() {
  return (
    <>
      <SEO title="About Us" canonical="/about" description="Learn about Logistics 365 (Pvt) Ltd — our story, mission, values and team dedicated to seamless freight forwarding in Sri Lanka." keywords="about Logistics 365, freight forwarding company Sri Lanka" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0F1923] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-25" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1923] to-[#0F1923]/70" />
        <div className="relative z-10 wrap">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-3">About Us</p>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Our Story</h1>
            <p className="text-gray-300 text-lg max-w-xl">Delivering seamless synergy in freight forwarding — connecting Sri Lanka to the global marketplace.</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="wrap grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1553413077-190dd305871c?w=800&q=80" alt="Warehouse" className="rounded-2xl shadow-xl w-full h-80 object-cover" />
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-2">Who We Are</p>
            <h2 className="text-3xl font-black text-gray-900 mb-4">Built on Trust, Driven by Excellence</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Logistics 365 (Pvt) Ltd is a premier freight forwarding and logistics company headquartered in Colombo, Sri Lanka. We specialize in sea freight, air freight, customs clearance, and integrated supply chain solutions.</p>
            <p className="text-gray-600 leading-relaxed mb-6">Our tagline "Seamless Synergy" reflects our commitment to creating perfect harmony between our clients, their cargo, and global destinations. We operate 365 days a year because logistics never sleeps.</p>
            <div className="flex gap-8">
              <div><div className="text-3xl font-black text-[#E8541A]">15+</div><div className="text-gray-500 text-sm">Years in Business</div></div>
              <div><div className="text-3xl font-black text-[#0E9B9B]">50+</div><div className="text-gray-500 text-sm">Global Partners</div></div>
              <div><div className="text-3xl font-black text-[#7BC14A]">150+</div><div className="text-gray-500 text-sm">Countries Served</div></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="wrap grid md:grid-cols-2 gap-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-[#E8541A] text-white p-10 rounded-2xl">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-black mb-3">Our Mission</h3>
            <p className="leading-relaxed opacity-90">To provide world-class freight forwarding and logistics solutions that empower Sri Lankan businesses to compete globally, with unmatched reliability, transparency, and service excellence.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }} className="bg-[#0E9B9B] text-white p-10 rounded-2xl">
            <div className="text-4xl mb-4">🌟</div>
            <h3 className="text-2xl font-black mb-3">Our Vision</h3>
            <p className="leading-relaxed opacity-90">To be the most trusted logistics partner in South Asia, recognized for seamless synergy between technology, expertise, and customer-centric service — 365 days a year.</p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="wrap">
          <div className="text-center mb-12">
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-2">Our Values</p>
            <h2 className="text-3xl font-black text-gray-900">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="text-center p-7 rounded-2xl border border-gray-100 hover:border-[#E8541A]/20 hover:shadow-lg transition-all group">
                <div className="text-4xl mb-3">{v.icon}</div>
                <h4 className="font-bold text-gray-900 mb-1 group-hover:text-[#E8541A] transition-colors">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
