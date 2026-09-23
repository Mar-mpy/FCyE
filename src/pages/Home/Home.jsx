import SectionTitle from '../../components/SectionTitle'
import { bloques } from '../../data/temas'

export default function Home() {
  return (
    <main className="page-main bg-[#FDFBF7] min-h-screen pb-16 overflow-x-hidden">
      
      {/* ================= SECCIÓN HERO ================= */}
      <section className="relative pt-12 pb-6 text-center">
        
        {/* Textos y botones centrados */}
        <div className="max-w-3xl mx-auto px-4 z-10 relative">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#3B5183] bg-[#3B5183]/10 px-3.5 py-1.5 rounded-full mb-4">
            FORMACIÓN CÍVICA Y ÉTICA · 3.º DE PRIMARIA
          </span>
          
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#201D35] font-serif leading-tight">
            Aprender a convivir también es una <em>aventura.</em>
          </h1>
          
          <p className="text-gray-600 mt-4 sm:mt-5 text-sm sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Explora los contenidos del libro, conversa en familia y descubre pequeñas formas de construir una convivencia más justa, respetuosa y solidaria.
          </p>
          
          {/* Botones de acción centrados */}
          <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
            <a 
              href="/temas" 
              className="bg-[#3B5183] hover:bg-[#2e3f68] text-white font-semibold py-3.5 px-8 rounded-2xl transition shadow-sm text-sm sm:text-base text-center"
            >
              Explorar los temas
            </a>
            <a 
              href="/cuentos" 
              className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-800 font-semibold py-3.5 px-8 rounded-2xl transition text-sm sm:text-base text-center"
            >
              Ver cuentos
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 mt-6 sm:mt-8 text-xs text-gray-500 font-medium">
            <span className="flex items-center gap-1.5">✨ Contenido basado en el libro</span>
            <span className="flex items-center gap-1.5">👨‍👩‍👧 Pensado para aprender en familia</span>
          </div>
        </div>

        {/* Imagen sin fondo y oculta en dispositivos móviles */}
        <div className="mt-8 sm:mt-12 w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-hidden hidden sm:block">
          <img 
            src="/images/img.png" 
            alt="Ilustración principal de aprendizaje en familia" 
            className="w-full sm:h-80 md:h-[450px] object-cover object-center scale-105 sm:scale-100 block transition-transform duration-500" 
          />
        </div>

      </section>

      {/* ================= BLOQUES DE CONTENIDO ================= */}
      <section className="section-block max-w-6xl mx-auto px-4 mt-12 sm:mt-16">
        <SectionTitle 
          eyebrow="EXPLORA" 
          title="Tres bloques para descubrir" 
          description="El libro organiza sus contenidos en tres grandes bloques. Empieza por el que quieras y avanza a tu ritmo." 
        />
        
        <div className="block-grid grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-8 sm:mt-10">
          {bloques.map((bloque, index) => {
            const estilosCard = index === 0 
              ? "bg-[#C2F0C2]/60 border-[#a8e6a8]" 
              : index === 1 
              ? "bg-[#D8C9FE]/60 border-[#c4b1fe]" 
              : "bg-[#B4F0D2]/60 border-[#9cebc4]";

            return (
              <a 
                href={`/temas#bloque-${bloque.id}`} 
                className={`block-card rounded-3xl p-6 sm:p-7 transition-all duration-300 hover:scale-[1.02] hover:shadow-md flex flex-col justify-between border ${estilosCard}`} 
                key={bloque.id}
              >
                <div>
                  {/* Encabezado con badge y flecha */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/80 text-gray-800 shadow-xs">
                      Bloque 0{bloque.id}
                    </span>
                    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-900 shadow-xs">
                      ↗
                    </span>
                  </div>

                  {/* Imagen pequeña en marco circular alineada */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 min-w-[3.5rem] rounded-full bg-white p-1 shadow-xs overflow-hidden flex items-center justify-center">
                      <img 
                        src={bloque.id === 1 ? "/images/girl.jpg" : bloque.id === 2 ? "/images/bloque2.jpg" : "/images/comunidad.png"} 
                        alt="" 
                        className="w-full h-full object-cover rounded-full" 
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold font-serif text-[#201D35] leading-snug">{bloque.title}</h3>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-6">{bloque.description}</p>
                </div>

                <div className="pt-3 border-t border-black/5 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#201D35]">
                    Ver temas
                  </span>
                  <span className="text-xs font-bold text-[#C8154B] bg-white/80 px-2.5 py-1 rounded-lg">
                    Explorar →
                  </span>
                </div>
              </a>
            )
          })}
        </div>
      </section>

      {/* ================= SECCIÓN PARA PADRES ================= */}
      <section className="parent-section max-w-6xl mx-auto px-4 mt-16 bg-white rounded-3xl p-6 sm:p-12 border border-gray-100 shadow-sm grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div className="parent-art flex justify-center order-2 md:order-1">
          <img src="/images/familia.png" alt="Familia aprendiendo y conversando" className="w-56 sm:w-72 object-contain" />
        </div>
        <div className="parent-copy order-1 md:order-2 text-center md:text-left">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#3B5183] bg-[#3B5183]/10 px-3 py-1 rounded-full mb-3">
            PARA MADRES, PADRES Y ACOMPAÑANTES
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#201D35] font-serif leading-tight">
            Acompañar también es aprender.
          </h2>
          <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
            Esta página convierte el contenido del libro en una experiencia sencilla de consultar. Puedes revisar un tema y después abrir una conversación con tu hija o hijo.
          </p>
          <div className="mt-6 flex justify-center md:justify-start">
            <a className="inline-block bg-[#3B5183] hover:bg-[#2e3f68] text-white font-semibold py-3 px-6 rounded-2xl transition shadow-sm text-sm sm:text-base" href="/temas">
              Comenzar con un tema
            </a>
          </div>
        </div>
      </section>

      {/* ================= MINI FEATURES ================= */}
      <section className="mini-features max-w-6xl mx-auto px-4 mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
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