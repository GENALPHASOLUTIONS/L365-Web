import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const tradeRoutes = [
  { from: 'Colombo', to: 'Dubai', mode: '🚢 / ✈️', transit: '3–5 days air / 10–14 days sea', desc: 'Middle East gateway — high-volume trade corridor for garments, electronics and general cargo.' },
  { from: 'Colombo', to: 'Singapore', mode: '🚢 / ✈️', transit: '2–3 days air / 5–7 days sea', desc: 'Asia Pacific transshipment hub — connecting Sri Lanka to SE Asia, China, Japan and Australia.' },
  { from: 'Colombo', to: 'Rotterdam', mode: '🚢', transit: '22–26 days sea', desc: 'Europe\'s largest port — gateway to Germany, Netherlands, UK and the rest of the EU market.' },
  { from: 'Colombo', to: 'Shanghai', mode: '🚢 / ✈️', transit: '4–6 days air / 12–16 days sea', desc: 'China\'s leading export hub — sourcing, import and transshipment connections across East Asia.' },
  { from: 'Colombo', to: 'Los Angeles', mode: '🚢 / ✈️', transit: '1–2 days air / 24–28 days sea', desc: 'US West Coast hub — connecting Sri Lankan exporters to the vast North American consumer market.' },
  { from: 'Colombo', to: 'Mumbai', mode: '🚢 / ✈️', transit: '1 day air / 4–6 days sea', desc: 'South Asia powerhouse — India\'s financial capital with direct access to the world\'s 5th largest economy.' },
]

const advantages = [
  { icon: '🗺️', title: 'Global Coverage', value: '150+', sub: 'Countries reached', color: '#E8541A' },
  { icon: '🚢', title: 'Shipping Lines', value: '50+', sub: 'Carrier partnerships', color: '#0E9B9B' },
  { icon: '✈️', title: 'Airline Partners', value: '30+', sub: 'Air cargo networks', color: '#7BC14A' },
  { icon: '🏭', title: 'Industry Experience', value: '20+', sub: 'Years via CL Synergy', color: '#E8541A' },
]

const partners = [
  { name: 'MSC', category: 'Shipping Line' },
  { name: 'Maersk', category: 'Shipping Line' },
  { name: 'CMA CGM', category: 'Shipping Line' },
  { name: 'Evergreen', category: 'Shipping Line' },
  { name: 'OOCL', category: 'Shipping Line' },
  { name: 'Emirates SkyCargo', category: 'Air Cargo' },
  { name: 'Qatar Airways Cargo', category: 'Air Cargo' },
  { name: 'SriLankan Cargo', category: 'Air Cargo' },
  { name: 'FIATA', category: 'Association' },
  { name: 'IATA', category: 'Association' },
  { name: 'WCA Network', category: 'Agent Network' },
  { name: 'CILTSL', category: 'Association' },
]

const categoryColors: Record<string, string> = {
  'Shipping Line': '#0E9B9B',
  'Air Cargo': '#E8541A',
  'Association': '#7BC14A',
  'Agent Network': '#0E9B9B',
}

