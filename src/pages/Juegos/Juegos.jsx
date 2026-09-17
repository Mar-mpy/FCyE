import SectionTitle from '../../components/SectionTitle'

export default function Juegos() {
  return (
    <main className="page-main">
      <section className="page-hero game-hero"><div><span className="eyebrow">PRÓXIMAMENTE</span><h1>Aprender jugando es <em>recordar haciendo.</em></h1><p>Este espacio reunirá actividades breves para poner en práctica lo aprendido en los temas del libro.</p></div><div className="page-hero-image"><img src="/images/games.svg" alt="Niñas y niños jugando y aprendiendo" /></div></section>
      <section className="coming-section"><SectionTitle eyebrow="JUEGOS" title="Pequeños retos, grandes aprendizajes" description="Más adelante podrás elegir actividades por tema y comprobar cuánto has aprendido." /><div className="game-placeholder-grid"><div className="game-card"><div className="game-thumb"><img src="/images/family.svg" alt="" /></div><h3>¿Justo o injusto?</h3><p>Identifica situaciones y decide cómo actuarías.</p><button disabled>Próximamente</button></div><div className="game-card"><div className="game-thumb"><img src="/images/story.svg" alt="" /></div><h3>Resolvamos el conflicto</h3><p>Elige respuestas que ayuden a convivir en paz.</p><button disabled>Próximamente</button></div><div className="game-card"><div className="game-thumb"><img src="/images/hero.svg" alt="" /></div><h3>Cuidemos nuestro planeta</h3><p>Descubre acciones cotidianas para cuidar el ambiente.</p><button disabled>Próximamente</button></div></div></section>
    </main>
  )
}
