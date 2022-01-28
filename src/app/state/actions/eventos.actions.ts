import { IEvento } from 'src/app/common/models/evento.interface';
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

export const accionMostrarEventosComoTarjetas= createAction(
  '[EventPages] mostrar Eventos como Tarjetas'
)

export const accionErrorCargandoEventos= createAction(
   '[EventPages] Error cargando eventos',
   props<{ error: any}>()
)
