import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react'

function Reveal({ children, delay = 0, className = '', style }: { children: React.ReactNode; delay?: number; className?: string; style?: React.CSSProperties }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }} className={className} style={style}>
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
      <section style={{ background: 'linear-gradient(160deg, #0D1B2A 0%, #162336 60%, #0a2a2a 100%)', paddingTop: 120, paddingBottom: 0, position: 'relative', overflow: 'hidden', minHeight: 480 }}>
        {/* Aurora orbs */}
        <div className="aurora-1" style={{ position: 'absolute', top: '-10%', right: '-5%', width: 560, height: 560, borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,84,26,0.28) 0%, transparent 68%)', pointerEvents: 'none' }} />
        <div className="aurora-2" style={{ position: 'absolute', bottom: '-20%', left: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,155,155,0.22) 0%, transparent 68%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px', pointerEvents: 'none' }} />

        <div className="wrap" style={{ position: 'relative', zIndex: 1, paddingBottom: 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'flex-end' }}>
            {/* Left — text */}
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} style={{ paddingBottom: '3rem' }}>
              <span className="badge badge-orange" style={{ marginBottom: '1.25rem', display: 'inline-flex' }}>Let's Talk Freight</span>
              <h1 style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, fontSize: 'clamp(2.2rem,4.5vw,3.5rem)', color: '#fff', lineHeight: 1.08, marginBottom: '1.25rem' }}>
                Get a Quote.<br /><span style={{ color: '#E8541A' }}>Move Your Cargo.</span>
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2rem' }}>
                Our freight experts respond within 2 hours — not with a generic price list, but a tailored solution for your specific cargo and route.
              </p>
              {/* Quick promise chips */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '.625rem' }}>
                {['⚡ 2-Hr Response', '🌐 150+ Countries', '✅ Licensed Brokers', '📦 All Cargo Types'].map(t => (
                  <span key={t} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: '5px 14px', fontSize: '.75rem', color: 'rgba(255,255,255,0.75)', fontWeight: 500 }}>{t}</span>
                ))}
              </div>
            </motion.div>

            {/* Right — 24/7/365 visual panel (sits at bottom edge) */}
            <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: '20px 20px 0 0', padding: '2.5rem 2rem 2rem', textAlign: 'center' }}>
                {/* Ship SVG illustration */}
                <div style={{ marginBottom: '1.5rem', lineHeight: 0 }}>
                  <svg viewBox="0 0 360 140" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', maxWidth: 320, margin: '0 auto', display: 'block' }}>
                    {/* Ocean */}
                    <path d="M0 100 Q45 90 90 100 Q135 110 180 100 Q225 90 270 100 Q315 110 360 100 L360 140 L0 140 Z" fill="rgba(14,155,155,0.25)" />
                    <path d="M0 112 Q45 104 90 112 Q135 120 180 112 Q225 104 270 112 Q315 120 360 112 L360 140 L0 140 Z" fill="rgba(14,155,155,0.15)" />
                    {/* Hull */}
                    <path d="M30 82 L330 82 L348 100 L12 100 Z" fill="#E8541A" opacity="0.9" />
                    {/* Containers row 1 */}
                    <rect x="55"  y="48" width="44" height="34" rx="2" fill="#0E9B9B" opacity="0.9"/>
                    <rect x="105" y="48" width="44" height="34" rx="2" fill="#E8541A" opacity="0.85"/>
                    <rect x="155" y="48" width="44" height="34" rx="2" fill="#7BC14A" opacity="0.9"/>
                    <rect x="205" y="48" width="44" height="34" rx="2" fill="#0E9B9B" opacity="0.8"/>
                    {/* Containers row 2 */}
                    <rect x="70"  y="18" width="44" height="30" rx="2" fill="#7BC14A" opacity="0.75"/>
                    <rect x="120" y="18" width="44" height="30" rx="2" fill="#E8541A" opacity="0.7"/>
                    <rect x="170" y="18" width="44" height="30" rx="2" fill="#0E9B9B" opacity="0.75"/>
                    {/* Bridge */}
                    <rect x="256" y="22" width="52" height="60" rx="3" fill="rgba(26,47,68,0.95)" stroke="rgba(255,255,255,0.1)" strokeWidth="1"/>
                    <rect x="264" y="30" width="14" height="14" rx="2" fill="#E8541A" opacity="0.8"/>
                    <rect x="284" y="30" width="14" height="14" rx="2" fill="#7BC14A" opacity="0.8"/>
                    <rect x="264" y="50" width="34" height="8" rx="1" fill="rgba(255,255,255,0.12)"/>
                    {/* Mast */}
                    <line x1="290" y1="6" x2="290" y2="22" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
                    <circle cx="290" cy="6" r="3" fill="#E8541A"/>
                    {/* Container lines */}
                    <line x1="77" y1="48" x2="77" y2="82" stroke="rgba(0,0,0,0.15)" strokeWidth="1"/>
                    <line x1="127" y1="48" x2="127" y2="82" stroke="rgba(0,0,0,0.15)" strokeWidth="1"/>
                    <line x1="177" y1="48" x2="177" y2="82" stroke="rgba(0,0,0,0.15)" strokeWidth="1"/>
                    <line x1="55" y1="65" x2="249" y2="65" stroke="rgba(0,0,0,0.12)" strokeWidth="1"/>
                    <line x1="92" y1="33" x2="214" y2="33" stroke="rgba(0,0,0,0.12)" strokeWidth="1"/>
                  </svg>
                </div>

                {/* 24/7/365 Big Display */}
                <div style={{ marginBottom: '1.25rem' }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '.25rem', fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 900, lineHeight: 1 }}>
                    <span style={{ fontSize: '3rem', color: '#E8541A' }}>24</span>
                    <span style={{ fontSize: '1.8rem', color: 'rgba(255,255,255,0.25)' }}>/</span>
                    <span style={{ fontSize: '3rem', color: '#0E9B9B' }}>7</span>
                    <span style={{ fontSize: '1.8rem', color: 'rgba(255,255,255,0.25)' }}>/</span>
                    <span style={{ fontSize: '3rem', color: '#7BC14A' }}>365</span>
                  </div>
                  <p style={{ fontFamily: "'Outfit',system-ui,sans-serif", fontWeight: 700, fontSize: '.85rem', color: 'rgba(255,255,255,0.6)', letterSpacing: '.1em', textTransform: 'uppercase', marginTop: '.5rem' }}>
                    We Never Close
                  </p>
                </div>

                {/* Live indicator */}
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem', background: 'rgba(123,193,74,0.1)', border: '1px solid rgba(123,193,74,0.3)', borderRadius: 20, padding: '5px 14px' }}>
                  <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: '#7BC14A', display: 'inline-block', flexShrink: 0 }} />
                  <span style={{ fontSize: '.72rem', fontWeight: 700, color: '#7BC14A', letterSpacing: '.06em' }}>Freight Team Online Now</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 24/7/365 Guarantee Strip ──────────────────────── */}
      <section style={{ background: 'linear-gradient(90deg, #0D1B2A, #1a2f44)', padding: '1.25rem 0' }}>
        <div className="wrap">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }}>
            {[
              { dot: '#E8541A', text: 'Quote within 2 hours — guaranteed' },
              { dot: '#0E9B9B', text: 'Real-time cargo tracking' },
              { dot: '#7BC14A', text: '24 / 7 / 365 operations — no exceptions' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '.625rem' }}>
                <span className="pulse-dot" style={{ width: 7, height: 7, borderRadius: '50%', background: item.dot, display: 'inline-block', flexShrink: 0 }} />
                <span style={{ fontSize: '.8rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
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
