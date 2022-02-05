import { IPareja } from './../../common/models/interface/pareja.interface';
import { IMesa } from './../../common/models/interface/mesa.interface';
import { IRonda } from './../../common/models/interface/ronda.interface';
import { IEvento } from "../../common/models/interface/evento.interface";

export interface EventState{
  esTarjeta: boolean,
  cargando: boolean,
  id_evento_seleccionado: number,
  id_ronda_seleccionada: number,
  parejas: ReadonlyArray<IPareja>,
  mesas: ReadonlyArray<IMesa>,
  rondas: ReadonlyArray<IRonda>,
  eventos: ReadonlyArray<IEvento>
}
