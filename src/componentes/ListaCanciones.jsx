import { canciones } from "../datos/canciones"
import { FilaCancion } from "./FilaCancion"

export const ListaCanciones = () => {
  return (
    <section className="flex flex-1 flex-col gap-2 p-6">
      {canciones.map(cancion => <FilaCancion key={cancion.id} cancion={cancion} />)}
    </section>
  )
}
