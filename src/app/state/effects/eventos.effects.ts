import { DELETE_EVENT, END_EVENT, EVENTS_LOAD_ERRORS, EVENT_DELETED, EVENT_ENDED, EVENT_INITED, INIT_EVENT } from './../actions/eventos.actions';
import { DominoApiService } from '../../common/services/domino-api.service';
import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom, tap } from 'rxjs/operators';
import { LOAD_EVENTS, EVENTS_LOADS } from '../actions/eventos.actions';

@Injectable()
export class EventosEffects {

  cargarEventos$ = createEffect(() => this.actions$.pipe(
    ofType(LOAD_EVENTS),
    mergeMap(() => this.dominoApiService.getEventos()
      .pipe(
        map((events) => ({ type: EVENTS_LOADS,  eventos: events.eventos })),
        catchError((error) => of({ type: '[EventPages] Error cargando eventos', error }))
      ))
    )
  );

  iniciarEvento$ = createEffect(() => this.actions$.pipe(
    ofType(INIT_EVENT),
    mergeMap((action) => this.dominoApiService.iniciarEvento(action)
      .pipe(
        map((evento) => ({ type: EVENT_INITED,  evento })),
        catchError((error) => of({ type: EVENTS_LOAD_ERRORS, error }))
      ))
    )
  );

  eliminarEvento$ = createEffect(() => this.actions$.pipe(
    ofType(DELETE_EVENT),
    mergeMap((action) => this.dominoApiService.delEvento(action)
      .pipe(
        map((evento) => ({ type: EVENT_DELETED,  evento })),
        catchError((error) => of({ type: EVENTS_LOAD_ERRORS, error }))
      ))
    )
  );

  finalizarEvento$ = createEffect(() => this.actions$.pipe(
    ofType(END_EVENT),
    mergeMap((action) => this.dominoApiService.finalizarEvento(action)
      .pipe(
        map((evento) => ({ type: EVENT_ENDED,  evento })),
        catchError((error) => of({ type: EVENTS_LOAD_ERRORS, error }))
      ))
    )
  );


  constructor( private actions$: Actions, private dominoApiService: DominoApiService ) {}
}
