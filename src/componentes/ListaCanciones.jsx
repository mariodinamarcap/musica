import { canciones } from "../datos/canciones"
import { FilaCancion } from "./FilaCancion"

export const ListaCanciones = () => {
  return (
    canciones.map(cancion => <FilaCancion key={cancion.id} cancion={cancion} />)
  )
}
