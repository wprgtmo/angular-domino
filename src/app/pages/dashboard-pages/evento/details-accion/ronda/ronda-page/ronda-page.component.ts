import { IBoletaCompleta } from '../../../../../../common/models/interface/boleta-completa.interface';
import { Component, OnInit } from '@angular/core';
import { Subscription, interval, Observable, combineLatest, merge, EmptyError } from 'rxjs';
import * as moment from 'moment/moment';
import { IRonda } from 'src/app/common/models/interface/ronda.interface';
import { EventosService } from 'src/app/state/facade/eventos.service';
import { filter, map, mergeMap, tap} from 'rxjs/operators';
import { empty } from 'rxjs';

@Component({
  templateUrl: './ronda-page.component.html',
  styleUrls: ['./ronda-page.component.css'],
})
export class RondaPageComponent implements OnInit {
  rondaActiva$: Observable<IRonda | undefined> = new Observable();
  boletas$: Observable<IBoletaCompleta[]> = new Observable();
  private subs?: Subscription;

  constructor(private eventosService: EventosService) {}

  ngOnInit(): void {
    moment.locale('es-ES');

    this.boletas$ = this.eventosService.getIdRondaSeleccionada$().pipe(
      map((ronda_id) => this.eventosService.cargarBoletas(ronda_id)),
      mergeMap(() => this.eventosService.getBoletas$())
      );

    this.subs= combineLatest([interval(3000),this.eventosService.getIdRondaSeleccionada$()]).pipe(
      tap(([temp, ronda_id]) => this.eventosService.cargarBoletas(ronda_id))
    ).subscribe();

  }

  ngOnDestroy(): void {
    this.eventosService.seleccionarRonda(0);
    this.subs?.unsubscribe();
  }
}
