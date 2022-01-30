import { EventoState } from '../models/eventos.state';
import { createReducer, on, props } from '@ngrx/store';
import { accionCargarEventos, accionEventosCargados,
         accionMostrarEventosComoLista,  accionMostrarEventosComoTarjeta } from '../actions/eventos.actions';

export const estadoInicial: EventoState ={ esTarjeta: true, cargando: false, eventos: []};

export const eventosReducers= createReducer(
  estadoInicial,

  on(accionCargarEventos, (oldState) =>{
    return { ...oldState, cargando: true }
  }),

  on(accionEventosCargados, (oldState, { eventos }) =>{
    return { ...oldState, cargando: false, eventos: eventos}
  }),

  on(accionMostrarEventosComoLista, (oldState) =>{
    return { ...oldState, esTarjeta: false }
  }),

  on(accionMostrarEventosComoTarjeta, (oldState) =>{
    return { ...oldState, esTarjeta: true }
  })
)
