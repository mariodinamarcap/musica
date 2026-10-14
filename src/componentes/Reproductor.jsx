import { useContext } from "react"
import { ReproduccionContext } from "../context/ReproduccionContext"

export const Reproductor = () => {
    const { cancionActual, estaSonando, setEstaSonando } = useContext(ReproduccionContext)

    return (
        <footer>
            <p>
                {cancionActual
                    ? `${cancionActual.titulo} - ${cancionActual.artista}`
                    : "Elige una canción"}
            </p>
        </footer>
    )
}
