import { IPareja } from "./pareja.interface";

export interface IBoletaPareja {
  id        : number,
  boleta_id : number,
  salidor   : number,
  tantos    : number,
  resultado : number,
  ganador   : number,
  inicio    : Date,
  duracion  : Date,
  pareja?   : IPareja;
}









