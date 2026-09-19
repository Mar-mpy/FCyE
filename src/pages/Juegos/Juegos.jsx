import { useState, useEffect } from 'react'
import SectionTitle from '../../components/SectionTitle'

export default function Juegos() {
  const [juegoActivo, setJuegoActivo] = useState(null)

  return (
    <main className="page-main bg-[#FDFBF7] min-h-screen pb-16">
      
      {/* ================= SECCIÓN HERO ================= */}
      <section className="page-hero game-hero py-12 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#3B5183] bg-[#3B5183]/10 px-3 py-1 rounded-full">
            Zona de Juegos Interactivos
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#201D35] font-serif mt-4 leading-tight">
            Aprender jugando es <em>recordar haciendo.</em>
          </h1>
          <p className="text-gray-600 mt-4 text-base sm:text-lg leading-relaxed">
            Pon a prueba lo aprendido en los temas del libro con estos divertidos retos interactivos.
          </p>
        </div>
        <div className="flex justify-center">
          <img src="/images/games.svg" alt="Niñas y niños jugando y aprendiendo" className="w-72 sm:w-80 drop-shadow-md" />
        </div>
      </section>

      {/* ================= CONTENEDOR PRINCIPAL ================= */}
      <section className="max-w-6xl mx-auto px-4 mt-8">
        <SectionTitle 
          eyebrow="JUEGOS" 
          title="Elige un reto y demuestra lo que sabes" 
          description="Selecciona una actividad para comenzar a jugar y aprender." 
        />

        {juegoActivo === null ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            
            {/* Juego 1: ¿Justo o injusto? */}
            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-full h-36 bg-[#F5E283]/30 rounded-2xl flex items-center justify-center mb-4 text-4xl">
                  ⚖️
                </div>
                <h3 className="text-xl font-bold text-[#201D35] font-serif mb-2">¿Justo o injusto?</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Identifica situaciones cotidianas y decide si representan una acción justa o injusta.
                </p>
              </div>
              <button 
                onClick={() => setJuegoActivo(1)}
                className="w-full bg-[#C8154B] hover:bg-[#a9103f] text-white font-semibold py-3 px-4 rounded-2xl transition shadow-sm"
              >
                Jugar ahora
              </button>
            </div>

            {/* Juego 2: Memorama */}
            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-full h-36 bg-[#BAD797]/30 rounded-2xl flex items-center justify-center mb-4 text-4xl">
                  🧠
                </div>
                <h3 className="text-xl font-bold text-[#201D35] font-serif mb-2">Memorama Cívico</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Encuentra las parejas de conceptos y valores fundamentales para la convivencia.
                </p>
              </div>
              <button 
                onClick={() => setJuegoActivo(2)}
                className="w-full bg-[#3B5183] hover:bg-[#2e3f68] text-white font-semibold py-3 px-4 rounded-2xl transition shadow-sm"
              >
                Jugar ahora
              </button>
            </div>

            {/* Juego 3: Sopa de Letras */}
            <div className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all border border-gray-100 flex flex-col justify-between">
              <div>
                <div className="w-full h-36 bg-[#C8154B]/10 rounded-2xl flex items-center justify-center mb-4 text-4xl">
                  🔍
                </div>
                <h3 className="text-xl font-bold text-[#201D35] font-serif mb-2">Sopa de Letras</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  Busca palabras clave relacionadas con la ética, el respeto y la colaboración ciudadana.
                </p>
              </div>
              <button 
                onClick={() => setJuegoActivo(3)}
                className="w-full bg-[#65280f] hover:bg-[#4e1e0a] text-white font-semibold py-3 px-4 rounded-2xl transition shadow-sm"
              >
                Jugar ahora
              </button>
            </div>

          </div>
        ) : (
          <div className="mt-8">
            <button 
              onClick={() => setJuegoActivo(null)}
              className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-xl bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-semibold transition"
            >
              ← Volver a la selección de juegos
            </button>

            {juegoActivo === 1 && <JuegoJustoInjusto />}
            {juegoActivo === 2 && <JuegoMemorama />}
            {juegoActivo === 3 && <JuegoSopaLetras />}
          </div>
        )}

      </section>

    </main>
  )
}


/* ================= 1. JUEGO: ¿JUSTO O INJUSTO? ================= */
function JuegoJustoInjusto() {
  const preguntas = [
    { texto: "Repartir los materiales del equipo en partes iguales entre todos.", esJusto: true },
    { texto: "No dejar jugar a alguien en el recreo por su forma de hablar o vestir.", esJusto: false },
    { texto: "Turnarse para elegir el juego en el patio escolar.", esJusto: true },
    { texto: "Acaparar todo el balón y no pasárselo a nadie en el partido.", esJusto: false }
  ]

  const [indice, setIndice] = useState(0)
  const [puntaje, setPuntaje] = useState(0)
  const [terminado, setTerminado] = useState(false)
  const [feedback, setFeedback] = useState(null)

  const responder = (decision) => {
    const correcto = decision === preguntas[indice].esJusto
    if (correcto) setPuntaje(puntaje + 1)
    
    setFeedback(correcto ? "¡Correcto! Muy bien pensado." : "Incorrecto, piénsalo otra vez la próxima.")
    
    setTimeout(() => {
      setFeedback(null)
      if (indice + 1 < preguntas.length) {
        setIndice(indice + 1)
      } else {
        setTerminado(true)
      }
    }, 1500)
  }

  const reiniciar = () => { setIndice(0); setPuntaje(0); setTerminado(false); setFeedback(null); }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto text-center">
      <h2 className="text-2xl font-bold font-serif text-[#201D35] mb-2">¿Justo o Injusto?</h2>
      {!terminado ? (
        <div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Pregunta {indice + 1} de {preguntas.length}</span>
          <div className="bg-[#FAF8F5] p-6 rounded-2xl border border-gray-200 my-6">
            <p className="text-lg text-gray-800 font-medium">"{preguntas[indice].texto}"</p>
          </div>
          {feedback ? (
            <p className={`text-base font-semibold ${feedback.includes('Correcto') ? 'text-green-600' : 'text-red-500'} animate-bounce`}>{feedback}</p>
          ) : (
            <div className="flex justify-center gap-4">
              <button onClick={() => responder(true)} className="bg-[#BAD797] hover:bg-[#a9c785] text-gray-900 font-bold px-6 py-3 rounded-2xl shadow transition">⚖️ Es Justo</button>
              <button onClick={() => responder(false)} className="bg-[#C8154B] hover:bg-[#b0103f] text-white font-bold px-6 py-3 rounded-2xl shadow transition">❌ Es Injusto</button>
            </div>
          )}
        </div>
      ) : (
        <div className="py-6">
          <h3 className="text-3xl font-serif font-bold text-[#201D35] mb-2">¡Juego Completado! 🎉</h3>
          <p className="text-gray-600 mb-6">Tu puntaje final es: <span className="font-bold text-[#C8154B]">{puntaje} de {preguntas.length}</span></p>
          <button onClick={reiniciar} className="bg-[#3B5183] text-white font-semibold px-6 py-3 rounded-2xl shadow hover:bg-[#2e3f68] transition">Jugar de nuevo</button>
        </div>
      )}
    </div>
  )
}


