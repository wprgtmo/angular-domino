import { createAction, props } from '@ngrx/store';
import { IArbitro } from 'src/app/common/models/interface/arbitro.interface';

export enum ARBITRO_ACTIONS_NAMES {
  LOAD_ARBITROS = '[ArbitroPages] cargar Arbitros',
  ARBITROS_LOADS = '[ArbitroPages] Arbitros cargados satisfactoriamente',

  CREATE_ARBITRO = '[ArbitroPages] crear nuevo Arbitro',
  ARBITRO_CREATED = '[ArbitroPages] nuevo Arbitro creado satisfactoriamente',

  SHOW_LIST = '[ArbitroPages] mostrar Arbitros como Lista',
  SHOW_CARD = '[ArbitroPages] mostrar Arbitros como Tarjeta',

  ARBITROS_ERRORS = '[ArbitroPages] Error cargando Arbitros',

  ARBITRO_ID_SELECT = '[ArbitroPages] asignar Id Arbitro seleccionado',

  DELETE_ARBITRO = '[ArbitroPages] eliminar Arbitro',
  ARBITRO_DELETED = '[ArbitroPages] Arbitro eliminado satisfactoriamente',

  LOAD_ESTADISTICA_ARBITROS = '[EstadisticaArbitrosPages] cargar Estadisticas de los arbitros',
  ESTADISTICA_ARBITROS_LOADS = '[EstadisticaArbitrosPages] Estadisticas de los arbitros cargados satisfactoriamente',
}

export const accionCargarArbitros = createAction(
  ARBITRO_ACTIONS_NAMES.LOAD_ARBITROS
);

export const accionArbitrosCargados = createAction(
  ARBITRO_ACTIONS_NAMES.ARBITROS_LOADS,
  props<{ arbitros: IArbitro[] }>()
);

export const accionCrearNuevoArbitro = createAction(
  ARBITRO_ACTIONS_NAMES.CREATE_ARBITRO,
  props<{ arbitro: IArbitro }>()
);

export const accionNuevoArbitroCreado = createAction(
  ARBITRO_ACTIONS_NAMES.CREATE_ARBITRO,
  props<{ arbitro: IArbitro }>()
);

export const accionMostrarArbitrosComoLista = createAction(
  ARBITRO_ACTIONS_NAMES.SHOW_LIST
);

export const accionMostrarArbitrosComoTarjeta = createAction(
  ARBITRO_ACTIONS_NAMES.SHOW_CARD
);

export const accionErrorArbitros = createAction(
  ARBITRO_ACTIONS_NAMES.ARBITROS_ERRORS,
  props<{ error: any }>()
);

export const accionSeleccionarArbitro = createAction(
  ARBITRO_ACTIONS_NAMES.ARBITRO_ID_SELECT,
  props<{ arbitro_id: number }>()
);

export const accionEliminarArbitro = createAction(
  ARBITRO_ACTIONS_NAMES.DELETE_ARBITRO,
  props<{ arbitro_id: number }>()
);

export const  accionArbitroEliminado = createAction(
  ARBITRO_ACTIONS_NAMES.ARBITRO_DELETED,
  props<{ arbitro_eliminado: IArbitro }>()
);
