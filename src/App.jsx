import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home'
import Temas from './pages/Temas/Temas'
import TemaDetalle from './pages/Temas/TemaDetalle'
import Cuentos from './pages/Cuentos/Cuentos'
import Juegos from './pages/Juegos/Juegos'
import './App.css'

function RouterView() {
  const path = window.location.pathname.replace(/\/$/, '') || '/'
  if (path === '/') return <Home />
  if (path === '/temas') return <Temas />
  if (path.startsWith('/temas/')) return <TemaDetalle id={path.split('/')[2]} />
  if (path === '/cuentos') return <Cuentos />
  if (path === '/juegos') return <Juegos />
  return <main className="not-found"><h1>Esta página no existe</h1><a className="button primary" href="/">Volver al inicio</a></main>
}

export default function App() {
  return <div className="site"><Navbar /><RouterView /><Footer /></div>
}
