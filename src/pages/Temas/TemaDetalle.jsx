import { todosLosTemas } from '../../data/temas'

export default function TemaDetalle({ id }) {
  const tema = todosLosTemas.find((item) => item.id === Number(id))
  if (!tema) return <main className="not-found"><h1>Tema no encontrado</h1><a className="button primary" href="/temas">Volver a temas</a></main>

  return (
    <main className="page-main">
      <section className={`detail-hero ${tema.bloque.color}`}>
        <div><a className="back-link" href="/temas">Volver a todos los temas</a><span className="eyebrow">BLOQUE {tema.bloque.id} · SECUENCIA</span><h1>{tema.title}</h1><p>Contenido relacionado con la página {tema.page} del libro de Formación Cívica y Ética.</p></div>
        
      </section>
      <section className="detail-layout">
        <article className="detail-card">
          <span className="eyebrow">¿QUÉ APRENDEREMOS?</span><h2>Una idea para llevar contigo</h2><p>{tema.summary}</p>
          <div className="book-reference"><div><strong>Referencia del libro</strong><p>Bloque {tema.bloque.id}, secuencia correspondiente, página {tema.page}.</p></div></div>
        </article>
        <aside className="reflection-card"><span className="eyebrow">PARA CONVERSAR EN FAMILIA</span><h2>¿Qué piensas tú?</h2><p>Piensa en una situación de tu escuela, casa o comunidad relacionada con este tema.</p><ul><li>¿Qué ocurrió?</li><li>¿Cómo se sintieron las personas?</li><li>¿Qué podrían hacer para mejorar la situación?</li></ul></aside>
      </section>
      <section className="detail-next"><span>¿Quieres seguir explorando?</span><a className="button primary" href="/temas">Ver los demás temas</a></section>
    </main>
  )
}
