import { IRonda } from './ronda.interface';
import { IMesa } from './mesa.interface';
import { IBoletaPareja } from "./boleta-pareja.interface";

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
}




