import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from 'lucide-react'

function FadeUp({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay, ease: 'easeOut' }}
      className={className}>
      {children}
    </motion.div>
  )
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '', company: '', email: '', phone: '', service: '', origin: '', destination: '', message: ''
  })
  const [sent, setSent] = useState(false)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div style={{ background: '#F6F5F2' }}>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className="relative overflow-hidden pt-40 pb-24 px-4"
        style={{ background: 'linear-gradient(135deg, #0D1B2A 0%, #152436 60%, #0D1B2A 100%)' }}>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20" style={{ background: '#E8541A' }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-6"
              style={{ background: 'rgba(232,84,26,0.15)', color: '#E8541A' }}>
              Let's Talk Freight
            </span>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-[1.08] mb-6">
              Get a Quote.<br /><span style={{ color: '#E8541A' }}>Move Your Cargo.</span>
            </h1>
            <p className="text-lg max-w-xl mx-auto" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Our freight experts respond within 2 hours. No generic quotes — just tailored solutions for your specific needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── MAIN CONTENT ────────────────────────────────────── */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">

          {/* Left — contact info */}
          <FadeUp>
            <div className="rounded-3xl p-8 sticky top-28" style={{ background: '#0D1B2A' }}>
              <h2 className="text-2xl font-extrabold text-white mb-2">Logistics 365 (Pvt) Ltd</h2>
              <p className="text-sm mb-8" style={{ color: 'rgba(255,255,255,0.5)' }}>A subsidiary of CL Synergy Limited</p>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(232,84,26,0.15)' }}>
                    <MapPin size={16} style={{ color: '#E8541A' }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: '#E8541A' }}>Address</div>
                    <p className="text-white text-sm">06th Floor, Iceland Business Centre<br />Colombo 03, Sri Lanka</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(14,155,155,0.15)' }}>
                    <Phone size={16} style={{ color: '#0E9B9B' }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: '#0E9B9B' }}>Phone</div>
                    <a href="tel:+94115300250" className="text-white text-sm hover:text-[#E8541A] transition-colors">+94 11 530 0250</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(123,193,74,0.15)' }}>
                    <Mail size={16} style={{ color: '#7BC14A' }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: '#7BC14A' }}>Email</div>
                    <a href="mailto:info@log-365.com" className="text-white text-sm hover:text-[#E8541A] transition-colors">info@log-365.com</a>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0" style={{ background: 'rgba(232,84,26,0.15)' }}>
                    <Clock size={16} style={{ color: '#E8541A' }} />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: '#E8541A' }}>Hours</div>
                    <p className="text-white text-sm">24 / 7 / 365</p>
                    <p className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>We never stop. Neither does cargo.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ background: '#7BC14A' }} />
                  <span className="text-xs font-semibold" style={{ color: '#7BC14A' }}>CL Synergy Group Member</span>
                </div>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  Backed by 20+ years of industry expertise. SLAFFA member. Licensed customs brokers.
                </p>
              </div>
            </div>
          </FadeUp>

          {/* Right — form */}
          <FadeUp delay={0.1}>
            {sent ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                className="card p-12 text-center">
                <div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'rgba(123,193,74,0.1)' }}>
                  <ArrowRight size={32} style={{ color: '#7BC14A' }} />
                </div>
                <h3 className="text-2xl font-extrabold mb-3" style={{ color: '#0D1B2A' }}>Quote Request Sent!</h3>
                <p className="text-slate-500">Our team will respond within 2 business hours with a tailored freight solution.</p>
              </motion.div>
            ) : (
              <form onSubmit={submit} className="card p-8 space-y-4">
                <h3 className="text-xl font-extrabold mb-2" style={{ color: '#0D1B2A' }}>Request a Freight Quote</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-1.5" style={{ color: '#374151' }}>Full Name *</label>
                    <input name="name" value={form.name} onChange={handle} required placeholder="John Doe" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1.5" style={{ color: '#374151' }}>Company</label>
                    <input name="company" value={form.company} onChange={handle} placeholder="Company Ltd" className="input-field" />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-1.5" style={{ color: '#374151' }}>Email *</label>
                    <input name="email" type="email" value={form.email} onChange={handle} required placeholder="john@company.com" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1.5" style={{ color: '#374151' }}>Phone</label>
                    <input name="phone" value={form.phone} onChange={handle} placeholder="+94 xx xxx xxxx" className="input-field" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1.5" style={{ color: '#374151' }}>Service Required</label>
                  <select name="service" value={form.service} onChange={handle} className="input-field">
                    <option value="">Select a service...</option>
                    <option>Sea Freight — FCL</option>
                    <option>Sea Freight — LCL</option>
                    <option>Air Freight — Express</option>
                    <option>Air Freight — Consolidated</option>
                    <option>Customs Brokerage</option>
                    <option>Warehousing</option>
                    <option>3PL / 4PL Solutions</option>
                    <option>Project Cargo</option>
                    <option>Cross-Trade / Transshipment</option>
                    <option>Other / Multiple</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-1.5" style={{ color: '#374151' }}>Origin</label>
                    <input name="origin" value={form.origin} onChange={handle} placeholder="e.g. Colombo, Sri Lanka" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold mb-1.5" style={{ color: '#374151' }}>Destination</label>
                    <input name="destination" value={form.destination} onChange={handle} placeholder="e.g. Dubai, UAE" className="input-field" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold mb-1.5" style={{ color: '#374151' }}>Additional Details</label>
                  <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Cargo type, weight, dimensions, special requirements..." className="input-field resize-none" />
                </div>
                <button type="submit"
                  className="glow-btn w-full py-4 rounded-xl font-bold text-sm text-white flex items-center justify-center gap-2"
                  style={{ background: '#E8541A' }}>
                  <Send size={16} /> Send Quote Request
                </button>
                <p className="text-center text-xs text-slate-400">We respond within 2 hours · No spam · No obligation</p>
              </form>
            )}
          </FadeUp>
        </div>
      </section>

      {/* ── QUICK CONTACT STRIP ─────────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: Phone,  label: 'Call Us Now',   value: '+94 11 530 0250',   href: 'tel:+94115300250',          color: '#E8541A' },
            { icon: Mail,   label: 'Email Us',       value: 'info@log-365.com',  href: 'mailto:info@log-365.com',   color: '#0E9B9B' },
            { icon: MapPin, label: 'Visit Us',        value: 'Iceland Business Centre, Colombo 03', href: '#',     color: '#7BC14A' },
          ].map((c, i) => (
            <FadeUp key={c.label} delay={i * 0.08}>
              <a href={c.href} className="card p-6 flex items-center gap-5 group">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                  style={{ background: `rgba(${c.color === '#E8541A' ? '232,84,26' : c.color === '#0E9B9B' ? '14,155,155' : '123,193,74'},0.1)` }}>
                  <c.icon size={20} style={{ color: c.color }} />
                </div>
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest mb-0.5" style={{ color: c.color }}>{c.label}</div>
                  <div className="font-bold text-sm" style={{ color: '#0D1B2A' }}>{c.value}</div>
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      </section>
    </div>
  )
}
