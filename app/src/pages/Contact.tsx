import { useState } from 'react'
import { motion } from 'framer-motion'
import SEO from '../components/SEO'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <SEO title="Contact Us" canonical="/contact" description="Contact Logistics 365 for freight forwarding quotes, inquiries, and support. Based in Colombo, Sri Lanka with global reach." keywords="contact Logistics 365, freight quote Sri Lanka, logistics inquiry" />

      {/* Hero */}
      <section className="relative pt-32 pb-20 bg-[#0F1923] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0F1923] to-[#0E9B9B]/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-[#E8541A] font-bold text-sm tracking-widest uppercase">Get In Touch</span>
            <h1 className="text-5xl md:text-6xl font-black text-white mt-2 mb-6">Contact Us</h1>
            <p className="text-gray-300 text-xl max-w-2xl">Ready to ship? Get a quote or reach out to our team — we're here 365 days a year.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-16">
          {/* Info */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-black text-gray-900 mb-8">Get a Quote</h2>
            <div className="space-y-6">
              {[
                { icon: '📍', label: 'Address', value: 'Colombo, Sri Lanka' },
                { icon: '📞', label: 'Phone', value: '+94 11 XXX XXXX' },
                { icon: '✉️', label: 'Email', value: 'info@logistics365.lk' },
                { icon: '🕐', label: 'Hours', value: 'Mon–Sat: 8am–6pm | 365 days for emergencies' },
              ].map(c => (
                <div key={c.label} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-[#E8541A]/10 flex items-center justify-center text-xl flex-shrink-0">{c.icon}</div>
                  <div>
                    <div className="font-bold text-gray-900">{c.label}</div>
                    <div className="text-gray-500 text-sm">{c.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.div initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            {submitted ? (
              <div className="text-center py-16">
                <div className="text-6xl mb-4">✅</div>
                <h3 className="text-2xl font-black text-gray-900">Thank you!</h3>
                <p className="text-gray-500 mt-2">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  { id: 'name', label: 'Full Name', type: 'text', placeholder: 'John Perera' },
                  { id: 'email', label: 'Email Address', type: 'email', placeholder: 'john@company.com' },
                  { id: 'phone', label: 'Phone Number', type: 'tel', placeholder: '+94 77 XXX XXXX' },
                ].map(f => (
                  <div key={f.id}>
                    <label htmlFor={f.id} className="block text-sm font-semibold text-gray-700 mb-1">{f.label}</label>
                    <input id={f.id} type={f.type} placeholder={f.placeholder} required
                      value={form[f.id as keyof typeof form]}
                      onChange={e => setForm(p => ({ ...p, [f.id]: e.target.value }))}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0E9B9B] focus:border-transparent" />
                  </div>
                ))}
                <div>
                  <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-1">Service Required</label>
                  <select id="service" value={form.service} onChange={e => setForm(p => ({ ...p, service: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#0E9B9B] focus:border-transparent">
                    <option value="">Select a service</option>
                    <option>Sea Freight</option>
                    <option>Air Freight</option>
                    <option>Customs Clearance</option>
                    <option>Warehousing</option>
                    <option>Project Cargo</option>
                    <option>Supply Chain Solutions</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-1">Message / Details</label>
                  <textarea id="message" rows={4} placeholder="Tell us about your shipment..." value={form.message} onChange={e => setForm(p => ({ ...p, message: e.target.value }))}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0E9B9B] focus:border-transparent resize-none" />
                </div>
                <button type="submit" className="w-full bg-[#E8541A] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#c9440f] transition-all hover:scale-[1.01]">
                  Send Request →
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </>
  )
}
