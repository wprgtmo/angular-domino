import { IBoleta } from "../interface/boleta.interface";
import { IRonda } from "../interface/ronda.interface";

export interface IRondaNuevaRespuesta{
  nuevaRonda: IRonda,
  boletas: IBoleta[]
}
