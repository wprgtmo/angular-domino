import { IJugador } from "./jugador.interface";

export interface IPareja{
  id: number,
  nombre: string,
  evento_id: number,
  jugador1: IJugador,
  jugador2: IJugador
}
