import { useContext } from "react"
import { ModoContext } from "../context/ModoContext"

export const Encabezado = () => {
  // 📻 Sintoniza la pizarra del modo y saca el dato y el interruptor
  const { modoOscuro, setModoOscuro } = useContext(ModoContext)

  return (
    <header
      className={`flex items-center justify-between border-b px-6 py-4 ${
        modoOscuro ? "border-slate-700 bg-slate-800" : "border-slate-200 bg-white"
      }`}
    >
      <h1 className="text-2xl font-bold">🎵 Mi música</h1>

      {/* 💡 El interruptor: cada clic pone lo contrario */}
      <button
        onClick={() => setModoOscuro(!modoOscuro)}
        className={`rounded-lg px-4 py-2 text-sm font-medium ${
          modoOscuro ? "bg-slate-700 hover:bg-slate-600" : "bg-slate-100 hover:bg-slate-200"
        }`}
      >
        {modoOscuro ? "☀️ Cambiar a modo claro" : "🌙 Cambiar a modo oscuro"}
      </button>
    </header>
  )
}
