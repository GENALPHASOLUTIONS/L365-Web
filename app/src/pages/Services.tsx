import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const categories = [
  {
    id: 'ocean',
    label: 'Ocean Freight',
    color: '#0E9B9B',
    bgLight: 'rgba(14,155,155,0.07)',
    img: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=900&q=80',
    tagline: 'Cost-effective global ocean shipping',
    intro: 'Our ocean freight services connect Sri Lanka to every major port in the world. Whether FCL or LCL, we deliver competitive rates with reliable schedules and end-to-end cargo visibility.',
    services: [
      { name: 'Sea Freight (FCL & LCL)', desc: 'Full container load and less-than-container load ocean freight services to all major global ports with competitive pricing and weekly sailings.' },
      { name: 'FCL Shipments', desc: 'Dedicated full container load shipping for larger volumes — ensuring your cargo has maximum space, security, and efficiency from origin to destination.' },
      { name: 'LCL Consolidation', desc: 'Cost-effective consolidation for smaller shipments — share container space without compromising on speed, safety, or service quality.' },
    ],
    benefits: ['Port-to-port & door-to-door', 'Real-time tracking', 'Reefer & hazmat expertise', 'Weekly sailings globally'],
  },
  {
    id: 'air',
    label: 'Air Freight',
    color: '#E8541A',
    bgLight: 'rgba(232,84,26,0.07)',
    img: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=900&q=80',
    tagline: 'Time-critical cargo, delivered on time',
    intro: 'When speed is non-negotiable, our air freight solutions ensure your cargo moves swiftly through our network of major airline partnerships — express or economy, we have you covered.',
    services: [
      { name: 'Air Freight', desc: 'Time-critical cargo transportation worldwide through our network of major airline partnerships — economy and express options available to suit every budget.' },
      { name: 'Express Delivery', desc: 'Priority air cargo for urgent shipments — guaranteed fastest routes with dedicated handling, proactive status updates, and on-time delivery.' },
    ],
    benefits: ['Express & economy options', 'Priority handling', 'Temperature-sensitive cargo', 'Charter arrangements'],
  },
  {
    id: 'customs',
    label: 'Customs & Trade',
    color: '#7BC14A',
    bgLight: 'rgba(123,193,74,0.07)',
    img: 'https://images.unsplash.com/photo-1601598851547-4302969d0614?w=900&q=80',
    tagline: 'Smooth, compliant border crossings',
    intro: 'Navigating customs regulations is complex. Our licensed customs house brokers and trade specialists ensure your cargo clears borders efficiently, compliantly, and without costly delays.',
    services: [
      { name: 'Customs House Brokerage', desc: 'Expert customs clearance and documentation — licensed brokers ensuring smooth, compliant border crossings for imports and exports.' },
      { name: 'Import & Export Management', desc: 'Complete documentation, compliance handling, and regulatory adherence for all import and export operations across all commodities.' },
      { name: 'Cross Border Logistics', desc: 'Seamless cross-border transportation solutions across South Asia and beyond with full regulatory compliance and documentation support.' },
      { name: 'Entrepot Trade Operations', desc: 'Transshipment and trade facilitation services leveraging Sri Lanka\'s strategic position as a global trade and transshipment hub.' },
    ],
    benefits: ['Licensed CHB team', 'HS code classification', 'Duty & tax optimization', 'Regulatory compliance'],
  },
  {
    id: 'warehouse',
    label: 'Warehousing',
    color: '#0E9B9B',
    bgLight: 'rgba(14,155,155,0.07)',
    img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=900&q=80',
    tagline: 'Secure, efficient storage solutions',
    intro: 'Our warehousing facilities offer secure, modern storage with advanced inventory management systems — giving you complete visibility and control over your stock at all times.',
    services: [
      { name: 'Warehousing Solutions', desc: 'Modern warehouse facilities with advanced real-time inventory management, racking systems, and integrated logistics support services.' },
      { name: 'Bonded Warehousing', desc: 'Customs-bonded storage facilities allowing goods to be stored duty-deferred until cleared for domestic distribution or re-export.' },
    ],
    benefits: ['24/7 security & CCTV', 'WMS integration', 'Bonded & non-bonded', 'Flexible capacity'],
  },
  {
    id: 'pl',
    label: '3PL & 4PL',
    color: '#E8541A',
    bgLight: 'rgba(232,84,26,0.07)',
    img: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=900&q=80',
    tagline: 'Your outsourced logistics partner',
    intro: 'From managing individual logistics functions to overseeing your entire supply chain, our 3PL and 4PL solutions give you the operational efficiency and strategic advantage to compete globally.',
    services: [
      { name: '3PL Solutions', desc: 'Third-party logistics outsourcing covering transportation, warehousing, and distribution — letting you focus on your core business operations.' },
      { name: '4PL Solutions', desc: 'Fourth-party logistics providing complete supply chain management — we act as your strategic logistics advisor, integrator, and single point of accountability.' },
      { name: 'Supply Chain Management', desc: 'End-to-end supply chain optimization covering procurement, production logistics, distribution, and reverse logistics management.' },
    ],
    benefits: ['Single point of control', 'Technology integration', 'Cost optimization', 'Scalable solutions'],
  },
  {
    id: 'value',
    label: 'Value Added',
    color: '#7BC14A',
    bgLight: 'rgba(123,193,74,0.07)',
    img: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80',
    tagline: 'Beyond logistics — complete solutions',
    intro: 'We go beyond transportation to provide a comprehensive suite of value-added logistics services — from project cargo to last-mile delivery — ensuring total end-to-end supply chain support.',
    services: [
      { name: 'Project Cargo Handling', desc: 'Specialized logistics for heavy-lift, oversized, and out-of-gauge cargo for complex industrial and infrastructure projects across the region.' },
      { name: 'Door-to-Door Logistics', desc: 'Complete pickup and delivery services from origin to final destination — seamless, fully tracked, and completely hassle-free.' },
      { name: 'Cargo Insurance', desc: 'Comprehensive cargo insurance coverage protecting your shipments against loss, damage, theft, or unforeseen events throughout the journey.' },
      { name: 'Value Added Services', desc: 'Packaging, labeling, kitting, re-packing, and quality inspection services at origin or destination warehouses as per your requirements.' },
      { name: 'Distribution Solutions', desc: 'Efficient distribution network management for retail, FMCG, and e-commerce businesses across Sri Lanka and international markets.' },
      { name: 'Last Mile Delivery', desc: 'Reliable final-destination delivery services ensuring your cargo reaches the end customer quickly, safely, and in perfect condition.' },
    ],
    benefits: ['Oversized & heavy cargo', 'End-to-end tracking', 'E-commerce logistics', 'Packaging & kitting'],
  },
]

