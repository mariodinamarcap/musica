import { useContext } from "react"
import { ReproduccionContext } from "../context/ReproduccionContext"
import { ModoContext } from "../context/ModoContext"

export const FilaCancion = ({ cancion }) => {
    const { cancionActual, setCancionActual, setEstaSonando } = useContext(ReproduccionContext)
    const { modoOscuro } = useContext(ModoContext)

    // ¿Esta fila es la que está sonando?
    const esLaQueSuena = cancion.id === cancionActual?.id

    return (
        <button
            onClick={() => {
                setCancionActual(cancion)
                setEstaSonando(true)
            }}
            className={`w-full rounded-lg px-4 py-3 text-left ${
                esLaQueSuena
                    ? "bg-violet-500 text-white"
                    : modoOscuro
                    ? "bg-slate-800 hover:bg-slate-700"
                    : "bg-white shadow-sm hover:bg-slate-100"
            }`}
        >
            {esLaQueSuena ? "🎶 " : ""}
            {cancion.titulo} - {cancion.artista}
        </button>
    )
}
