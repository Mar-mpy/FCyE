import SectionTitle from '../../components/SectionTitle'
import { bloques } from '../../data/temas'

export default function Temas() {
  return (
    <main className="page-main">
      <section className="page-hero soft-hero">
        <div><span className="eyebrow">EL CONTENIDO DEL LIBRO</span><h1>Temas para aprender y <em>reflexionar.</em></h1><p>Explora los 12 temas del libro de Formación Cívica y Ética de tercer grado. Cada tarjeta te lleva a una explicación breve y a ideas para conversar.</p></div>
        <div className="page-hero-image"><img src="/images/hero.svg" alt="Niñas y niños aprendiendo" /></div>
      </section>

      <section className="topics-section">
        <SectionTitle eyebrow="CONTENIDOS" title="Encuentra tu tema" description="Selecciona una secuencia para conocer su propósito y relacionarla con situaciones de la vida cotidiana." />
        {bloques.map((bloque) => (
          <section className="topic-block" id={`bloque-${bloque.id}`} key={bloque.id}>
            <div className="topic-block-heading"><div><span className={`block-pill ${bloque.color}`}>BLOQUE {bloque.id}</span><h2>{bloque.title}</h2><p>{bloque.description}</p></div></div>
            <div className="topic-grid">
              {bloque.temas.map((tema) => (
                <a href={`/temas/${tema.id}`} className="topic-card" key={tema.id}>
                  <div className={`topic-thumb ${bloque.color}`}><span>{String(tema.id).padStart(2, "0")}</span></div><div className="topic-content"><span>Secuencia {((tema.id - 1) % 4) + 1} · pág. {tema.page}</span><h3>{tema.title}</h3><p>{tema.summary}</p><b>Conocer este tema</b></div>
                </a>
              ))}
            </div>
          </section>
        ))}
      </section>
    </main>
  )
}
