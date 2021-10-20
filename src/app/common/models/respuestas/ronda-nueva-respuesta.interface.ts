import { IBoleta } from "../boleta.interface";
import { IRonda } from "../ronda.interface";

export interface IRondaNuevaRespuesta{
  nuevaRonda: IRonda,
  boletas: IBoleta[]
}
