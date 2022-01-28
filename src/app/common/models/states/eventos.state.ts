import { IEvento } from "../evento.interface";

export interface EventoState{
  esTarjeta: boolean,
  cargando: boolean,
  eventos: ReadonlyArray<IEvento>
}
