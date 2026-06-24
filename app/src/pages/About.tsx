import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const team = [
  {
    name: 'Mr. Anuradha Sooriyaarachi',
    role: 'Managing Director',
    color: '#E8541A',
    initials: 'AS',
    bio: 'Strategic leadership and vision driving the company\'s growth and operational excellence across all business verticals.',
  },
  {
    name: 'Mr. Rahula Silva',
    role: 'Executive Director',
    color: '#0E9B9B',
    initials: 'RS',
    bio: 'Overseeing business development and client relationships with deep industry knowledge and expertise.',
  },
  {
    name: 'Ms. Rachini Liyanage',
    role: 'Executive Director',
    color: '#7BC14A',
    initials: 'RL',
    bio: 'Leading operations and ensuring service delivery excellence across all functions and service lines.',
  },
]

const values = [
  { num: '01', title: 'Client First', desc: 'Every decision we make is guided by the interests of our clients. Your success is our success.', color: '#E8541A' },
  { num: '02', title: 'Integrity', desc: 'Transparent operations and honest communication — at every stage of the shipment journey.', color: '#0E9B9B' },
  { num: '03', title: 'Excellence', desc: 'Maintaining the highest standards in every process, interaction, and service delivered.', color: '#7BC14A' },
  { num: '04', title: 'Collaboration', desc: 'Building lasting partnerships through teamwork, trust, and a shared commitment to results.', color: '#E8541A' },
]

const milestones = [
  { year: '2004', label: 'CL Synergy Limited Founded', desc: 'Founded with a vision to provide exceptional freight forwarding services, CL Synergy quickly established itself as a trusted name in the Sri Lankan logistics industry.' },
  { year: '2024', label: 'Launch of Logistics365 (Pvt) Ltd', desc: 'Building on two decades of expertise, Logistics365 was established as a specialized logistics solutions company — combining heritage with innovation.' },
]

const pillars = [
  { icon: '🤝', title: 'Reliability', desc: 'Unwavering commitment to consistent, dependable service delivery across all operations.' },
  { icon: '👥', title: 'Customer Focus', desc: 'Placing client interests at the heart of every decision and solution we provide.' },
  { icon: '🌐', title: 'Global Reach', desc: 'Extensive network of partners ensuring seamless international logistics coverage.' },
  { icon: '💡', title: 'Innovation', desc: 'Embracing technology and modern practices for smarter, faster logistics efficiency.' },
]

