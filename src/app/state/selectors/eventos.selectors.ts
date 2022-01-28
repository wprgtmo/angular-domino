import { EventoState } from './../../common/models/states/eventos.state';
import { AppState } from './../app.state';
import { createSelector } from '@ngrx/store';


export const selectorEventos = (state: AppState) => state.listaEventos;

export const listaEventos = createSelector(
  selectorEventos,
  (state: EventoState) => state.eventos
);

// export const cargandoEventos = createSelector(
//   selectorEventos,
//   (state: EventoState) => state.loading
// )
