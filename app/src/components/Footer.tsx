import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-[#0F1923] text-gray-400">
      <div className="wrap py-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <img src="/logo.png" alt="Logistics 365" className="h-12 w-auto mb-4 brightness-0 invert" />
          <p className="text-sm leading-relaxed">Seamless Synergy in global freight forwarding. Your cargo, our commitment — 365 days a year.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 text-xs tracking-widest uppercase">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            {([['Home','/'],['About Us','/about'],['Services','/services'],['Network','/network'],['Contact','/contact']] as [string,string][]).map(([l,h])=>(
              <li key={h}><Link to={h} className="hover:text-[#E8541A] transition-colors">{l}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 text-xs tracking-widest uppercase">Services</h4>
          <ul className="space-y-2 text-sm">
            {['Sea Freight','Air Freight','Customs Clearance','Warehousing','Project Cargo','Supply Chain'].map(s=>(
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 text-xs tracking-widest uppercase">Contact</h4>
          <ul className="space-y-3 text-sm">
            <li>📍 Colombo, Sri Lanka</li>
            <li>📞 +94 11 XXX XXXX</li>
            <li>✉️ info@logistics365.lk</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/5 py-6 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} Logistics 365 (Pvt) Ltd. All rights reserved. | Designed by Gen Alpha Solutions
      </div>
    </footer>
  )
}
