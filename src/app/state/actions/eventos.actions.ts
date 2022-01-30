import { IEvento } from 'src/app/common/models/interface/evento.interface';
import { createAction, props } from '@ngrx/store';


export const accionCargarEventos= createAction(
   '[EventPages] cargar Eventos'
)

export const accionEventosCargados= createAction(
   '[EventPages] Eventos cargados satisfactoriamente',
   props<{ eventos: IEvento[] }>()
)

export const accionMostrarEventosComoLista= createAction(
   '[EventPages] mostrar Eventos como Lista'
)

export const accionMostrarEventosComoTarjeta= createAction(
  '[EventPages] mostrar Eventos como Tarjeta'
)

export const accionErrorCargandoEventos= createAction(
   '[EventPages] Error cargando eventos',
   props<{ error: any }>()
)

// export const seleccionarEvento= createAction(
//   '[EventPages] Error cargando eventos',
//   props<{ evento: IEvento }>()
// )

