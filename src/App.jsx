import { useState } from "react"
import { ModoContext } from "./context/ModoContext"
import { ReproduccionContext } from "./context/ReproduccionContext"
import { Encabezado } from "./componentes/Encabezado"

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
        {/* Aquí van a ir ListaCanciones y Reproductor */}
      </ReproduccionContext.Provider>
    </ModoContext.Provider>
  )
}

export default App