/* ================= 2. JUEGO: MEMORAMA CÍVICO ================= */
function JuegoMemorama() {
  const itemsBase = ["Respeto", "Diálogo", "Justicia", "Empatía"]
  
  // Crea un mazo de 8 cartas (4 parejas)
  const generarCartas = () => {
    const mazo = [...itemsBase, ...itemsBase]
      .sort(() => Math.random() - 0.5)
      .map((nombre, index) => ({ id: index, nombre, volteada: false, encontrada: false }))
    return mazo
  }

  const [cartas, setCartas] = useState(generarCartas())
  const [primerSeleccion, setPrimerSeleccion] = useState(null)
  const [bloqueado, setBloqueado] = useState(false)
  const [paresEncontrados, setParesEncontrados] = useState(0)

  const manejarClickCarta = (carta) => {
    if (bloqueado || carta.volteada || carta.encontrada) return

    const nuevasCartas = cartas.map(c => c.id === carta.id ? { ...c, volteada: true } : c)
    setCartas(nuevasCartas)

    if (!primerSeleccion) {
      setPrimerSeleccion(carta)
    } else {
      setBloqueado(true)
      if (primerSeleccion.nombre === carta.nombre) {
        setCartas(prev => prev.map(c => c.nombre === carta.nombre ? { ...c, encontrada: true } : c))
        setParesEncontrados(prev => prev + 1)
        resetearTurno()
      } else {
        setTimeout(() => {
          setCartas(prev => prev.map(c => c.id === carta.id || c.id === primerSeleccion.id ? { ...c, volteada: false } : c))
          resetearTurno()
        }, 1000)
      }
    }
  }

  const resetearTurno = () => {
    setPrimerSeleccion(null)
    setBloqueado(false)
  }

  const reiniciarJuego = () => {
    setCartas(generarCartas())
    setParesEncontrados(0)
    setPrimerSeleccion(null)
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-xl mx-auto text-center">
      <h2 className="text-2xl font-bold font-serif text-[#201D35] mb-1">Memorama Cívico</h2>
      <p className="text-sm text-gray-500 mb-6">Encuentra las parejas de valores iguales.</p>

      {paresEncontrados === itemsBase.length ? (
        <div className="py-8">
          <h3 className="text-3xl font-serif font-bold text-[#201D35] mb-2">¡Ganaste! 🏆</h3>
          <p className="text-gray-600 mb-6">Completaste todas las parejas con éxito.</p>
          <button onClick={reiniciarJuego} className="bg-[#3B5183] text-white font-semibold px-6 py-3 rounded-2xl shadow hover:bg-[#2e3f68] transition">Jugar otra vez</button>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {cartas.map(carta => (
            <button
              key={carta.id}
              onClick={() => manejarClickCarta(carta)}
              className={`h-24 rounded-2xl font-bold text-sm sm:text-base transition-all duration-300 flex items-center justify-center shadow-sm border ${
                carta.volteada || carta.encontrada
                  ? 'bg-[#FAF8F5] text-[#3B5183] border-[#3B5183]/40'
                  : 'bg-[#3B5183] text-white hover:bg-[#2e3f68]'
              }`}
            >
              {carta.volteada || carta.encontrada ? carta.nombre : '❓'}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}


/* ================= 3. JUEGO: SOPA DE LETRAS INTERACTIVA ================= */
function JuegoSopaLetras() {
  // Palabras a buscar
  const palabras = ["PAZ", "LEY", "VOTO", "ETICA"]
  const [encontradas, setEncontradas] = useState([])
  const [seleccionActual, setSeleccionActual] = useState("")
  const [mensaje, setMensaje] = useState(null)

  // Una cuadrícula sencilla fija 4x4 con las palabras ocultas
  const grilla = [
    ["P", "A", "Z", "X"],
    ["L", "E", "Y", "O"],
    ["V", "O", "T", "O"],
    ["E", "T", "I", "C"]
  ]

  const seleccionarLetra = (letra, fila, col) => {
    const nuevaSeleccion = seleccionActual + letra
    setSeleccionActual(nuevaSeleccion)

    if (palabras.includes(nuevaSeleccion)) {
      if (!encontradas.includes(nuevaSeleccion)) {
        setEncontradas([...encontradas, nuevaSeleccion])
        setMensaje(`¡Encontraste la palabra: ${nuevaSeleccion}! 🎉`)
      } else {
        setMensaje("¡Ya habías encontrado esa palabra!")
      }
      setSeleccionActual("")
    } else if (nuevaSeleccion.length >= 4) {
      setMensaje("No forma una palabra válida, intenta de nuevo.")
      setSeleccionActual("")
    } else {
      setMensaje(`Formando: ${nuevaSeleccion}`)
    }
  }

  const reiniciar = () => {
    setEncontradas([])
    setSeleccionActual("")
    setMensaje(null)
  }

  return (
    <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 max-w-md mx-auto text-center">
      <h2 className="text-2xl font-bold font-serif text-[#201D35] mb-1">Sopa de Letras</h2>
      <p className="text-sm text-gray-500 mb-4">Haz clic en las letras consecutivas para formar las 4 palabras: <span className="font-bold text-[#C8154B]">PAZ, LEY, VOTO, ETICA</span></p>

      <div className="flex justify-center gap-2 mb-4 text-xs font-semibold">
        {palabras.map(p => (
          <span key={p} className={`px-2.5 py-1 rounded-lg border ${encontradas.includes(p) ? 'bg-green-100 text-green-700 border-green-300 line-through' : 'bg-gray-100 text-gray-500 border-gray-200'}`}>
            {p}
          </span>
        ))}
      </div>

      {encontradas.length === palabras.length ? (
        <div className="py-6">
          <h3 className="text-2xl font-serif font-bold text-[#201D35] mb-2">¡Completaste la Sopa de Letras! 🌟</h3>
          <button onClick={reiniciar} className="bg-[#65280f] text-white font-semibold px-6 py-3 rounded-2xl shadow hover:bg-[#4e1e0a] transition mt-2">Jugar de nuevo</button>
        </div>
      ) : (
        <div>
          <div className="grid grid-cols-4 gap-3 max-w-[260px] mx-auto my-6">
            {grilla.map((fila, fIndex) => 
              fila.map((letra, cIndex) => (
                <button
                  key={`${fIndex}-${cIndex}`}
                  onClick={() => seleccionarLetra(letra, fIndex, cIndex)}
                  className="h-14 bg-[#FAF8F5] border border-gray-300 hover:border-[#65280f] rounded-xl text-xl font-bold text-[#201D35] transition shadow-sm flex items-center justify-center active:scale-95"
                >
                  {letra}
                </button>
              ))
            )}
          </div>
          {mensaje && <p className="text-sm font-semibold text-[#65280f] mt-2">{mensaje}</p>}
        </div>
      )}
    </div>
  )
}