import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'

const nav = [
  ['Aplicaciones', '/#aplicaciones'], ['Filosofía', '/manifiesto'], ['Privacidad', '/privacidad'],
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  return <div className="min-h-screen">
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050b14]/80 backdrop-blur-xl">
      <div className="container-nemy flex h-[76px] items-center justify-between">
        <Link to="/" className="flex items-center gap-3 font-extrabold"><img className="h-11 w-11 rounded-[14px]" src="/assets/icons/nemy-studios.png" alt="Nemy Studios"/><span>Nemy Studios</span></Link>
        <nav className="hidden items-center gap-7 text-sm font-semibold text-nemy-muted md:flex">
          {nav.map(([label,to]) => <NavLink key={to} to={to} className="hover:text-white">{label}</NavLink>)}
          <a className="btn" href="mailto:nemystudios@gmail.com">Contacto</a>
        </nav>
        <button aria-label="Abrir menú" className="md:hidden" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
      </div>
      {open && <nav className="container-nemy flex flex-col gap-4 border-t border-white/10 py-5 text-nemy-muted md:hidden">
        {nav.map(([label,to]) => <NavLink key={to} to={to} onClick={()=>setOpen(false)}>{label}</NavLink>)}
        <a href="mailto:nemystudios@gmail.com">Contacto</a>
      </nav>}
    </header>
    <Outlet />
    <footer className="border-t border-white/10 py-10 text-sm text-nemy-muted">
      <div className="container-nemy flex flex-col justify-between gap-5 md:flex-row">
        <p>© 2026 Nemy Studios. Hecho para simplificar tu día a día.</p>
        <div className="flex flex-wrap gap-5"><Link to="/manifiesto">Filosofía</Link><Link to="/privacidad">Privacidad</Link><a href="mailto:nemystudios@gmail.com">Contacto</a></div>
      </div>
    </footer>
  </div>
}
