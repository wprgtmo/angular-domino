import { IArbitro } from 'src/app/common/models/interface/arbitro.interface';
import { createReducer, on } from '@ngrx/store';
import { ArbitrosState } from './../models/arbitros.state';
import {
  accionArbitrosCargados,
  accionCargarArbitros,
  accionMostrarArbitrosComoLista,
  accionMostrarArbitrosComoTarjeta,
  accionSeleccionarArbitro,
  accionEliminarArbitro,
  accionNuevoArbitroCreado,
  accionCrearNuevoArbitro,
  accionErrorArbitros,
  accionArbitroEliminado,
} from './../actions/arbitros.actions';

export const estadoInicial: ArbitrosState = {
  esTarjeta: true,
  cargando: false,
  id_arbitro_seleccionado: 0,
  arbitros: [],
};

export const arbitrosReducers = createReducer(
  estadoInicial,

  on(accionCargarArbitros, (oldState) => {
    return { ...oldState, cargando: true };
  }),

  on(accionArbitrosCargados, (oldState, { arbitros }) => {
    return { ...oldState, cargando: false, arbitros: arbitros };
  }),

  on(accionCrearNuevoArbitro, (oldState, { arbitro }) => {
    return { ...oldState, arbitro };
  }),

  on(accionNuevoArbitroCreado, (oldState, { arbitro }) => {
    return { ...oldState, arbitro };
  }),

  on(accionMostrarArbitrosComoLista, (oldState) => {
    return { ...oldState, esTarjeta: false };
  }),

  on(accionMostrarArbitrosComoTarjeta, (oldState) => {
    return { ...oldState, esTarjeta: true };
  }),

  on(accionSeleccionarArbitro, (oldState, { arbitro_id }) => {
    return { ...oldState, id_arbitro_seleccionado: arbitro_id };
  }),

  on(accionEliminarArbitro, (oldState, { arbitro_id }) => {
    return { ...oldState, id_arbitro_seleccionado: arbitro_id};
  }),

  on(accionArbitroEliminado, (oldState, { arbitro_eliminado }) => {
    const arbitrosQuedan= oldState.arbitros.filter((arbitro: IArbitro)=> arbitro.id !== arbitro_eliminado.id)
    return { ...oldState, arbitros: arbitrosQuedan };
  }),

  on(accionErrorArbitros, (oldState, { error }) => {
    console.log('Error cargando arbitros.... ', error);

    return { ...oldState, error };
  })
);
