import { IRonda } from '../interface/ronda.interface';
import { IMesa } from '../interface/mesa.interface';
import { IBoletaPareja } from "./boleta-pareja.interface";
import { IEstadisticaBoleta } from '../interface/estadistica-boleta.interface';

export interface IBoletaCompleta {
  id              : number;
  evento_id       : number;
  ronda_id        : number;
  mesa_id         : number;
  estado          : string;
  es_valida       : boolean;
  fecha_registro  : Date;
  ronda           : IRonda;
  mesa            : IMesa;
  boleta_parejas  : IBoletaPareja[];
  estadistica     : IEstadisticaBoleta[];
}




