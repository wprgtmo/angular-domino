import { IEvento } from "../../common/models/interface/evento.interface";

export interface EventoState{
  esTarjeta: boolean,
  cargando: boolean,
  eventos: ReadonlyArray<IEvento>
}