export default function About() {
  return (
    <>
      <SEO title="About Us" canonical="/about"
        description="Learn about Logistics365 (Pvt) Ltd — our story, mission, values and leadership team. A subsidiary of CL Synergy Limited, serving the freight industry since 2004."
        keywords="about Logistics365, CL Synergy, freight forwarding company Sri Lanka, logistics company Colombo" />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '420px', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1920&q=80')" }} />
        <div className="absolute inset-0 hero-overlay" />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(to right, rgba(15,25,35,0.98) 0%, rgba(15,25,35,0.75) 60%, transparent 100%)' }} />
        <div className="relative z-10 wrap pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-[#E8541A]/15 border border-[#E8541A]/25 text-[#E8541A] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8541A] animate-pulse" />
              About Our Company
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Two Decades of<br />
              <span className="text-[#E8541A]">Logistics</span> <span className="text-[#0E9B9B]">Excellence</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-xl leading-relaxed">
              From CL Synergy to Logistics365 — built on trust, driven by innovation, committed to seamless synergy every single day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Who we are */}
      <section className="py-20 bg-white">
        <div className="wrap grid md:grid-cols-2 gap-14 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-3">Who We Are</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-5 leading-tight">
              Sri Lanka's Premier<br />Freight Forwarding Partner
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              <strong>Logistics365 (Pvt) Ltd</strong> is a modern logistics and freight management company delivering end-to-end supply chain solutions across international and domestic markets.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Established in <strong>April 2024</strong> and built upon the trusted legacy of <strong>CL Synergy Limited</strong>, we provide stable, uninterrupted and customized logistics solutions that place our clients' interests at the heart of everything we do.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              We combine decades of industry expertise with cutting-edge technology to deliver seamless, reliable and customer-focused logistics services that power global trade.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center p-4 rounded-xl" style={{ background: 'rgba(232,84,26,0.06)' }}>
                <div className="text-3xl font-black text-[#E8541A]">20+</div>
                <div className="text-gray-500 text-xs mt-1 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-4 rounded-xl" style={{ background: 'rgba(14,155,155,0.06)' }}>
                <div className="text-3xl font-black text-[#0E9B9B]">20+</div>
                <div className="text-gray-500 text-xs mt-1 font-medium">Services Offered</div>
              </div>
              <div className="text-center p-4 rounded-xl" style={{ background: 'rgba(123,193,74,0.06)' }}>
                <div className="text-3xl font-black text-[#7BC14A]">365</div>
                <div className="text-gray-500 text-xs mt-1 font-medium">Days Service</div>
              </div>
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
            <img src="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=800&q=80"
              alt="Global logistics" className="rounded-2xl shadow-2xl w-full object-cover" style={{ height: '420px' }} />
            <div className="absolute -bottom-6 -left-6 bg-[#E8541A] text-white p-5 rounded-2xl shadow-xl">
              <div className="text-3xl font-black">24/7</div>
              <div className="text-xs font-bold tracking-widest uppercase opacity-80 mt-0.5">Always Operational</div>
            </div>
            <div className="absolute -top-4 -right-4 bg-white text-gray-900 p-4 rounded-2xl shadow-xl border border-gray-100">
              <div className="text-sm font-bold text-[#0E9B9B]">A Subsidiary of</div>
              <div className="text-base font-black">CL Synergy Ltd</div>
              <div className="text-xs text-gray-400 mt-0.5">Est. 2004</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Heritage timeline */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="wrap">
          <div className="text-center mb-14">
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-2">Our Story</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Our Heritage</h2>
            <p className="text-gray-500 mt-2">From CL Synergy to Logistics365 — Two Decades of Excellence</p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 -translate-x-0.5 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
            {milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15 }} viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center mb-10 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`md:w-5/12 ${i % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                  <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                    <div className="text-xs font-bold text-[#E8541A] tracking-widest uppercase mb-2">{m.label}</div>
                    <p className="text-gray-600 text-sm leading-relaxed">{m.desc}</p>
                  </div>
                </div>
                <div className="md:w-2/12 flex justify-center my-4 md:my-0">
                  <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-black text-sm shadow-lg z-10"
                    style={{ background: i === 0 ? '#0F1923' : '#E8541A' }}>
                    {m.year}
                  </div>
                </div>
                <div className="md:w-5/12" />
              </motion.div>
            ))}
          </div>
          <div className="mt-8 bg-[#0F1923] text-white rounded-2xl p-8 text-center">
            <p className="text-lg italic text-gray-300">
              "Logistics365 proudly carries forward the values, expertise and customer-centric approach developed by CL Synergy over two decades."
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="wrap">
          <div className="text-center mb-14">
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-2">Our Purpose</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Mission & Vision</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl p-10 text-white"
              style={{ background: 'linear-gradient(135deg, #E8541A, #c9440f)' }}>
              <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/10" />
              <div className="absolute -right-4 bottom-0 w-24 h-24 rounded-full bg-white/5" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                </div>
                <h3 className="text-2xl font-black mb-3">Our Mission</h3>
                <p className="leading-relaxed opacity-90">
                  To provide <strong>stable, uninterrupted and customized logistics solutions</strong> that place our clients' interests at the heart of everything we do — ensuring operational excellence and customer satisfaction throughout the year.
                </p>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true }}
              className="relative overflow-hidden rounded-2xl p-10 text-white"
              style={{ background: 'linear-gradient(135deg, #0E9B9B, #087a7a)' }}>
              <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/10" />
              <div className="absolute -right-4 bottom-0 w-24 h-24 rounded-full bg-white/5" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center mb-5">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                </div>
                <h3 className="text-2xl font-black mb-3">Our Vision</h3>
                <p className="leading-relaxed opacity-90">
                  To be the <strong>most trusted and resilient partner</strong> in the logistics industry — delivering seamless synergy 365 days a year through innovation, reliability, and a deeply customer-centric approach.
                </p>
              </div>
            </motion.div>
          </div>

          {/* 4 pillars */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {pillars.map((p, i) => (
              <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.08 }} viewport={{ once: true }}
                className="text-center p-6 rounded-2xl border border-gray-100 hover:border-[#E8541A]/20 hover:shadow-lg transition-all group card-lift">
                <div className="text-3xl mb-3">{p.icon}</div>
                <h4 className="font-black text-gray-900 mb-2 group-hover:text-[#E8541A] transition-colors">{p.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-[#0F1923]">
        <div className="wrap">
          <div className="text-center mb-14">
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-2">What Drives Us</p>
            <h2 className="text-3xl md:text-4xl font-black text-white">Our Core Values</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} viewport={{ once: true }}
                className="glass-card p-7 hover:border-white/25 transition-all card-lift">
                <div className="text-4xl font-black mb-3" style={{ color: v.color, opacity: 0.3 }}>{v.num}</div>
                <h4 className="text-white font-black text-lg mb-2" style={{ borderBottom: `2px solid ${v.color}`, paddingBottom: '0.5rem', marginBottom: '0.75rem' }}>{v.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-white">
        <div className="wrap">
          <div className="text-center mb-14">
            <p className="text-[#E8541A] font-bold text-sm tracking-widest uppercase mb-2">Our People</p>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">Leadership Team</h2>
            <p className="text-gray-500 mt-2 max-w-lg" style={{ marginLeft: 'auto', marginRight: 'auto' }}>Experienced leaders driving operational excellence with decades of combined logistics expertise</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.12 }} viewport={{ once: true }}
                className="text-center p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all card-lift group">
                <div className="w-24 h-24 rounded-full flex items-center justify-center text-white text-2xl font-black mx-auto mb-5"
                  style={{ background: `linear-gradient(135deg, ${t.color}, ${t.color}bb)`, marginLeft: 'auto', marginRight: 'auto' }}>
                  {t.initials}
                </div>
                <h3 className="font-black text-gray-900 text-lg">{t.name}</h3>
                <p className="font-bold text-sm mt-1 mb-4" style={{ color: t.color }}>{t.role}</p>
                <div className="w-8 h-0.5 mx-auto mb-4" style={{ background: t.color, marginLeft: 'auto', marginRight: 'auto' }} />
                <p className="text-gray-500 text-sm leading-relaxed">{t.bio}</p>
              </motion.div>
            ))}
          </div>
          <div className="mt-10 bg-[#0F1923] rounded-2xl p-7 text-center">
            <p className="text-gray-300 text-sm leading-relaxed">
              Our leadership team brings together <strong className="text-white">decades of combined experience</strong> in logistics, freight forwarding, and supply chain management — guiding Logistics365 with vision, integrity, and operational excellence.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-[#F8FAFC]">
        <div className="wrap text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black text-gray-900 mb-3">Ready to Work With Us?</h2>
            <p className="text-gray-500 mb-7">Let us transform your logistics challenges into competitive advantages.</p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="/contact" className="bg-[#E8541A] text-white px-8 py-3.5 rounded-full font-bold hover:bg-[#c9440f] hover:shadow-xl hover:shadow-[#E8541A]/25 transition-all hover:-translate-y-0.5">
                Get a Quote →
              </a>
              <a href="/services" className="border-2 border-gray-200 text-gray-700 px-8 py-3.5 rounded-full font-bold hover:border-[#0E9B9B] hover:text-[#0E9B9B] transition-all">
                View Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
