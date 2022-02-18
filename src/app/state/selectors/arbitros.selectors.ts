import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { ArbitrosState } from './../models/arbitros.state';


export const selectorArbitros = (state: AppState) => state.arbitros;

export const listaArbitros = createSelector(
  selectorArbitros,
  (state: ArbitrosState) => [...state.arbitros]
);

export const cargandoArbitros = createSelector(
  selectorArbitros,
  (state: ArbitrosState) => state.cargando
)

export const arbitroSeleccionado = createSelector(
  selectorArbitros,
  (state: ArbitrosState) => state.arbitros.find((a)=> a.id===state.id_arbitro_seleccionado)
);

export const esTarjeta = createSelector(
  selectorArbitros,
  (state: ArbitrosState) => state.esTarjeta
);

export const idArbitroSeleccionado = createSelector(
  selectorArbitros,
  (state: ArbitrosState) => state.id_arbitro_seleccionado
);