export default function Network() {
  return (
    <>
      <SEO title="Global Network" canonical="/network"
        description="Logistics365 global network spans 150+ countries with trade routes from Colombo to Dubai, Singapore, Europe, China, and USA via trusted carrier and agent partnerships."
        keywords="logistics network Sri Lanka, global freight network, Colombo shipping routes, Sri Lanka freight forwarding" />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '400px', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=1920&q=80')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,25,35,0.97) 0%, rgba(15,25,35,0.85) 50%, rgba(14,155,155,0.2) 100%)' }} />
        <div className="relative z-10 wrap pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-[#E8541A]/15 border border-[#E8541A]/25 text-[#E8541A] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8541A] animate-pulse" />
              Worldwide Reach
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Connecting Sri Lanka<br />to the <span className="text-[#0E9B9B]">World</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl">
              Our global partner network spans 150+ countries — providing seamless freight connections from Colombo to every corner of the globe.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Network stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="wrap py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          {advantages.map((a, i) => (
            <motion.div key={a.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
              className="text-center">
              <div className="text-4xl font-black mb-1" style={{ color: a.color }}>{a.value}</div>
              <div className="font-bold text-gray-900 text-sm">{a.title}</div>
              <div className="text-gray-400 text-xs mt-0.5">{a.sub}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* World map visual */}
      <section className="py-20 bg-[#0F1923] relative overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1446776653964-20c1d3a81b06?w=1920&q=80')" }} />
        <div className="relative z-10 wrap">
          <div className="text-center mb-12">
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-2">Global Presence</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Our Strategic Position</h2>
            <p className="text-gray-400 mt-2 max-w-lg" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
              Sri Lanka sits at the crossroads of major East-West trade routes, making Colombo one of the world's top transshipment hubs.
            </p>
          </div>

          {/* SVG World map schematic */}
          <div className="relative rounded-3xl overflow-hidden" style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.1)' }}>
            <svg viewBox="0 0 900 420" className="w-full" style={{ height: '380px' }}>
              {/* Background grid */}
              {Array.from({ length: 9 }).map((_, i) => (
                <line key={`v${i}`} x1={i * 112} y1="0" x2={i * 112} y2="420" stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              ))}
              {Array.from({ length: 5 }).map((_, i) => (
                <line key={`h${i}`} x1="0" y1={i * 105} x2="900" y2={i * 105} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
              ))}

              {/* Route lines (animated dashes) */}
              {/* Colombo → Dubai */}
              <line x1="560" y1="240" x2="490" y2="195" stroke="#E8541A" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6">
                <animate attributeName="stroke-dashoffset" values="20;0" dur="2s" repeatCount="indefinite" />
              </line>
              {/* Colombo → Singapore */}
              <line x1="560" y1="240" x2="680" y2="250" stroke="#0E9B9B" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6">
                <animate attributeName="stroke-dashoffset" values="20;0" dur="2.5s" repeatCount="indefinite" />
              </line>
              {/* Colombo → Mumbai */}
              <line x1="560" y1="240" x2="530" y2="210" stroke="#7BC14A" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6">
                <animate attributeName="stroke-dashoffset" values="20;0" dur="1.8s" repeatCount="indefinite" />
              </line>
              {/* Colombo → Shanghai */}
              <line x1="560" y1="240" x2="730" y2="175" stroke="#E8541A" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6">
                <animate attributeName="stroke-dashoffset" values="20;0" dur="3s" repeatCount="indefinite" />
              </line>
              {/* Colombo → Rotterdam */}
              <line x1="560" y1="240" x2="290" y2="130" stroke="#0E9B9B" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6">
                <animate attributeName="stroke-dashoffset" values="20;0" dur="4s" repeatCount="indefinite" />
              </line>
              {/* Colombo → Los Angeles */}
              <line x1="560" y1="240" x2="100" y2="200" stroke="#7BC14A" strokeWidth="1.5" strokeDasharray="6 4" opacity="0.6">
                <animate attributeName="stroke-dashoffset" values="20;0" dur="5s" repeatCount="indefinite" />
              </line>

              {/* Destination nodes */}
              {[
                { x: 490, y: 195, label: 'Dubai', flag: '🇦🇪', color: '#E8541A' },
                { x: 680, y: 250, label: 'Singapore', flag: '🇸🇬', color: '#0E9B9B' },
                { x: 530, y: 210, label: 'Mumbai', flag: '🇮🇳', color: '#7BC14A' },
                { x: 730, y: 175, label: 'Shanghai', flag: '🇨🇳', color: '#E8541A' },
                { x: 290, y: 130, label: 'Rotterdam', flag: '🇳🇱', color: '#0E9B9B' },
                { x: 100, y: 200, label: 'Los Angeles', flag: '🇺🇸', color: '#7BC14A' },
              ].map(node => (
                <g key={node.label}>
                  <circle cx={node.x} cy={node.y} r="22" fill="rgba(255,255,255,0.08)" stroke={node.color} strokeWidth="1.5" />
                  <circle cx={node.x} cy={node.y} r="22" fill="transparent" stroke={node.color} strokeWidth="1.5" opacity="0.4">
                    <animate attributeName="r" values="22;30;22" dur="3s" repeatCount="indefinite" />
                    <animate attributeName="opacity" values="0.4;0;0.4" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <text x={node.x} y={node.y + 5} textAnchor="middle" fontSize="14" fill="white">{node.flag}</text>
                  <text x={node.x} y={node.y + 38} textAnchor="middle" fontSize="9" fill="rgba(255,255,255,0.7)" fontWeight="600">{node.label}</text>
                </g>
              ))}

              {/* Colombo — main hub */}
              <circle cx="560" cy="240" r="30" fill="rgba(232,84,26,0.15)" stroke="#E8541A" strokeWidth="2" />
              <circle cx="560" cy="240" r="30" fill="transparent" stroke="#E8541A" strokeWidth="2" opacity="0.3">
                <animate attributeName="r" values="30;42;30" dur="2s" repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
              </circle>
              <circle cx="560" cy="240" r="8" fill="#E8541A" />
              <text x="560" y="282" textAnchor="middle" fontSize="10" fill="#E8541A" fontWeight="700">🇱🇰 COLOMBO HQ</text>
            </svg>
          </div>
        </div>
      </section>

      {/* Trade routes */}
      <section className="py-20 bg-white">
        <div className="wrap">
          <div className="text-center mb-12">
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-2">Key Trade Corridors</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">From Colombo to the World</h2>
            <p className="text-gray-500 mt-2">Regular sailings and flights connecting Sri Lanka to major global trade hubs</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {tradeRoutes.map((r, i) => (
              <motion.div key={r.to} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:border-[#0E9B9B]/20 transition-all card-lift">
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#E8541A]" />
                    <span className="text-sm font-bold text-gray-900">{r.from}</span>
                  </div>
                  <svg className="w-4 h-4 text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#0E9B9B]" />
                    <span className="text-sm font-bold text-gray-900">{r.to}</span>
                  </div>
                </div>
                <div className="flex gap-3 mb-3">
                  <span className="text-xs bg-[#F8FAFC] border border-gray-100 px-2.5 py-1 rounded-full font-medium text-gray-600">{r.mode}</span>
                  <span className="text-xs bg-[#F8FAFC] border border-gray-100 px-2.5 py-1 rounded-full font-medium text-gray-600">{r.transit}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="wrap">
          <div className="text-center mb-12">
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-2">Trusted Partners</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Our Global Network</h2>
            <p className="text-gray-500 mt-2">Strong relationships with leading carriers, airlines, and industry associations</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {partners.map((p, i) => (
              <motion.div key={p.name} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}
                className="flex items-center gap-2 bg-white border border-gray-200 px-5 py-3 rounded-xl shadow-sm hover:shadow-md hover:border-transparent transition-all card-lift"
                style={{ '--hover-border': categoryColors[p.category] } as React.CSSProperties}>
                <span className="w-2 h-2 rounded-full" style={{ background: categoryColors[p.category] }} />
                <span className="font-bold text-gray-700 text-sm">{p.name}</span>
                <span className="text-xs text-gray-400">{p.category}</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">Plus hundreds of trusted local agents across every major trade corridor worldwide</p>
          </div>
        </div>
      </section>

      {/* Sri Lanka advantage */}
      <section className="py-20 bg-[#0F1923]">
        <div className="wrap grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-3">The Sri Lanka Advantage</p>
            <h2 className="text-3xl md:text-4xl font-black text-white mb-5">Gateway to Global Trade</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Sri Lanka's strategic location at the center of major East-West shipping lanes makes the Port of Colombo one of the world's busiest transshipment hubs — processing over 7 million TEUs annually.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              Our headquarters in Colombo 03 positions us at the heart of this trade ecosystem, giving our clients direct access to competitive freight rates, frequent sailings, and reliable air connections to every corner of the globe.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Port Colombo Rank', value: '#5 South Asia' },
                { label: 'Annual TEUs', value: '7M+' },
                { label: 'Shipping Lines', value: '70+ Calls/Week' },
                { label: 'Air Connections', value: '60+ Destinations' },
              ].map(s => (
                <div key={s.label} className="glass-card p-4">
                  <div className="text-white font-black text-lg">{s.value}</div>
                  <div className="text-gray-500 text-xs mt-0.5">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <img src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80"
              alt="Port of Colombo" className="rounded-2xl shadow-2xl w-full object-cover" style={{ height: '420px' }} />
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="wrap text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Ship to Any Destination</h2>
          <p className="text-gray-500 mb-7" style={{ maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
            Tell us where your cargo needs to go — we'll find the best route, carrier, and solution.
          </p>
          <a href="/contact" className="inline-flex items-center gap-2 bg-[#E8541A] text-white px-10 py-4 rounded-full font-black text-lg hover:bg-[#c9440f] hover:shadow-xl hover:shadow-[#E8541A]/25 transition-all hover:-translate-y-0.5">
            Get a Route Quote →
          </a>
        </div>
      </section>
    </>
  )
}
