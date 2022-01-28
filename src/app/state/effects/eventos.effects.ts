import { DominoApiService } from '../../common/services/domino-api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class EventosEffects {

  cargarEventos$ = createEffect(() => this.actions$.pipe(
    ofType('[EventPages] cargar Eventos'),
    mergeMap(() => this.dominoApiService.getEventos()
      .pipe(
        map(eventos => ({ type: '[EventPages] Eventos cargados satisfactoriamente',  eventos })),
        catchError((error) => of({ type: '[EventPages] Error cargando eventos', error }))
      ))
    )
  );

  constructor( private actions$: Actions, private dominoApiService: DominoApiService ) {}
}