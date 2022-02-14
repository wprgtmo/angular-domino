import { createAction } from '@ngrx/store';

export const accionCargandoDatos= createAction(
   '[Loader Interceptor] Cargando datos'
)

export const accionDatosCargados= createAction(
   '[Loader Interceptor] Datos cargados'
)
