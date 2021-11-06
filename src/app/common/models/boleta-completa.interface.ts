import { IBoletaPareja } from "./boleta-pareja.interface";

export interface IBoletaCompleta {
  id              : number;
  evento_id       : number;
  ronda_id        : number;
  mesa_id         : number;
  es_valida       : boolean;
  fecha_registro  : Date;
  boleta_parejas  : IBoletaPareja[];
}




