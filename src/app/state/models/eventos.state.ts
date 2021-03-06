import { IEstadisticaBoleta } from './../../common/models/interface/estadistica-boleta.interface';
import { IBoletaCompleta } from './../../common/models/interface/boleta-completa.interface';
import { IPareja } from './../../common/models/interface/pareja.interface';
import { IMesa } from './../../common/models/interface/mesa.interface';
import { IRonda } from './../../common/models/interface/ronda.interface';
import { IEvento } from "../../common/models/interface/evento.interface";
import { IEstadisticaRonda } from 'src/app/common/models/interface/estadistica-ronda.interface';

export interface EventState{
  esTarjeta: boolean,
  cargando: boolean,
  id_evento_seleccionado: number,
  id_ronda_seleccionada: number,
  id_boleta_seleccionada: number,
  eventos: ReadonlyArray<IEvento>
  parejas: ReadonlyArray<IPareja>,
  mesas: ReadonlyArray<IMesa>,
  rondas: ReadonlyArray<IRonda>,
  boletas: ReadonlyArray<IBoletaCompleta>
  estadisticaRonda: ReadonlyArray<IEstadisticaRonda>
  estadisticaBoleta: ReadonlyArray<IEstadisticaBoleta>
}
