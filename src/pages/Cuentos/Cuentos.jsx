import SectionTitle from '../../components/SectionTitle'

export default function Cuentos() {
  const cuentos = [
    {
      id: 1,
      titulo: "El conejo y el león",
      texto: "Un pequeño conejo se sentía inútil frente a los grandes animales de la selva porque no tenía la fuerza del león ni la velocidad del guepardo. Un día, una pesada red cayó sobre el león, dejándolo atrapado. Aunque el león intentó romperla con sus enormes garras, no pudo. El conejo se acercó y, usando la rapidez de sus incisivos dientes, royó las cuerdas una a una hasta liberar al rey de la selva.",
      moraleja: "Todos tenemos capacidades únicas; no importa nuestro tamaño, nuestras habilidades siempre pueden ser de gran valor.",
      audioSrc: "/audio/Conejo.mp3"
    },
    {
      id: 2,
      titulo: "Los dos cabritos en la pasarela",
      texto: "Dos cabritos se encontraron en medio de un tronco estrecho que servía de puente sobre un río profundo. Ninguno quería dar un paso atrás para dejar pasar al otro y comenzaron a empujarse con sus cuernos. Al recurrir a la violencia, ambos perdieron el equilibrio y cayeron al agua helada. Más tarde, entendieron que hablando y poniéndose de acuerdo —uno agachándose para que el otro pasara por encima— habrían cruzado a salvo.",
      moraleja: "La violencia no resuelve los problemas; la comunicación y el diálogo nos evitan caer en males mayores.",
      audioSrc: "/audio/Cabritos.mp3"
    },
    {
      id: 3,
      titulo: "La reunión de los animales del bosque",
      texto: "Un búho sabio convocó a los animales para construir un refugio antes del invierno. El topo ofreció excavar, los pájaros trajeron ramitas y los castores juntaron madera. Sin embargo, un erizo fue apartado porque a los demás les daban miedo sus espinas. Cuando llegó una gran helada, todos los animales tenían frío dentro del refugio; el erizo, amablemente, se colocó cerca de la entrada para tapar las corrientes de aire, protegiendo a todos sin hacerles daño.",
      moraleja: "Rechazar a los demás por ser diferentes nos priva de su ayuda y amistad; la solidaridad nos fortalece a todos.",
      audioSrc: "/audio/Reunion.mp3"
    },
    {
      id: 4,
      titulo: "La ardilla y el bosque compartido",
      texto: "Una joven ardilla solía tirar las cáscaras de sus nueces y la basura al arroyo del bosque, pensando que el agua se lo llevaría todo. Con el tiempo, el arroyo se contaminó, las plantas se secaron y los demás animales ya no tenían agua limpia para beber. Al ver el daño causado, la ardilla organizó a sus amigos para limpiar la orilla del río y prometió cuidar siempre su entorno.",
      moraleja: "Las acciones individuales impactan en nuestro entorno; cuidar el planeta es responsabilidad de cada uno de nosotros.",
      audioSrc: "/audio/Ardilla.mp3"
    }
  ]

  return (
    <main className="page-main bg-[#FDFBF7] min-h-screen pb-16">
      
      {/* ================= SECCIÓN HERO ================= */}
      <section className="page-hero story-hero py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#C8154B] bg-[#C8154B]/10 px-3 py-1 rounded-full">
            Historias Educativas
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#201D35] font-serif mt-4 leading-tight">
            Historias para <em>imaginar y aprender.</em>
          </h1>
          <p className="text-gray-600 mt-4 text-base sm:text-lg leading-relaxed">
            Pequeñas historias inspiradas en los valores y situaciones que aparecen en los temas de formación cívica y ética.
          </p>
        </div>
        <div className="flex justify-center">
          <img src="/images/story.svg" alt="Ilustración de un cuento infantil" className="w-72 sm:w-80 drop-shadow-md" />
        </div>
      </section>

      {/* ================= LISTADO DE CUENTOS ================= */}
      <section className="max-w-6xl mx-auto px-4 mt-8">
        <SectionTitle 
          eyebrow="CUENTOS" 
          title="Un rincón para leer y escuchar juntos" 
          description="Escoge una historia, lee en familia o reproduce el audio integrado." 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          {cuentos.map((cuento) => (
            <div 
              key={cuento.id} 
              className="bg-white rounded-3xl p-7 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold text-[#201D35] font-serif mb-3">
                  {cuento.titulo}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {cuento.texto}
                </p>
              </div>

              <div className="space-y-4">
                {/* Reproductor de Audio Estilizado */}
                <div className="bg-[#FAF8F5] p-3.5 rounded-2xl border border-gray-200/80">
                  <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-gray-700">
                    <svg className="w-4 h-4 text-[#C8154B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                    </svg>
                    Escuchar narración
                  </div>
                  <audio controls className="w-full h-9 accent-[#C8154B]">
                    <source src={cuento.audioSrc} type="audio/mp3" />
                    Tu navegador no soporta la reproducción de audio.
                  </audio>
                </div>

                {/* Moraleja */}
                <div className="bg-[#FDFBF7] p-4 rounded-2xl border border-[#E9DFD7]/60">
                  <span className="block text-[11px] font-bold text-[#C8154B] uppercase tracking-wider mb-1">
                    Moraleja
                  </span>
                  <p className="text-xs sm:text-sm text-gray-700 italic leading-relaxed">
                    "{cuento.moraleja}"
                  </p>
                </div>
              </div>

            </div>
          ))}
        </div>
      </section>

    </main>
  )
}