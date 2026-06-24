import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const offices = [
  { city: 'Colombo', country: 'Sri Lanka', flag: '🇱🇰', role: 'Headquarters', email: 'info@logistics365.lk', phone: '+94 11 XXX XXXX' },
  { city: 'Dubai', country: 'UAE', flag: '🇦🇪', role: 'Middle East Hub', email: 'uae@logistics365.lk', phone: '+971 XX XXX XXXX' },
  { city: 'Singapore', country: 'Singapore', flag: '🇸🇬', role: 'Asia Pacific Hub', email: 'sg@logistics365.lk', phone: '+65 XXXX XXXX' },
]

const partners = [
  'MSC', 'Maersk', 'CMA CGM', 'Emirates SkyCargo', 'Qatar Airways Cargo',
  'Sri Lanka Customs', 'FIATA', 'IATA', 'WCA Network',
]

export default function Network() {
  return (
    <>
      <SEO title="Global Network" canonical="/network" description="Logistics 365 global network spans 150+ countries with offices in Sri Lanka, UAE, and Singapore, plus partnerships with major carriers." keywords="logistics network Sri Lanka, global freight network, shipping partners" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0F1923] overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80" alt="" className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0F1923] to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#E8541A] font-bold text-sm tracking-widest uppercase">Worldwide Reach</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-6">Our Network</h1>
            <p className="text-gray-300 text-xl max-w-2xl">Connected across 150+ countries through our trusted global partner ecosystem.</p>
          </motion.div>
        </div>
      </section>

      {/* World Map Visual */}
      <section className="py-24 bg-[#0F1923]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[#E8541A] font-bold text-sm tracking-widest uppercase">Global Presence</span>
          <h2 className="text-4xl font-black text-white mt-2 mb-16">Connecting the World</h2>
          <div className="relative bg-[#0E9B9B]/10 rounded-3xl p-8 border border-[#0E9B9B]/20 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1600&q=80" alt="World network" className="w-full h-80 object-cover rounded-2xl opacity-40" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-3 gap-8 max-w-2xl">
                {offices.map(o => (
                  <motion.div key={o.city} initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                    className="bg-white/10 backdrop-blur border border-white/20 rounded-xl p-4 text-white text-center">
                    <div className="text-3xl mb-1">{o.flag}</div>
                    <div className="font-bold">{o.city}</div>
                    <div className="text-xs text-gray-300">{o.country}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-[#E8541A] font-bold text-sm tracking-widest uppercase">Our Offices</span>
            <h2 className="text-4xl font-black text-gray-900 mt-2">Where to Find Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {offices.map((o, i) => (
              <motion.div key={o.city} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                <div className="text-5xl mb-4">{o.flag}</div>
                <div className="inline-block bg-[#E8541A]/10 text-[#E8541A] text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3">{o.role}</div>
                <h3 className="text-2xl font-black text-gray-900">{o.city}</h3>
                <p className="text-[#0E9B9B] font-semibold mb-4">{o.country}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <div>📞 {o.phone}</div>
                  <div>✉️ {o.email}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <span className="text-[#E8541A] font-bold text-sm tracking-widest uppercase">Trusted By</span>
          <h2 className="text-4xl font-black text-gray-900 mt-2 mb-12">Our Global Partners</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {partners.map(p => (
              <div key={p} className="bg-white border border-gray-200 px-8 py-4 rounded-xl font-bold text-gray-600 shadow-sm hover:border-[#0E9B9B] hover:text-[#0E9B9B] transition-all">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
