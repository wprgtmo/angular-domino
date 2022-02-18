import { cargandoReducers } from './reducers/cargando.reducers';
import { CargandoState } from './models/cargando.state';
import { eventosReducers } from './reducers/eventos.reducers';
import { EventState } from './models/eventos.state';
import { ActionReducerMap } from '@ngrx/store';
import { ArbitrosState } from './models/arbitros.state';
import { arbitrosReducers } from './reducers/arbitros.reducers';

export interface AppState{
  eventos: EventState,
  arbitros: ArbitrosState,
  estaCargadoDatos: CargandoState
  // listaParticipantes: ReadonlyArray<IJugador>
}

export const ROOT_REDUCERS: ActionReducerMap<AppState>={
  eventos: eventosReducers,
  arbitros: arbitrosReducers,
  estaCargadoDatos: cargandoReducers
}
