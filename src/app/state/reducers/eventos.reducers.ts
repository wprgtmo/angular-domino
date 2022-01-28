import { accionMostrarEventosComoTarjetas } from './../actions/eventos.actions';
import { EventoState } from './../../common/models/states/eventos.state';
import { createReducer, on  } from '@ngrx/store';
import { accionCargarEventos, accionEventosCargados, accionMostrarEventosComoLista } from '../actions/eventos.actions';

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

  on(accionMostrarEventosComoTarjetas, (oldState) =>{
    return { ...oldState, esTarjeta: true }
  })
)
