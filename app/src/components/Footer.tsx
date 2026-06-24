import { Link } from 'react-router-dom'

const services = [
  'Sea Freight (FCL/LCL)', 'Air Freight', 'Customs House Brokerage',
  'Warehousing & Bonded WH', '3PL & 4PL Solutions', 'Project Cargo',
  'Supply Chain Management', 'Last Mile Delivery',
]

const social = [
  { label: 'LinkedIn', href: '#', icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
  )},
  { label: 'Facebook', href: '#', icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
  )},
  { label: 'Twitter', href: '#', icon: (
    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  )},
]

export default function Footer() {
  return (
    <footer className="bg-[#0F1923] text-gray-400">
      {/* Top section */}
      <div className="wrap pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Brand */}
        <div className="lg:col-span-1">
          <img src="/logo.png" alt="Logistics 365" className="h-14 w-auto mb-5 brightness-0 invert" />
          <p className="text-sm leading-relaxed mb-5 text-gray-400">
            Seamless Synergy in global freight forwarding. A subsidiary of CL Synergy Limited — serving the industry since 2004.
          </p>
          <div className="flex gap-3">
            {social.map(s => (
              <a key={s.label} href={s.href} aria-label={s.label}
                className="w-9 h-9 rounded-full bg-white/8 flex items-center justify-center text-gray-400 hover:bg-[#E8541A] hover:text-white transition-all">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold mb-5 text-xs tracking-widest uppercase">Quick Links</h4>
          <ul className="space-y-2.5 text-sm">
            {([['/', 'Home'], ['/about', 'About Us'], ['/services', 'Services'], ['/network', 'Network'], ['/contact', 'Contact Us']] as [string, string][]).map(([h, l]) => (
              <li key={h}>
                <Link to={h} className="hover:text-white hover:pl-1 transition-all flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#E8541A] opacity-60" />{l}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-white font-bold mb-5 text-xs tracking-widest uppercase">Our Services</h4>
          <ul className="space-y-2.5 text-sm">
            {services.map(s => (
              <li key={s}>
                <Link to="/services" className="hover:text-white hover:pl-1 transition-all flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-[#0E9B9B] opacity-60" />{s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold mb-5 text-xs tracking-widest uppercase">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3 items-start">
              <div className="w-8 h-8 rounded-lg bg-[#E8541A]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-4 h-4 text-[#E8541A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
              </div>
              <span className="leading-relaxed text-gray-400">06th Floor, No. 30, Iceland Business Centre,<br />R.A. De Mel Mawatha, Colombo 03, Sri Lanka</span>
            </li>
            <li className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-lg bg-[#0E9B9B]/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#0E9B9B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
              </div>
              <a href="tel:+94115300250" className="hover:text-white transition-colors">+94 11 530 0250</a>
            </li>
            <li className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-lg bg-[#E8541A]/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#E8541A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>
              <a href="mailto:info@log-365.com" className="hover:text-white transition-colors">info@log-365.com</a>
            </li>
            <li className="flex gap-3 items-center">
              <div className="w-8 h-8 rounded-lg bg-[#0E9B9B]/15 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-[#0E9B9B]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
              </div>
              <span>24 / 7 / 365 Operations</span>
            </li>
          </ul>
        </div>
      </div>

      {/* CL Synergy badge */}
      <div className="border-t border-white/5">
        <div className="wrap py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#0E9B9B] animate-pulse" />
              A Subsidiary of <span className="text-white font-semibold ml-1">CL Synergy Limited</span>
            </span>
            <span className="hidden sm:inline">Serving the industry since 2004</span>
          </div>
          <p className="text-xs text-gray-600 text-center">
            © {new Date().getFullYear()} Logistics365 (Pvt) Ltd. All Rights Reserved. | www.log-365.com
          </p>
        </div>
      </div>
    </footer>
  )
}
