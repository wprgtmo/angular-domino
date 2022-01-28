import { createReducer, on  } from '@ngrx/store';
import { CargandoState } from 'src/app/common/models/states/cargando.state';
import { accionCargandoDatos, accionDatosCargados } from '../actions/cargando.actions';

export const estadoInicial: CargandoState ={loading: false};

export const cargandoReducers= createReducer(
  estadoInicial,
  on(accionCargandoDatos, (oldState) =>{
    return { ...oldState, loading: true}
  }),
  on(accionDatosCargados, (oldState) =>{
    return { ...oldState, loading: false}
  })
)
