import { IEvento } from 'src/app/common/models/interface/evento.interface';
import { createAction, props } from '@ngrx/store';

export const LOAD_EVENTS          = '[EventPages] cargar Eventos';
export const EVENTS_LOADS         = '[EventPages] Eventos cargados satisfactoriamente';
export const NEW_EVENT            = '[EventPages] nuevo Evento';
export const SHOW_LIST            = '[EventPages] mostrar Eventos como Lista';
export const SHOW_CARD            = '[EventPages] mostrar Eventos como Tarjeta';
export const EVENTS_LOAD_ERRORS   = '[EventPages] Error cargando eventos';
export const EVENT_ID_SELECT      = '[EventPages] asignar Id evento seleccionado';
export const INIT_EVENT           = '[EventPages] iniciar Evento';
export const EVENT_INITED         = '[EventPages] Evento iniciado satisfactoriamente';
export const DELETE_EVENT         = '[EventPages] eliminar Evento';
export const EVENT_DELETED        = '[EventPages] Evento eliminado satisfactoriamente';
export const END_EVENT            = '[EventPages] finalizar Evento';
export const EVENT_ENDED          = '[EventPages] Evento finalizado satisfactoriamente';

export const accionCargarEventos= createAction(
  LOAD_EVENTS
)

export const accionEventosCargados= createAction(
  EVENTS_LOADS,
  props<{ eventos: IEvento[] }>()
)

export const accionNuevoEvento= createAction(
  NEW_EVENT,
  props<{ evento: IEvento }>()
)
export const accionMostrarEventosComoLista= createAction(
  SHOW_LIST
)

export const accionMostrarEventosComoTarjeta= createAction(
  SHOW_CARD
)

export const accionErrorCargandoEventos= createAction(
  EVENTS_LOAD_ERRORS,
  props<{ error: any }>()
)

export const accionSeleccionarEvento= createAction(
  EVENT_ID_SELECT,
  props<{ id: number }>()
)

export const accionIniciarEvento= createAction(
  INIT_EVENT,
  props<{ id: number }>()
)

export const accionEventoIniciado= createAction(
  EVENT_INITED,
  props<{ evento: IEvento }>()  
)

export const accionEliminarEvento= createAction(
  DELETE_EVENT,
  props<{ id: number }>()
)

export const accionEventoEliminado= createAction(
  EVENT_DELETED
)


export const accionFinalizarEvento= createAction(
  END_EVENT,
  props<{ id: number }>()
)

export const accionEventoFinalizado= createAction(
  EVENT_ENDED
)


