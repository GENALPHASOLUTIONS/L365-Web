import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const offices = [
  { city: 'Colombo', country: 'Sri Lanka', flag: '🇱🇰', role: 'Headquarters', email: 'info@logistics365.lk', phone: '+94 11 XXX XXXX' },
  { city: 'Dubai', country: 'UAE', flag: '🇦🇪', role: 'Middle East Hub', email: 'uae@logistics365.lk', phone: '+971 XX XXX XXXX' },
  { city: 'Singapore', country: 'Singapore', flag: '🇸🇬', role: 'Asia Pacific Hub', email: 'sg@logistics365.lk', phone: '+65 XXXX XXXX' },
]

const partners = ['MSC', 'Maersk', 'CMA CGM', 'Emirates SkyCargo', 'Qatar Airways Cargo', 'FIATA', 'IATA', 'WCA Network']

export default function Network() {
  return (
    <>
      <SEO title="Global Network" canonical="/network" description="Logistics 365 global network spans 150+ countries with offices in Sri Lanka, UAE, and Singapore, plus partnerships with major carriers." keywords="logistics network Sri Lanka, global freight network" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0F1923] overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80')" }} />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1923] to-transparent" />
        <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-3">Worldwide Reach</p>
            <h1 className="text-4xl md:text-6xl font-black text-white mb-4">Our Network</h1>
            <p className="text-gray-300 text-lg max-w-xl">Connected across 150+ countries through our trusted global partner ecosystem.</p>
          </motion.div>
        </div>
      </section>

      {/* Network image */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-2">Global Presence</p>
          <h2 className="text-3xl font-black text-gray-900 mb-10">Connecting the World</h2>
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img src="https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1600&q=80" alt="World network" className="w-full h-72 object-cover" />
            <div className="absolute inset-0 bg-[#0F1923]/60 flex items-center justify-center">
              <div className="flex gap-6 flex-wrap justify-center px-4">
                {offices.map(o => (
                  <div key={o.city} className="bg-white/10 backdrop-blur border border-white/20 rounded-xl px-6 py-4 text-white text-center">
                    <div className="text-3xl mb-1">{o.flag}</div>
                    <div className="font-bold text-sm">{o.city}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-white">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-2">Our Offices</p>
            <h2 className="text-3xl font-black text-gray-900">Where to Find Us</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((o, i) => (
              <motion.div key={o.city} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#0E9B9B]/20 transition-all">
                <div className="text-4xl mb-3">{o.flag}</div>
                <span className="inline-block bg-[#E8541A]/10 text-[#E8541A] text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full mb-3">{o.role}</span>
                <h3 className="text-xl font-black text-gray-900">{o.city}</h3>
                <p className="text-[#0E9B9B] font-semibold mb-4">{o.country}</p>
                <div className="space-y-1 text-sm text-gray-500">
                  <div>📞 {o.phone}</div>
                  <div>✉️ {o.email}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="w-full max-w-6xl mx-auto px-6 md:px-10 text-center">
          <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-2">Trusted By</p>
          <h2 className="text-3xl font-black text-gray-900 mb-10">Our Global Partners</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {partners.map(p => (
              <div key={p} className="bg-white border border-gray-200 px-7 py-3.5 rounded-xl font-bold text-gray-600 shadow-sm hover:border-[#0E9B9B] hover:text-[#0E9B9B] transition-all cursor-default">
                {p}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
