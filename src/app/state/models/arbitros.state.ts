import { IArbitro } from './../../common/models/interface/arbitro.interface';

export interface ArbitrosState{
  esTarjeta: boolean,
  cargando: boolean,
  id_arbitro_seleccionado: number,
  arbitros: ReadonlyArray<IArbitro>
  // estadisticaRonda: ReadonlyArray<IEstadisticaRonda>
}
