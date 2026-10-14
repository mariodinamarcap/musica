import { useContext } from "react"
import { ReproduccionContext } from "../context/ReproduccionContext"

export const FilaCancion = ({ cancion }) => {
    const { cancionActual, setCancionActual, setEstaSonando } = useContext(ReproduccionContext)

    // ¿Esta fila es la que está sonando?
    const esLaQueSuena = cancion.id === cancionActual?.id

    return (
        <button
            onClick={() => {
                setCancionActual(cancion)
                setEstaSonando(true)
            }}
        >
            {esLaQueSuena ? "🎶 " : ""}
            {cancion.titulo} - {cancion.artista}
        </button>
    )
}
