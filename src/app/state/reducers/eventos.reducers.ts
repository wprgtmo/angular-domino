import { accionNuevoEvento } from './../actions/eventos.actions';
import { EventoState } from '../models/eventos.state';
import { createReducer, on, props } from '@ngrx/store';
import { accionCargarEventos, accionEliminarEvento, accionEventosCargados,
         accionFinalizarEvento,
         accionIniciarEvento,
         accionMostrarEventosComoLista,  accionMostrarEventosComoTarjeta, accionSeleccionarEvento } from '../actions/eventos.actions';

export const estadoInicial: EventoState ={ esTarjeta: true, cargando: false, id_seleccionado: 0, eventos: []};

export const eventosReducers= createReducer(
  estadoInicial,

  on(accionCargarEventos, (oldState) =>{
    return { ...oldState, cargando: true }
  }),

  on(accionEventosCargados, (oldState, { eventos }) =>{
    return { ...oldState, cargando: false, eventos: eventos}
  }),

  on(accionNuevoEvento, (oldState, { evento }) =>{
    return { ...oldState,  evento }
  }),

  on(accionMostrarEventosComoLista, (oldState) =>{
    return { ...oldState, esTarjeta: false }
  }),

  on(accionMostrarEventosComoTarjeta, (oldState) =>{
    return { ...oldState, esTarjeta: true }
  }),

  on(accionSeleccionarEvento, (oldState, { id }) =>{
    return { ...oldState, id_seleccionado: id }
  }),

  on(accionIniciarEvento, (oldState) =>{
    return { ...oldState }
  }),

  on(accionEliminarEvento, (oldState) =>{
    return { ...oldState}
  }),

  on(accionFinalizarEvento, (oldState) =>{
    return { ...oldState}
  }),
)
