import { EventoState } from '../models/eventos.state';
import { AppState } from './../app.state';
import { createSelector } from '@ngrx/store';


export const selectorEventos = (state: AppState) => state.listaEventos;

export const listaEventos = createSelector(
  selectorEventos,
  (state: EventoState) => state.eventos
);

export const cargandoEventos = createSelector(
  selectorEventos,
  (state: EventoState) => state.cargando
)

export const eventoSeleccionado = createSelector(
  selectorEventos,
  (state: EventoState) => state.eventos.find((e)=> e.id===state.id_seleccionado)
);

export const esTarjeta = createSelector(
  selectorEventos,
  (state: EventoState) => state.esTarjeta
);

export const idEventoSeleccionado = createSelector(
  selectorEventos,
  (state: EventoState) => state.id_seleccionado
);
