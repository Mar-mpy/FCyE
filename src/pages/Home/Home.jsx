import SectionTitle from '../../components/SectionTitle'
import { bloques } from '../../data/temas'

export default function Home() {
  return (
    <main className="page-main bg-[#FDFBF7] min-h-screen pb-16">
      
      {/* ================= SECCIÓN HERO ================= */}
      <section className="relative pt-12 text-center overflow-hidden">
        
        {/* Textos y botones centrados */}
        <div className="max-w-3xl mx-auto px-4 z-10 relative">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#3B5183] bg-[#3B5183]/10 px-3.5 py-1.5 rounded-full mb-4">
            FORMACIÓN CÍVICA Y ÉTICA · 3.º DE PRIMARIA
          </span>
          
          <h1 className="text-4xl sm:text-6xl font-bold text-[#201D35] font-serif leading-tight">
            Aprender a convivir también es una <em>aventura.</em>
          </h1>
          
          <p className="text-gray-600 mt-5 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Explora los contenidos del libro, conversa en familia y descubre pequeñas formas de construir una convivencia más justa, respetuosa y solidaria.
          </p>
          
          {/* Botones de acción centrados */}
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <a 
              href="/temas" 
              className="bg-[#3B5183] hover:bg-[#2e3f68] text-white font-semibold py-3.5 px-8 rounded-2xl transition shadow-sm text-base"
            >
              Explorar los temas
            </a>
            <a 
              href="/cuentos" 
              className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold py-3.5 px-8 rounded-2xl transition text-base"
            >
              Ver cuentos
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-xs text-gray-500 font-medium">
            <span className="flex items-center gap-1.5">✨ Contenido basado en el libro</span>
            <span className="flex items-center gap-1.5">👨‍👩‍👧 Pensado para aprender en familia</span>
          </div>
        </div>

        {/* Imagen de lado a lado (full width en los laterales) con altura controlada */}
{/* Imagen de lado a lado adaptada para móviles y escritorio */}
        <div className="mt-10 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden">
          <img 
            src="/images/img.png" 
            alt="Ilustración principal de aprendizaje en familia" 
            className="w-full h-56 sm:h-72 md:h-[420px] object-cover object-bottom block" 
          />
        </div>

      </section>

      {/* ================= BLOQUES DE CONTENIDO ================= */}
      <section className="section-block max-w-6xl mx-auto px-4 mt-12">
        <SectionTitle 
          eyebrow="EXPLORA" 
          title="Tres bloques para descubrir" 
          description="El libro organiza sus contenidos en tres grandes bloques. Empieza por el que quieras y avanza a tu ritmo." 
        />
        
        <div className="block-grid grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {bloques.map((bloque) => (
            <a 
              href={`/temas#bloque-${bloque.id}`} 
              className={`block-card bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col justify-between ${bloque.color}`} 
              key={bloque.id}
            >
              <div>
                <span className="text-xs font-bold text-[#C8154B] bg-[#C8154B]/10 px-2.5 py-1 rounded-lg">0{bloque.id}</span>
                <div className="card-image w-full h-36 bg-gray-100 rounded-2xl my-4 overflow-hidden flex items-center justify-center">
                  <img src={bloque.id === 1 ? "/images/girl.jpg" : bloque.id === 2 ? "/images/bloque2.jpg" : "/images/comunidad.png"} alt="" className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-bold text-[#201D35] font-serif mb-2">{bloque.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">{bloque.description}</p>
              </div>
              <span className="card-link text-sm font-bold text-[#C8154B] flex items-center gap-1 hover:underline">
                Ver temas →
              </span>
            </a>
          ))}
        </div>
      </section>

      {/* ================= SECCIÓN PARA PADRES ================= */}
      <section className="parent-section max-w-6xl mx-auto px-4 mt-16 bg-white rounded-3xl p-8 sm:p-12 border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="parent-art flex justify-center">
          <img src="/images/familia.png" alt="Familia aprendiendo y conversando" className="w-64 sm:w-72 object-contain" />
        </div>
        <div className="parent-copy">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3B5183] bg-[#3B5183]/10 px-3 py-1 rounded-full">
            PARA MADRES, PADRES Y ACOMPAÑANTES
          </span>
          <h2 className="text-3xl font-bold text-[#201D35] font-serif mt-4 leading-tight">
            Acompañar también es aprender.
          </h2>
          <p className="text-gray-600 mt-4 text-base leading-relaxed">
            Esta página convierte el contenido del libro en una experiencia sencilla de consultar. Puedes revisar un tema y después abrir una conversación con tu hija o hijo.
          </p>
          <div className="mt-6">
            <a className="inline-block bg-[#3B5183] hover:bg-[#2e3f68] text-white font-semibold py-3 px-6 rounded-2xl transition shadow-sm" href="/temas">
              Comenzar con un tema
            </a>
          </div>
        </div>
      </section>

      {/* ================= MINI FEATURES ================= */}
      <section className="mini-features max-w-6xl mx-auto px-4 mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <span className="text-2xl font-bold text-[#C8154B] font-serif">01</span>
          <h3 className="text-lg font-bold text-[#201D35] mt-2 mb-1">Basado en el libro</h3>
          <p className="text-sm text-gray-600">Los 12 temas se organizan siguiendo sus tres bloques.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <span className="text-2xl font-bold text-[#3B5183] font-serif">02</span>
          <h3 className="text-lg font-bold text-[#201D35] mt-2 mb-1">Para conversar</h3>
          <p className="text-sm text-gray-600">Preguntas y reflexiones pueden acompañar la lectura.</p>
        </div>
        <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
          <span className="text-2xl font-bold text-[#65280f] font-serif">03</span>
          <h3 className="text-lg font-bold text-[#201D35] mt-2 mb-1">Aprender jugando</h3>
          <p className="text-sm text-gray-600">Cuentos y juegos serán espacios para reforzar lo aprendido.</p>
        </div>
      </section>

    </main>
  )
}