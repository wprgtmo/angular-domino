import { cargandoReducers } from './reducers/cargando.reducers';
import { CargandoState } from './../common/models/states/cargando.state';
import { eventosReducers } from './reducers/eventos.reducers';
import { EventoState } from './../common/models/states/eventos.state';
import { IJugador } from "../common/models/jugador.interface";
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
