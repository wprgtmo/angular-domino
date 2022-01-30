import { cargandoReducers } from './reducers/cargando.reducers';
import { CargandoState } from './models/cargando.state';
import { eventosReducers } from './reducers/eventos.reducers';
import { EventoState } from './models/eventos.state';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState{
  listaEventos: EventoState,
  estaCargadoDatos: CargandoState
  // listaParticipantes: ReadonlyArray<IJugador>
}

export const ROOT_REDUCERS: ActionReducerMap<AppState>={
  listaEventos: eventosReducers,
  estaCargadoDatos: cargandoReducers
}
