import { EventState } from '../models/eventos.state';
import { AppState } from './../app.state';
import { createSelector, on } from '@ngrx/store';


export const selectorEventos = (state: AppState) => state.eventos;

export const listaEventos = createSelector(
  selectorEventos,
  (state: EventState) => [...state.eventos]
);

export const cargandoEventos = createSelector(
  selectorEventos,
  (state: EventState) => state.cargando
)

export const eventoSeleccionado = createSelector(
  selectorEventos,
  (state: EventState) => state.eventos.find((e)=> e.id===state.id_evento_seleccionado)
);

export const esTarjeta = createSelector(
  selectorEventos,
  (state: EventState) => state.esTarjeta
);

export const idEventoSeleccionado = createSelector(
  selectorEventos,
  (state: EventState) => state.id_evento_seleccionado
);

export const mesas = createSelector(
  selectorEventos,
  (state: EventState) => [...state.mesas]
);

export const parejas = createSelector(
  selectorEventos,
  (state: EventState) => [...state.parejas]
);

export const idRondaSeleccionada = createSelector(
  selectorEventos,
  (state: EventState) => state.id_ronda_seleccionada
);

export const rondaSeleccionada = createSelector(
  selectorEventos,
  (state: EventState) => state.rondas.find((e)=> e.id===state.id_ronda_seleccionada)
);

export const rondas = createSelector(
  selectorEventos,
  (state: EventState) => [...state.rondas]
);

export const boletas = createSelector(
  selectorEventos,
  (state: EventState) => [...state.boletas]
);

// export const rondaActiva = createSelector(
//   selectorEventos,
//   (state: EventState) => [...state.rondas[state.rondas.length-1]]
// );

