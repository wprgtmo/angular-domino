import { IBoletaCompleta } from './../../common/models/interface/boleta-completa.interface';
import { IBoleta } from './../../common/models/interface/boleta.interface';
import { IPareja } from './../../common/models/interface/pareja.interface';
import { IMesa } from './../../common/models/interface/mesa.interface';
import { IRonda } from './../../common/models/interface/ronda.interface';
import { IEvento } from 'src/app/common/models/interface/evento.interface';
import { createAction, props } from '@ngrx/store';
import { IEstadisticaRonda } from 'src/app/common/models/interface/estadistica-ronda.interface';

export enum EVENT_ACTIONS_NAMES {
  LOAD_EVENTS = '[EventPages] cargar Eventos',
  EVENTS_LOADS = '[EventPages] Eventos cargados satisfactoriamente',
  NEW_EVENT = '[EventPages] nuevo Evento',
  SHOW_LIST = '[EventPages] mostrar Eventos como Lista',
  SHOW_CARD = '[EventPages] mostrar Eventos como Tarjeta',
  EVENTS_ERRORS = '[EventPages] Error cargando eventos',
  EVENT_ID_SELECT = '[EventPages] asignar Id evento seleccionado',
  INIT_EVENT = '[EventPages] iniciar Evento',
  EVENT_INITED = '[EventPages] Evento iniciado satisfactoriamente',
  DELETE_EVENT = '[EventPages] eliminar Evento',
  EVENT_DELETED = '[EventPages] Evento eliminado satisfactoriamente',
  END_EVENT = '[EventPages] finalizar Evento',
  EVENT_ENDED = '[EventPages] Evento finalizado satisfactoriamente',

  LOAD_PAREJAS = '[ParejaPages] cargar Parejas',
  PAREJAS_LOADS = '[ParejaPages] Parejas cargadas satisfactoriamente',

  LOAD_MESAS = '[MesaPages] cargar Mesas',
  MESAS_LOADS = '[MesaPages] Mesas cargadas satisfactoriamente',

  LOAD_RONDAS = '[RondaPages] cargar Rondas',
  RONDAS_LOADS = '[RondaPages] Rondas cargadas satisfactoriamente',
  RONDA_ID_SELECT = '[RondaPages] asignar Id ronda seleccionada',

  
  LOAD_ESTADISTICA_RONDA = '[EstadisticaRondaPages] cargar Estadisticas de la Ronda Finalizada',
  ESTADISTICA_RONDA_LOADS = '[EstadisticaRondaPages] Estadisticas de la Ronda cargadas satisfactoriamente',

  LOAD_BOLETAS = '[BoletaPages] cargar Boletas',
  BOLETAS_LOADS = '[BoletaPages] Boletas cargadas satisfactoriamente',
  BOLETA_ID_SELECT = '[BoletaPages] asignar Id Boleta seleccionada',

}

export const accionCargarEventos = createAction(EVENT_ACTIONS_NAMES.LOAD_EVENTS);

export const accionEventosCargados = createAction(
  EVENT_ACTIONS_NAMES.EVENTS_LOADS,
  props<{ eventos: IEvento[] }>()
);

export const accionNuevoEvento = createAction(EVENT_ACTIONS_NAMES.NEW_EVENT, props<{ evento: IEvento }>());
export const accionMostrarEventosComoLista = createAction(EVENT_ACTIONS_NAMES.SHOW_LIST);

export const accionMostrarEventosComoTarjeta = createAction(EVENT_ACTIONS_NAMES.SHOW_CARD);

export const accionErrorEventos = createAction(
  EVENT_ACTIONS_NAMES.EVENTS_ERRORS,
  props<{ error: any }>()
);

export const accionSeleccionarEvento = createAction(
  EVENT_ACTIONS_NAMES.EVENT_ID_SELECT,
  props<{ id: number }>()
);

export const accionIniciarEvento = createAction(
  EVENT_ACTIONS_NAMES.INIT_EVENT,
  props<{ id: number }>()
);

export const accionEventoIniciado = createAction(
  EVENT_ACTIONS_NAMES.EVENT_INITED,
  props<{ evento: IEvento }>()
);

export const accionEliminarEvento = createAction(
  EVENT_ACTIONS_NAMES.DELETE_EVENT,
  props<{ id: number }>()
);

export const accionEventoEliminado = createAction(EVENT_ACTIONS_NAMES.EVENT_DELETED);

export const accionFinalizarEvento = createAction(
  EVENT_ACTIONS_NAMES.END_EVENT,
  props<{ id: number }>()
);

export const accionEventoFinalizado = createAction(EVENT_ACTIONS_NAMES.EVENT_ENDED);

export const accionCargarParejas = createAction(
  EVENT_ACTIONS_NAMES.LOAD_PAREJAS,
  props<{ evento_id: number }>()
);

export const accionParejasCargadas = createAction(
  EVENT_ACTIONS_NAMES.PAREJAS_LOADS,
  props<{ parejas: IPareja[] }>()
);

export const accionCargarMesas = createAction(
  EVENT_ACTIONS_NAMES.LOAD_MESAS,
  props<{ evento_id: number }>()
);

export const accionMesasCargadas = createAction(
  EVENT_ACTIONS_NAMES.MESAS_LOADS,
  props<{ mesas: IMesa[] }>()
);

export const accionCargarRondas = createAction(
  EVENT_ACTIONS_NAMES.LOAD_RONDAS,
  props<{ evento_id: number }>()
);

export const accionRondasCargadas = createAction(
  EVENT_ACTIONS_NAMES.RONDAS_LOADS,
  props<{ rondas: IRonda[] }>()
);

export const accionCargarEstadisticaRonda = createAction(
  EVENT_ACTIONS_NAMES.LOAD_ESTADISTICA_RONDA,
  props<{ ronda_id: number }>()
);

export const accionEstadisticaRondaCargadas = createAction(
  EVENT_ACTIONS_NAMES.ESTADISTICA_RONDA_LOADS,
  props<{ estadisticaRonda: IEstadisticaRonda[] }>()
);


export const accionSeleccionarRonda = createAction(
  EVENT_ACTIONS_NAMES.RONDA_ID_SELECT,
  props<{ ronda_id: number }>()
);

export const accionCargarBoletas = createAction(
  EVENT_ACTIONS_NAMES.LOAD_BOLETAS,
  props<{ ronda_id: number }>()
);

export const accionBoletasCargadas = createAction(
  EVENT_ACTIONS_NAMES.BOLETAS_LOADS,
  props<{ boletas: IBoletaCompleta[] }>()
);

export const accionSeleccionarBoleta = createAction(
  EVENT_ACTIONS_NAMES.BOLETA_ID_SELECT,
  props<{ boleta_id: number }>()
);
