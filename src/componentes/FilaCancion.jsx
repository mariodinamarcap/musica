import { useContext } from "react"
import { ReproduccionContext } from "../context/ReproduccionContext"

export const FilaCancion = ({ cancion }) => {
    const { setCancionActual, setEstaSonando } = useContext(ReproduccionContext)

    return (
        <button
            onClick={() => {
                setCancionActual(cancion)
                setEstaSonando(true)
            }}
        >
            {cancion.titulo} - {cancion.artista}
        </button>
    )
}
