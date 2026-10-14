import { useContext } from "react"
import { ReproduccionContext } from "../context/ReproduccionContext"

export const Reproductor = () => {
    const { cancionActual, estaSonando, setEstaSonando } = useContext(ReproduccionContext)

    return (
        <footer>
            {cancionActual ? (
                <>
                    <p>{cancionActual.titulo} - {cancionActual.artista}</p>
                    <button onClick={() => setEstaSonando(!estaSonando)}>
                        {estaSonando ? "⏸️ Pausar" : "▶️ Reanudar"}
                    </button>
                </>
            ) : (
                <p>Elige una canción</p>
            )}
        </footer>
    )
}
