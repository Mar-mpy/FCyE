import SectionTitle from '../../components/SectionTitle'
import { bloques } from '../../data/temas'

export default function Home() {
  return (
    <>
      <main>
        <section className="hero-home">
          <div className="hero-copy">
            <span className="eyebrow">FORMACIÓN CÍVICA Y ÉTICA · 3.º DE PRIMARIA</span>
            <h1>Aprender a convivir también es una <em>aventura.</em></h1>
            <p>Explora los contenidos del libro, conversa en familia y descubre pequeñas formas de construir una convivencia más justa, respetuosa y solidaria.</p>
            <div className="hero-actions">
              <a className="button primary" href="/temas">Explorar los temas</a>
              <a className="button text" href="/cuentos">Ver cuentos</a>
            </div>
            <div className="hero-meta"><span>Contenido basado en el libro</span><span>Pensado para aprender en familia</span></div>
          </div>
          <div className="hero-image-frame"><img src="/images/home.jpg" alt="Niñas y niños aprendiendo juntos" /></div>
        </section>

        <section className="section-block">
          <SectionTitle eyebrow="EXPLORA" title="Tres bloques para descubrir" description="El libro organiza sus contenidos en tres grandes bloques. Empieza por el que quieras y avanza a tu ritmo." />
          <div className="block-grid">
            {bloques.map((bloque) => (
              <a href={`/temas#bloque-${bloque.id}`} className={`block-card ${bloque.color}`} key={bloque.id}>
                <span className="card-number">0{bloque.id}</span><div className="card-image"><img src={bloque.id === 1 ? "/images/girl.jpg" : bloque.id === 2 ? "/images/bloque2.jpg" : "/images/comunidad.png"} alt="" /></div>
                <h3>{bloque.title}</h3><p>{bloque.description}</p><span className="card-link">Ver temas</span>
              </a>
            ))}
          </div>
        </section>

        <section className="parent-section">
          <div className="parent-art"><img src="/images/familia.png" alt="Familia aprendiendo y conversando" /></div>
          <div className="parent-copy">
            <span className="eyebrow">PARA MADRES, PADRES Y ACOMPAÑANTES</span>
            <h2>Acompañar también es aprender.</h2>
            <p>Esta página convierte el contenido del libro en una experiencia sencilla de consultar. Puedes revisar un tema y después abrir una conversación con tu hija o hijo.</p>
            <a className="button secondary" href="/temas">Comenzar con un tema</a>
          </div>
        </section>

        <section className="mini-features">
          <div><span className="feature-number">01</span><h3>Basado en el libro</h3><p>Los 12 temas se organizan siguiendo sus tres bloques.</p></div>
          <div><span className="feature-number">02</span><h3>Para conversar</h3><p>Preguntas y reflexiones pueden acompañar la lectura.</p></div>
          <div><span className="feature-number">03</span><h3>Aprender jugando</h3><p>Cuentos y juegos serán espacios para reforzar lo aprendido.</p></div>
        </section>
      </main>
    </>
  )
}
