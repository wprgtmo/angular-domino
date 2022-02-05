import { EventState } from '../models/eventos.state';
import { createReducer, on } from '@ngrx/store';
import {
  accionCargarEventos,
  accionEliminarEvento,
  accionEventosCargados,
  accionFinalizarEvento,
  accionIniciarEvento,
  accionMostrarEventosComoLista,
  accionMostrarEventosComoTarjeta,
  accionSeleccionarEvento,
  accionNuevoEvento,
  accionSeleccionarRonda,
  accionCargarMesas,
  accionCargarParejas,
  accionMesasCargadas,
  accionParejasCargadas,
  accionCargarRondas,
  accionRondasCargadas,
  accionErrorCargandoEventos,
} from '../actions/eventos.actions';

export const estadoInicial: EventState = {
  esTarjeta: true,
  cargando: false,
  id_evento_seleccionado: 0,
  id_ronda_seleccionada: 0,
  parejas: [],
  mesas: [],
  rondas: [],
  eventos: [],
};

export const eventosReducers = createReducer(
  estadoInicial,

  on(accionCargarEventos, (oldState) => {
    return { ...oldState, cargando: true };
  }),

  on(accionEventosCargados, (oldState, { eventos }) => {
    return { ...oldState, cargando: false, eventos: eventos };
  }),

  on(accionNuevoEvento, (oldState, { evento }) => {
    return { ...oldState, evento };
  }),

  on(accionMostrarEventosComoLista, (oldState) => {
    return { ...oldState, esTarjeta: false };
  }),

  on(accionMostrarEventosComoTarjeta, (oldState) => {
    return { ...oldState, esTarjeta: true };
  }),

  on(accionSeleccionarEvento, (oldState, { id }) => {
    return { ...oldState, id_evento_seleccionado: id };
  }),

  on(accionIniciarEvento, (oldState) => {
    return { ...oldState };
  }),

  on(accionEliminarEvento, (oldState) => {
    return { ...oldState };
  }),

  on(accionFinalizarEvento, (oldState) => {
    return { ...oldState };
  }),

  on(accionErrorCargandoEventos, (oldState, { error }) => {
    console.log('Error cargando eventos.... ', error);

    return { ...oldState, error };
  }),

  on(accionCargarParejas, (oldState, { evento_id }) => {
    return { ...oldState, cargando: true, id_evento_seleccionado: evento_id };
  }),

  on(accionParejasCargadas, (oldState, { parejas }) => {
    return { ...oldState, cargando: false, parejas: parejas };
  }),

  on(accionCargarMesas, (oldState) => {
    return { ...oldState, cargando: true };
  }),

  on(accionMesasCargadas, (oldState, { mesas }) => {
    return { ...oldState, cargando: false, mesas: mesas };
  }),

  on(accionCargarRondas, (oldState) => {
    return { ...oldState, cargando: true };
  }),

  on(accionRondasCargadas, (oldState, { rondas }) => {
    return { ...oldState, cargando: false, rondas: rondas };
  }),

  on(accionSeleccionarRonda, (oldState, { id }) => {
    return { ...oldState, id_ronda_seleccionada: id };
  })
);
