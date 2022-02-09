import { DominoApiService } from '../../common/services/domino-api.service';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError, tap, } from 'rxjs/operators';
import { EVENT_ACTIONS_NAMES } from '../actions/eventos.actions';

@Injectable()
export class EventosEffects {

  cargarEventos$ = createEffect(() => this.actions$.pipe(
    ofType(EVENT_ACTIONS_NAMES.LOAD_EVENTS),
    mergeMap(() => this.dominoApiService.getEventos()
      .pipe(
        map((events) => ({ type: EVENT_ACTIONS_NAMES.EVENTS_LOADS, eventos: events.eventos })),
        catchError((error) => of({ type: EVENT_ACTIONS_NAMES.EVENTS_ERRORS, error }))
      ))
  )
  );

  iniciarEvento$ = createEffect(() => this.actions$.pipe(
    ofType(EVENT_ACTIONS_NAMES.INIT_EVENT),
    mergeMap((action) => this.dominoApiService.iniciarEvento(action)
      .pipe(
        map((evento) => ({ type: EVENT_ACTIONS_NAMES.EVENT_INITED, evento })),
        catchError((error) => of({ type: EVENT_ACTIONS_NAMES.EVENTS_ERRORS, error }))
      ))
  )
  );

  eliminarEvento$ = createEffect(() => this.actions$.pipe(
    ofType(EVENT_ACTIONS_NAMES.DELETE_EVENT),
    mergeMap((action) => this.dominoApiService.delEvento(action)
      .pipe(
        map((evento) => ({ type: EVENT_ACTIONS_NAMES.EVENT_DELETED, evento })),
        catchError((error) => of({ type: EVENT_ACTIONS_NAMES.EVENTS_ERRORS, error }))
      ))
  )
  );

  finalizarEvento$ = createEffect(() => this.actions$.pipe(
    ofType(EVENT_ACTIONS_NAMES.END_EVENT),
    mergeMap((action) => this.dominoApiService.finalizarEvento(action)
      .pipe(
        map((evento) => ({ type: EVENT_ACTIONS_NAMES.EVENT_ENDED, evento })),
        catchError((error) => of({ type: EVENT_ACTIONS_NAMES.EVENTS_ERRORS, error }))
      ))
  )
  );

  cargarParejas$ = createEffect(() => this.actions$.pipe(
    ofType(EVENT_ACTIONS_NAMES.LOAD_PAREJAS),
    mergeMap((action: any) => {
      return this.dominoApiService.getParejas(action.evento_id)
      .pipe(
          map((parejas) => ({ type: EVENT_ACTIONS_NAMES.PAREJAS_LOADS, parejas: parejas })),
          catchError((error) => of({ type: EVENT_ACTIONS_NAMES.EVENTS_ERRORS, error }))
          )
        })
        )
  );

  cargarMesas$ = createEffect(() => this.actions$.pipe(
    ofType(EVENT_ACTIONS_NAMES.LOAD_MESAS),
    mergeMap((action: any) => {
      return this.dominoApiService.getMesas(action.evento_id)
      .pipe(
        map((mesas) => ({ type: EVENT_ACTIONS_NAMES.MESAS_LOADS, mesas: mesas.mesas })),
        catchError((error) => of({ type: EVENT_ACTIONS_NAMES.EVENTS_ERRORS, error }))
        )
      })
      )
      );

      cargarRondas$ = createEffect(() => this.actions$.pipe(
        ofType(EVENT_ACTIONS_NAMES.LOAD_RONDAS),
        // tap(() => console.log("Acccion desde el efecto de la ronda: Cargando...")),
        mergeMap((action: any) => {
          // tap(() => console.log("Acccion desde el efecto de la ronda", action.evento_id));
          return this.dominoApiService.getRondas(action.evento_id)
            .pipe(
              // tap((rondas) => console.log("Acccion desde el efecto de la ronda: Cargo....", rondas)),
              map((rondas) => ({ type: EVENT_ACTIONS_NAMES.RONDAS_LOADS, rondas: rondas.rondas })),
              catchError((error) => of({ type: EVENT_ACTIONS_NAMES.EVENTS_ERRORS, error }))
            )
        }))
      );


      cargarBoletas$ = createEffect(() => this.actions$.pipe(
        ofType(EVENT_ACTIONS_NAMES.LOAD_BOLETAS),
        tap(() => console.log("Acccion desde el efecto de las boletas: Cargando...")),
        mergeMap((action: any) => {
          tap(() => console.log("Acccion desde el efecto de las boletas", action));
          return this.dominoApiService.getBoletasCompleta(action.ronda_id)
            .pipe(
              tap((result) => console.log("Acccion desde el efecto de las boletas: Cargo....", result)),
              map((result) => ({ type: EVENT_ACTIONS_NAMES.BOLETAS_LOADS, boletas: result.boletas })),
              catchError((error) => of({ type: EVENT_ACTIONS_NAMES.EVENTS_ERRORS, error }))
            )
        }))
      );


      constructor(private actions$: Actions, private dominoApiService: DominoApiService) { }
    }
