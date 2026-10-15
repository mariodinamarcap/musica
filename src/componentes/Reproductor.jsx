import { useContext } from "react"
import { ReproduccionContext } from "../context/ReproduccionContext"
import { ModoContext } from "../context/ModoContext"

export const Reproductor = () => {
    const { cancionActual, estaSonando, setEstaSonando } = useContext(ReproduccionContext)
    const { modoOscuro } = useContext(ModoContext)

    return (
        <footer
            className={`sticky bottom-0 flex items-center justify-between border-t px-6 py-4 ${
                modoOscuro ? "border-slate-700 bg-slate-800" : "border-slate-200 bg-white"
            }`}
        >
            {cancionActual ? (
                <>
                    <p className="font-medium">{cancionActual.titulo} - {cancionActual.artista}</p>
                    <button
                        onClick={() => setEstaSonando(!estaSonando)}
                        className="rounded-full bg-violet-500 px-5 py-2 font-medium text-white hover:bg-violet-600"
                    >
                        {estaSonando ? "⏸️ Pausar" : "▶️ Reanudar"}
                    </button>
                </>
            ) : (
                <p className="opacity-70">Elige una canción</p>
            )}
        </footer>
    )
}
