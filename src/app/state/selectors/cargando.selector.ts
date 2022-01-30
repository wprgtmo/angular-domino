import { CargandoState } from '../models/cargando.state';
import { AppState } from './../app.state';
import { createSelector } from '@ngrx/store';


export const selectorCargando = (state: AppState) => state.estaCargadoDatos;

export const cargandoDatosSelector = createSelector(
  selectorCargando,
  (state: CargandoState) => state.loading
)
