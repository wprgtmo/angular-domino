import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, } from 'rxjs/operators';
import { DominoApiService } from '../../common/services/domino-api.service';
import { ARBITRO_ACTIONS_NAMES } from '../actions/arbitros.actions';

@Injectable()
export class ArbitrosEffects {

  cargarEventos$ = createEffect(() => this.actions$.pipe(
    ofType(ARBITRO_ACTIONS_NAMES.LOAD_ARBITROS),
    mergeMap(() => this.dominoApiService.getArbitros()
      .pipe(
        map((arbitros:any) => ({ type: ARBITRO_ACTIONS_NAMES.ARBITROS_LOADS, arbitros: arbitros.arbitros })),
        catchError((error) => of({ type: ARBITRO_ACTIONS_NAMES.ARBITROS_ERRORS, error }))
      ))
  )
  );

  eliminarEvento$ = createEffect(() => this.actions$.pipe(
    ofType(ARBITRO_ACTIONS_NAMES.DELETE_ARBITRO),
    mergeMap((action) => this.dominoApiService.delArbitro(action)
      .pipe(
        map((arbitro) => ({ type: ARBITRO_ACTIONS_NAMES.ARBITRO_DELETED, arbitro })),
        catchError((error) => of({ type: ARBITRO_ACTIONS_NAMES.ARBITROS_ERRORS, error }))
      ))
  ));

  
  crearEvento$ = createEffect(() => this.actions$.pipe(
    ofType(ARBITRO_ACTIONS_NAMES.CREATE_ARBITRO),
    mergeMap((action) => this.dominoApiService.newArbitro(action)
      .pipe(
        map((arbitro) => ({ type: ARBITRO_ACTIONS_NAMES.ARBITRO_CREATED, arbitro })),
        catchError((error) => of({ type: ARBITRO_ACTIONS_NAMES.ARBITROS_ERRORS, error }))
      ))
  ));
      
  constructor(private actions$: Actions, private dominoApiService: DominoApiService) { }
}
