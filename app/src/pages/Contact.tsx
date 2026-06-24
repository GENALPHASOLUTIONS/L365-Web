import { useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    label: 'Head Office',
    value: '06th Floor, No. 30, Iceland Business Centre,\nR.A. De Mel Mawatha, Colombo 03, Sri Lanka',
    color: '#E8541A',
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
      </svg>
    ),
    label: 'Telephone',
    value: '+94 11 530 0250',
    color: '#0E9B9B',
    href: 'tel:+94115300250',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
      </svg>
    ),
    label: 'Email',
    value: 'info@log-365.com',
    color: '#E8541A',
    href: 'mailto:info@log-365.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
      </svg>
    ),
    label: 'Website',
    value: 'www.log-365.com',
    color: '#0E9B9B',
    href: 'https://www.log-365.com',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    label: 'Working Hours',
    value: '24 / 7 / 365 — Always Operational',
    color: '#7BC14A',
    href: null,
  },
]

const serviceOptions = [
  'Sea Freight (FCL/LCL)', 'Air Freight', 'LCL Consolidation', 'FCL Shipments',
  'Customs House Brokerage', 'Import & Export Management', 'Cross Border Logistics',
  'Warehousing Solutions', 'Bonded Warehousing', '3PL Solutions', '4PL Solutions',
  'Project Cargo', 'Door-to-Door Logistics', 'Supply Chain Management',
  'Cargo Insurance', 'Last Mile Delivery', 'Distribution Solutions', 'Other',
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', origin: '', destination: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [focused, setFocused] = useState<string | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const inputStyle = (field: string) => ({
    borderColor: focused === field ? '#0E9B9B' : '#E5E7EB',
    boxShadow: focused === field ? '0 0 0 3px rgba(14,155,155,0.12)' : 'none',
  })

  return (
    <>
      <SEO title="Contact Us" canonical="/contact"
        description="Contact Logistics365 for freight quotes and inquiries. Head office: Iceland Business Centre, Colombo 03. Call +94 11 530 0250 or email info@log-365.com."
        keywords="contact Logistics365, freight quote Sri Lanka, logistics inquiry Colombo" />

      {/* Hero */}
      <section className="relative overflow-hidden" style={{ minHeight: '360px', display: 'flex', alignItems: 'center' }}>
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1434030216411-0b793f4b6f74?w=1920&q=80')" }} />
        <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, rgba(15,25,35,0.97) 0%, rgba(15,25,35,0.88) 60%, rgba(14,155,155,0.15) 100%)' }} />
        <div className="relative z-10 wrap pt-32 pb-20">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 bg-[#E8541A]/15 border border-[#E8541A]/25 text-[#E8541A] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E8541A] animate-pulse" />
              Get In Touch
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-white mb-4 leading-tight">
              Let's Move Your<br /><span className="text-[#0E9B9B]">Cargo</span> Forward
            </h1>
            <p className="text-gray-300 text-lg max-w-xl">
              Ready to ship globally? Get a competitive quote within <strong className="text-white">24 hours</strong> — our team is here 365 days a year.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick contact stats */}
      <section className="bg-white border-b border-gray-100">
        <div className="wrap py-6 grid grid-cols-3 gap-4">
          {[
            { label: 'Response Time', value: '< 24 hrs', color: '#E8541A' },
            { label: 'Operations', value: '24/7/365', color: '#0E9B9B' },
            { label: 'Services', value: '20+', color: '#7BC14A' },
          ].map(s => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-black" style={{ color: s.color }}>{s.value}</div>
              <div className="text-gray-500 text-xs mt-0.5 font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main content */}
      <section className="py-20 bg-[#F8FAFC]">
        <div className="wrap">
          <div className="grid lg:grid-cols-5 gap-10 items-start">

            {/* Contact info card */}
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="lg:col-span-2">
              <div className="bg-[#0F1923] rounded-3xl p-8 text-white" style={{ position: 'sticky', top: '120px' }}>
                <h2 className="text-2xl font-black mb-2">Contact Information</h2>
                <p className="text-gray-400 text-sm mb-8">Our team is ready to assist you with all your freight forwarding needs.</p>

                <div className="space-y-6">
                  {contactInfo.map(c => (
                    <div key={c.label} className="flex gap-4 items-start">
                      <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: `${c.color}20`, color: c.color }}>
                        {c.icon}
                      </div>
                      <div>
                        <div className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">{c.label}</div>
                        {c.href ? (
                          <a href={c.href} className="text-sm text-white hover:text-[#E8541A] transition-colors font-medium" style={{ display: 'block' }}>
                            {c.value}
                          </a>
                        ) : (
                          <p className="text-sm text-gray-300 leading-relaxed" style={{ whiteSpace: 'pre-line' }}>{c.value}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10">
                  <div className="text-xs text-gray-500 mb-3 font-bold uppercase tracking-wider">A Subsidiary of</div>
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#0E9B9B] animate-pulse" />
                    <div>
                      <div className="text-white font-black">CL Synergy Limited</div>
                      <div className="text-gray-500 text-xs">Serving the industry since 2004</div>
                    </div>
                  </div>
                </div>

                {/* Decorative circles */}
                <div className="absolute -bottom-8 -right-8 w-32 h-32 rounded-full opacity-10" style={{ background: '#E8541A', filter: 'blur(20px)' }} />
                <div className="absolute top-20 -left-8 w-24 h-24 rounded-full opacity-10" style={{ background: '#0E9B9B', filter: 'blur(16px)' }} />
              </div>
            </motion.div>

            {/* Quote form */}
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
              className="lg:col-span-3">
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
                {submitted ? (
                  <div className="text-center py-20">
                    <div className="w-20 h-20 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5" style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                      <svg className="w-10 h-10 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">Thank You!</h3>
                    <p className="text-gray-500">We've received your inquiry and will respond within 24 hours.</p>
                    <button onClick={() => { setSubmitted(false); setForm({ name: '', company: '', email: '', phone: '', service: '', origin: '', destination: '', message: '' }) }}
                      className="mt-6 text-sm text-[#E8541A] font-bold hover:underline">
                      Submit another request
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-black text-gray-900 mb-2">Request a Quote</h2>
                    <p className="text-gray-500 text-sm mb-7">Fill in your shipment details and our team will prepare a competitive quote for you.</p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      {/* Row 1 */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Full Name *</label>
                          <input type="text" placeholder="John Perera" required
                            className="input-field" style={inputStyle('name')}
                            value={form.name} onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                            onChange={e => setForm(p => ({ ...p, name: e.target.value }))} />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Company Name</label>
                          <input type="text" placeholder="Your Company Ltd"
                            className="input-field" style={inputStyle('company')}
                            value={form.company} onFocus={() => setFocused('company')} onBlur={() => setFocused(null)}
                            onChange={e => setForm(p => ({ ...p, company: e.target.value }))} />
                        </div>
                      </div>

                      {/* Row 2 */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Email Address *</label>
                          <input type="email" placeholder="john@company.com" required
                            className="input-field" style={inputStyle('email')}
                            value={form.email} onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                            onChange={e => setForm(p => ({ ...p, email: e.target.value }))} />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Phone Number</label>
                          <input type="tel" placeholder="+94 77 XXX XXXX"
                            className="input-field" style={inputStyle('phone')}
                            value={form.phone} onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                            onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} />
                        </div>
                      </div>

                      {/* Service */}
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Service Required</label>
                        <select className="input-field" style={{ ...inputStyle('service'), appearance: 'none', cursor: 'pointer' }}
                          value={form.service} onFocus={() => setFocused('service')} onBlur={() => setFocused(null)}
                          onChange={e => setForm(p => ({ ...p, service: e.target.value }))}>
                          <option value="">Select a service...</option>
                          {serviceOptions.map(s => <option key={s}>{s}</option>)}
                        </select>
                      </div>

                      {/* Origin / Destination */}
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Origin Port / City</label>
                          <input type="text" placeholder="e.g. Colombo, Sri Lanka"
                            className="input-field" style={inputStyle('origin')}
                            value={form.origin} onFocus={() => setFocused('origin')} onBlur={() => setFocused(null)}
                            onChange={e => setForm(p => ({ ...p, origin: e.target.value }))} />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Destination Port / City</label>
                          <input type="text" placeholder="e.g. Dubai, UAE"
                            className="input-field" style={inputStyle('destination')}
                            value={form.destination} onFocus={() => setFocused('destination')} onBlur={() => setFocused(null)}
                            onChange={e => setForm(p => ({ ...p, destination: e.target.value }))} />
                        </div>
                      </div>

                      {/* Message */}
                      <div>
                        <label className="block text-xs font-bold text-gray-600 uppercase tracking-wide mb-1.5">Shipment Details / Message</label>
                        <textarea rows={4} placeholder="Cargo type, weight, dimensions, special requirements..."
                          className="input-field resize-none" style={inputStyle('message')}
                          value={form.message} onFocus={() => setFocused('message')} onBlur={() => setFocused(null)}
                          onChange={e => setForm(p => ({ ...p, message: e.target.value }))} />
                      </div>

                      <button type="submit"
                        className="w-full bg-[#E8541A] text-white py-4 rounded-xl font-black text-base hover:bg-[#c9440f] transition-all hover:shadow-xl hover:shadow-[#E8541A]/20 hover:-translate-y-0.5">
                        Send Inquiry →
                      </button>

                      <p className="text-center text-xs text-gray-400">
                        We respond to all inquiries within 24 hours. For urgent shipments, call <a href="tel:+94115300250" className="text-[#0E9B9B] font-semibold">+94 11 530 0250</a>
                      </p>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CL Synergy note */}
      <section className="py-12 bg-white border-t border-gray-100">
        <div className="wrap text-center">
          <p className="text-gray-500 text-sm">
            Logistics365 (Pvt) Ltd is a subsidiary of{' '}
            <span className="font-bold text-gray-900">CL Synergy Limited</span> — serving the freight forwarding industry since 2004.
            <br className="hidden md:block" />
            Registered at: 06th Floor, Iceland Business Centre, R.A. De Mel Mawatha, Colombo 03, Sri Lanka.
          </p>
        </div>
      </section>
    </>
  )
}
