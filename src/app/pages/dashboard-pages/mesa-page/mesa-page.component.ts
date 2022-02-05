import { EventosService } from 'src/app/state/facade/eventos.service';
import { IMesa } from './../../../common/models/interface/mesa.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { Store } from '@ngrx/store';
import { idEventoSeleccionado } from 'src/app/state/selectors/eventos.selectors';
import { AppState } from 'src/app/state/app.state';
import { map, switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './mesa-page.component.html',
  styleUrls: ['./mesa-page.component.css']
})
export class MesaPageComponent implements OnInit, OnDestroy {
  id$: Observable<number>= new Observable();
  listaMesas$: Observable<IMesa[]>= new Observable();
  subs?: Subscription;

  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {

    this.id$= this.eventosService.getIdEventoSeleccionado$();

    this.subs = this.id$.pipe(map((id) => this.eventosService.cargarMesas(id))).subscribe();

    this.listaMesas$= this.eventosService.getMesas$().pipe(
      map((mesaResp)=> mesaResp.sort((m1, m2)=> m1.numero-m2.numero))
    );
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}
