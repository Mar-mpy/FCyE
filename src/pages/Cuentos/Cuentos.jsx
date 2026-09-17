import SectionTitle from '../../components/SectionTitle'

export default function Cuentos() {
  return (
    <main className="page-main">
      <section className="page-hero story-hero"><div><span className="eyebrow">PRÓXIMAMENTE</span><h1>Historias para <em>imaginar y aprender.</em></h1><p>Los cuentos serán pequeñas historias inspiradas en los valores y situaciones que aparecen en los temas del libro.</p></div><div className="page-hero-image"><img src="/images/story.svg" alt="Ilustración de un cuento infantil" /></div></section>
      <section className="coming-section"><SectionTitle eyebrow="CUENTOS" title="Un rincón para leer juntos" description="Aquí podrás encontrar historias cortas para conversar sobre respeto, igualdad, decisiones, justicia y convivencia." /><div className="placeholder-grid"><div className="placeholder-card"><img src="/images/story.svg" alt="Ilustración colorida de un cuento" /><h3>Una historia está por comenzar</h3><p>Estamos preparando cuentos relacionados con los temas del libro.</p><span className="soon">PRÓXIMAMENTE</span></div><div className="placeholder-card alt"><img src="/images/family.svg" alt="Familia leyendo y conversando" /><h3>Lee, imagina y conversa</h3><p>Cada historia tendrá una pequeña pregunta para compartir en familia.</p><span className="soon">PRÓXIMAMENTE</span></div></div></section>
    </main>
  )
}
