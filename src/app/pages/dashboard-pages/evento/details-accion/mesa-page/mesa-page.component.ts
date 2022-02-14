import { EventosService } from 'src/app/state/facade/eventos.service';
import { IMesa } from '../../../../../common/models/interface/mesa.interface';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';

@Component({
  templateUrl: './mesa-page.component.html',
  styleUrls: ['./mesa-page.component.css']
})
export class MesaPageComponent implements OnInit{
  listaMesas$: Observable<IMesa[]>= new Observable();
  subs?: Subscription;

  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
    this.listaMesas$ = this.eventosService.getIdEventoSeleccionado$().pipe(
      map((evento_id) => this.eventosService.cargarMesas(evento_id)),
      mergeMap(() => this.eventosService.getMesas$()),
      map((mesaResp)=> mesaResp.sort((m1, m2)=> m1.numero-m2.numero))
    )
  }
}
