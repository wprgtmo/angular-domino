import { IEvento } from "../../common/models/interface/evento.interface";

export interface EventoState{
  esTarjeta: boolean,
  cargando: boolean,
  id_seleccionado: number,
  eventos: ReadonlyArray<IEvento>
}
