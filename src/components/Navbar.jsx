import { useState } from 'react'

const links = [
  ['Inicio', '/'],
  ['Temas', '/temas'],
  ['Cuentos', '/cuentos'],
  ['Juegos', '/juegos'],
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="topbar">
      <div className="nav-wrap">
        <a href="/" className="brand" onClick={() => setOpen(false)}>
          <span>
            <strong>Aprendemos Juntos</strong>
            <small>Formación Cívica y Ética · 3.º</small>
          </span>
        </a>

        <button className="menu-button" aria-label="Abrir menú" onClick={() => setOpen(!open)}>Menú</button>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {links.map(([label, href]) => (
            <a key={href} href={href} className={window.location.pathname === href ? 'active' : ''} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
          <a className="nav-cta" href="https://libros.conaliteg.gob.mx/2022/P3FCA.htm" target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>Ver libro</a>
        </nav>
      </div>
    </header>
  )
}
