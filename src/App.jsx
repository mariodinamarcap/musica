import { useState } from "react"
import { ModoContext } from "./context/ModoContext"
import { ReproduccionContext } from "./context/ReproduccionContext"
import { Encabezado } from "./componentes/Encabezado"
import { ListaCanciones } from "./componentes/ListaCanciones"
import { Reproductor } from "./componentes/Reproductor"

function App() {

  const [modoOscuro, setModoOscuro] = useState(false)


  const [cancionActual, setCancionActual] = useState(null)
  const [estaSonando, setEstaSonando] = useState(false)

  return (
    <ModoContext.Provider value={{ modoOscuro, setModoOscuro }}>
      <ReproduccionContext.Provider
        value={{ cancionActual, setCancionActual, estaSonando, setEstaSonando }}
      >
        <Encabezado />
        <p>{modoOscuro ? "🌙 Modo oscuro" : "☀️ Modo claro"}</p>
        <ListaCanciones />
        <Reproductor />
        <p>Sonando: {cancionActual ? cancionActual.titulo : "nada"} — {estaSonando ? "▶️" : "⏸️"}</p>
        {/* Aquí va a ir el Reproductor */}
      </ReproduccionContext.Provider>
    </ModoContext.Provider>
  )
}

export default App
