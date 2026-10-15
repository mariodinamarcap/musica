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
        <main
          className={`flex min-h-screen flex-col ${
            modoOscuro ? "bg-slate-900 text-slate-100" : "bg-slate-50 text-slate-900"
          }`}
        >
          <Encabezado />
          <ListaCanciones />
          <Reproductor />
        </main>
      </ReproduccionContext.Provider>
    </ModoContext.Provider>
  )
}

export default App