const industries = [
  { name: 'Manufacturing', icon: '🏭', desc: 'Raw materials to finished goods' },
  { name: 'Retail & FMCG', icon: '🛒', desc: 'Store replenishment logistics' },
  { name: 'Healthcare', icon: '🏥', desc: 'Medical supplies & pharma' },
  { name: 'Automotive', icon: '🚗', desc: 'Vehicle parts & components' },
  { name: 'Electronics', icon: '💻', desc: 'High-tech equipment shipping' },
  { name: 'Construction', icon: '🏗️', desc: 'Heavy equipment & materials' },
  { name: 'E-Commerce', icon: '📦', desc: 'Online retail fulfillment' },
  { name: 'Industrial', icon: '⚙️', desc: 'Project cargo & oversized loads' },
  { name: 'Trading', icon: '🤝', desc: 'Import/export trade support' },
  { name: 'Apparel', icon: '👗', desc: 'Garment & textile logistics' },
]

export default function Services() {
  const [activeTab, setActiveTab] = useState('ocean')
  const active = categories.find(c => c.id === activeTab)!

  return (
    <>
      <SEO title="Our Services" canonical="/services"
        description="Logistics365 offers 20+ services: sea freight, air freight, customs brokerage, warehousing, 3PL/4PL, project cargo, and last mile delivery in Sri Lanka."
        keywords="freight forwarding services Sri Lanka, sea freight, air freight, customs clearance, warehousing, 3PL, supply chain management" />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '400px', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=1920&q=80')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,25,35,0.97) 0%, rgba(15,25,35,0.85) 50%, rgba(14,155,155,0.2) 100%)' }} />
        <div className="relative z-10 wrap pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-[#E8541A]/15 border border-[#E8541A]/25 text-[#E8541A] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8541A] animate-pulse" />
              What We Offer
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              20+ Logistics<br /><span className="text-[#0E9B9B]">Services</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl">
              Comprehensive freight forwarding and supply chain solutions tailored to your business needs — delivered 365 days a year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sticky category tabs */}
      <section className="bg-white border-b border-gray-100" style={{ position: 'sticky', top: '88px', zIndex: 40 }}>
        <div className="wrap">
          <div style={{ display: 'flex', overflowX: 'auto', gap: '0.25rem', padding: '0.75rem 0' }}>
            {categories.map(cat => (
              <button key={cat.id} onClick={() => setActiveTab(cat.id)}
                className="flex-shrink-0 text-sm font-semibold transition-all"
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '999px',
                  ...(activeTab === cat.id
                    ? { background: cat.color, color: '#fff', boxShadow: `0 4px 14px ${cat.color}40` }
                    : { background: 'transparent', color: '#6B7280' })
                }}>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Active category */}
      <section className="py-20 bg-white">
        <div className="wrap">
          <motion.div key={activeTab} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="grid md:grid-cols-2 gap-14 items-center mb-16">
              <div>
                <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1.5 rounded-full mb-4"
                  style={{ background: active.bgLight, color: active.color }}>
                  {active.label}
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">{active.tagline}</h2>
                <p className="text-gray-600 leading-relaxed mb-7">{active.intro}</p>
                <ul className="grid grid-cols-2 gap-2.5">
                  {active.benefits.map(b => (
                    <li key={b} className="flex items-center gap-2 text-sm text-gray-700 font-medium">
                      <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: active.bgLight }}>
                        <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} style={{ stroke: active.color }}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-xl" style={{ height: '340px' }}>
                <img src={active.img} alt={active.label} className="w-full h-full object-cover" />
                <div className="absolute inset-0" style={{ background: `linear-gradient(to top, ${active.color}44, transparent)` }} />
              </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {active.services.map((s, i) => (
                <motion.div key={s.name} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}
                  className="p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition-all card-lift group"
                  style={{ borderLeft: `3px solid ${active.color}` }}>
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4"
                    style={{ background: active.bgLight }}>
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ stroke: active.color }}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                    </svg>
                  </div>
                  <h3 className="font-black text-gray-900 mb-2">{s.name}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="wrap">
          <div className="text-center mb-12">
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-2">Who We Serve</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Industry Sectors</h2>
            <p className="text-gray-500 mt-2">Tailored logistics solutions across diverse industries</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {industries.map((ind, i) => (
              <motion.div key={ind.name} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.05 }} viewport={{ once: true }}
                className="bg-white rounded-2xl p-5 text-center border border-gray-100 hover:border-[#E8541A]/20 hover:shadow-md transition-all card-lift">
                <div className="text-3xl mb-2">{ind.icon}</div>
                <div className="font-bold text-gray-900 text-sm">{ind.name}</div>
                <div className="text-gray-400 text-xs mt-1">{ind.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advantages strip */}
      <section className="py-14 bg-[#0F1923]">
        <div className="wrap">
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6 text-center">
            {[
              { icon: '⏰', label: '24/7 Support', sub: 'Round-the-clock operations' },
              { icon: '🌐', label: 'Global Network', sub: 'Partners worldwide' },
              { icon: '📋', label: 'Fast Customs', sub: 'Expert brokerage team' },
              { icon: '💰', label: 'Competitive Rates', sub: 'Best-value freight' },
              { icon: '📡', label: 'Live Tracking', sub: 'End-to-end visibility' },
            ].map(item => (
              <div key={item.label} className="text-center">
                <div className="text-3xl mb-2">{item.icon}</div>
                <div className="text-white font-bold text-sm">{item.label}</div>
                <div className="text-gray-500 text-xs mt-0.5">{item.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-white">
        <div className="wrap text-center">
          <h2 className="text-3xl font-black text-gray-900 mb-3">Need a Freight Quote?</h2>
          <p className="text-gray-500 mb-7" style={{ maxWidth: '480px', marginLeft: 'auto', marginRight: 'auto' }}>
            Contact our team for a customized logistics solution. We respond within 24 hours — 365 days a year.
          </p>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-[#E8541A] text-white px-10 py-4 rounded-full font-black text-lg hover:bg-[#c9440f] hover:shadow-xl hover:shadow-[#E8541A]/25 transition-all hover:-translate-y-0.5">
            Request a Quote →
          </Link>
        </div>
      </section>
    </>
  )
}
