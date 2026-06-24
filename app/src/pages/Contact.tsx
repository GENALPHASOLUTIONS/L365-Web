import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }} className={className}>
      {children}
    </motion.div>
  )
}

const info = [
  { icon: MapPin, label: 'Address', value: '06th Floor, Iceland Business Centre\nColombo 03, Sri Lanka', href: '', accent: '#E8541A' },
  { icon: Phone,  label: 'Phone',   value: '+94 11 530 0250',  href: 'tel:+94115300250',        accent: '#0E9B9B' },
  { icon: Mail,   label: 'Email',   value: 'info@log-365.com', href: 'mailto:info@log-365.com', accent: '#7BC14A' },
  { icon: Clock,  label: 'Hours',   value: '24 / 7 / 365\nWe never stop. Neither does cargo.', href: '', accent: '#E8541A' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', service: '', origin: '', destination: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(p => ({ ...p, [e.target.name]: e.target.value }))

  const submit = (e: React.FormEvent) => { e.preventDefault(); setSent(true) }

  return (
    <div style={{ background: '#fff' }}>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section style={{ background: 'linear-gradient(160deg, #0D1B2A 0%, #1a2f44 55%, #0E9B9B 150%)', paddingTop: 140, paddingBottom: 80, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-5%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,84,26,0.3) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="badge badge-orange" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>Let's Talk Freight</span>
            <h1 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(2.5rem,5vw,4rem)', color: '#fff', lineHeight: 1.08, marginBottom: '1.25rem', maxWidth: 560 }}>
              Get a Quote.<br /><span style={{ color: '#E8541A' }}>Move Your Cargo.</span>
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', maxWidth: 460, lineHeight: 1.7 }}>
              Our freight experts respond within 2 hours — not with a generic price list, but a tailored solution for your specific cargo and route.
            </p>
          </motion.div>
        </div>
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 60, background: 'linear-gradient(to bottom, transparent, #fff)', pointerEvents: 'none' }} />
      </section>

      {/* ── Main layout ───────────────────────────────────── */}
      <section style={{ padding: '5rem 0' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: '3rem', alignItems: 'start' }}>

            {/* Left — contact info */}
            <Reveal>
              <div style={{ position: 'sticky', top: 120 }}>
                <h2 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 800, fontSize: '1.4rem', color: '#111827', marginBottom: '.375rem' }}>Logistics 365 (Pvt) Ltd</h2>
                <p style={{ fontSize: '.82rem', color: '#9CA3AF', marginBottom: '2rem' }}>A subsidiary of CL Synergy Limited</p>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2rem' }}>
                  {info.map(item => (
                    <div key={item.label} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ width: 40, height: 40, borderRadius: 8, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `rgba(${item.accent === '#E8541A' ? '232,84,26' : item.accent === '#0E9B9B' ? '14,155,155' : '123,193,74'},.1)` }}>
                        <item.icon size={16} style={{ color: item.accent }} />
                      </div>
                      <div>
                        <p style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: item.accent, marginBottom: '.3rem' }}>{item.label}</p>
                        {item.href
                          ? <a href={item.href} style={{ fontSize: '.875rem', color: '#111827', fontWeight: 500, textDecoration: 'none' }}
                              onMouseEnter={e => (e.currentTarget.style.color = item.accent)}
                              onMouseLeave={e => (e.currentTarget.style.color = '#111827')}>{item.value}</a>
                          : <p style={{ fontSize: '.875rem', color: '#374151', lineHeight: 1.55, whiteSpace: 'pre-line' }}>{item.value}</p>
                        }
                      </div>
                    </div>
                  ))}
                </div>

                {/* Cert strip */}
                <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 10, padding: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.75rem' }}>
                    <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: '#7BC14A', display: 'inline-block' }} />
                    <span style={{ fontSize: '.72rem', fontWeight: 700, color: '#7BC14A' }}>CL Synergy Group · Est. 2004</span>
                  </div>
                  {['SLAFFA Member Organisation', 'Licensed Customs Brokers', '150+ Country Network'].map(t => (
                    <div key={t} style={{ display: 'flex', alignItems: 'center', gap: '.5rem', marginBottom: '.4rem' }}>
                      <CheckCircle size={12} style={{ color: '#0E9B9B', flexShrink: 0 }} />
                      <span style={{ fontSize: '.78rem', color: '#6B7280' }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Right — form */}
            <Reveal delay={0.1}>
              {sent ? (
                <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
                  style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: 16, padding: '4rem 2rem', textAlign: 'center' }}>
                  <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'rgba(14,155,155,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                    <CheckCircle size={28} style={{ color: '#0E9B9B' }} />
                  </div>
                  <h3 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 800, fontSize: '1.5rem', color: '#111827', marginBottom: '.75rem' }}>Quote Request Sent!</h3>
                  <p style={{ color: '#6B7280', fontSize: '.9rem', lineHeight: 1.7 }}>Our team will respond within 2 business hours with a tailored freight solution for your needs.</p>
                </motion.div>
              ) : (
                <form onSubmit={submit} style={{ background: '#fff', border: '1px solid #E5E7EB', borderRadius: 16, padding: '2.5rem', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <h3 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 800, fontSize: '1.25rem', color: '#111827', marginBottom: '.25rem' }}>Request a Freight Quote</h3>
                    <p style={{ fontSize: '.8rem', color: '#9CA3AF' }}>We respond within 2 hours · No obligation</p>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 700, color: '#374151', marginBottom: '.5rem' }}>Full Name *</label>
                      <input name="name" value={form.name} onChange={handle} required placeholder="John Perera" className="field" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 700, color: '#374151', marginBottom: '.5rem' }}>Company</label>
                      <input name="company" value={form.company} onChange={handle} placeholder="Company (Pvt) Ltd" className="field" />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 700, color: '#374151', marginBottom: '.5rem' }}>Email *</label>
                      <input name="email" type="email" value={form.email} onChange={handle} required placeholder="you@company.com" className="field" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 700, color: '#374151', marginBottom: '.5rem' }}>Phone</label>
                      <input name="phone" value={form.phone} onChange={handle} placeholder="+94 xx xxx xxxx" className="field" />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 700, color: '#374151', marginBottom: '.5rem' }}>Service Required</label>
                    <select name="service" value={form.service} onChange={handle} className="field">
                      <option value="">Select a service...</option>
                      <option>Sea Freight — FCL</option>
                      <option>Sea Freight — LCL</option>
                      <option>Air Freight — Express</option>
                      <option>Air Freight — Consolidated</option>
                      <option>Customs Brokerage</option>
                      <option>Warehousing</option>
                      <option>3PL / 4PL Solutions</option>
                      <option>Project Cargo</option>
                      <option>Other / Multiple Services</option>
                    </select>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div>
                      <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 700, color: '#374151', marginBottom: '.5rem' }}>Origin</label>
                      <input name="origin" value={form.origin} onChange={handle} placeholder="e.g. Colombo, Sri Lanka" className="field" />
                    </div>
                    <div>
                      <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 700, color: '#374151', marginBottom: '.5rem' }}>Destination</label>
                      <input name="destination" value={form.destination} onChange={handle} placeholder="e.g. Dubai, UAE" className="field" />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '.75rem', fontWeight: 700, color: '#374151', marginBottom: '.5rem' }}>Additional Details</label>
                    <textarea name="message" value={form.message} onChange={handle} rows={4} placeholder="Cargo type, weight, dimensions, special requirements..." className="field" style={{ resize: 'none' }} />
                  </div>

                  <button type="submit" className="btn btn-orange" style={{ justifyContent: 'center', width: '100%' }}>
                    <Send size={15} /> Send Quote Request
                  </button>
                </form>
              )}
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Quick contact strip ───────────────────────────── */}
      <section style={{ padding: '3rem 0', background: '#F9FAFB' }}>
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '1rem' }}>
            {[
              { icon: Phone, label: 'Call Us Now',  val: '+94 11 530 0250',  href: 'tel:+94115300250',        accent: '#E8541A' },
              { icon: Mail,  label: 'Email Us',      val: 'info@log-365.com', href: 'mailto:info@log-365.com', accent: '#0E9B9B' },
              { icon: MapPin,label: 'Visit Us',       val: 'Iceland Business Centre, Colombo 03', href: '#',  accent: '#7BC14A' },
            ].map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                <a href={c.href} className="card-l365" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', textDecoration: 'none' }}>
                  <div style={{ width: 44, height: 44, borderRadius: 10, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `rgba(${c.accent === '#E8541A' ? '232,84,26' : c.accent === '#0E9B9B' ? '14,155,155' : '123,193,74'},.1)` }}>
                    <c.icon size={18} style={{ color: c.accent }} />
                  </div>
                  <div>
                    <p style={{ fontSize: '.68rem', fontWeight: 700, letterSpacing: '.1em', textTransform: 'uppercase', color: c.accent, marginBottom: '.25rem' }}>{c.label}</p>
                    <p style={{ fontSize: '.875rem', fontWeight: 600, color: '#111827' }}>{c.val}</p>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
