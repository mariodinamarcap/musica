import { useContext } from "react"
import { ModoContext } from "../context/ModoContext"

export const Encabezado = () => {

    const { modoOscuro, setModoOscuro } = useContext(ModoContext)

    return (
        <header>
            <h1>🎵 Mi música</h1>

            {/* 💡 El interruptor: cada clic pone lo contrario */}
            <button onClick={() => setModoOscuro(!modoOscuro)}>
                {modoOscuro ? "☀️ Cambiar a modo claro" : "🌙 Cambiar a modo oscuro"}
            </button>
        </header>
    )
}
