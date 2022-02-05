import { cargandoReducers } from './reducers/cargando.reducers';
import { CargandoState } from './models/cargando.state';
import { eventosReducers } from './reducers/eventos.reducers';
import { EventState } from './models/eventos.state';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState{
  eventos: EventState,
  estaCargadoDatos: CargandoState
  // listaParticipantes: ReadonlyArray<IJugador>
}

export const ROOT_REDUCERS: ActionReducerMap<AppState>={
  eventos: eventosReducers,
  estaCargadoDatos: cargandoReducers
}
