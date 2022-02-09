import { EventosService } from 'src/app/state/facade/eventos.service';
import { IRonda } from './../../../models/interface/ronda.interface';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { filter, map, mergeMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ronda-toolbar',
  templateUrl: './ronda-toolbar.component.html',
  styleUrls: ['./ronda-toolbar.component.css'],
})
export class RondaToolbarComponent implements OnInit {
  rondas$: Observable<IRonda[]> = new Observable();
  ronda_activa?: number;

  constructor(private eventosService: EventosService, private ruta: Router) {}

  ngOnInit(): void {
    this.rondas$ = this.eventosService.getIdEventoSeleccionado$().pipe(
      map((evento_id) => this.eventosService.cargarRondas(evento_id)),
      mergeMap(() => this.eventosService.getRondas$())
      );
  }

  changeRonda(ronda: any) {
    if (ronda) this.eventosService.seleccionarRonda(ronda.value);
  }

  iniciarRonda() {
    // if (this.seleccionService.getEventoSeleccionado().id != 0) {
    //   this.subscribeDominoApiService = this.dominoApiService
    //     .getRondaNueva(this.seleccionService.getEventoSeleccionado().id)
    //     .subscribe(() => {
    //       this.ruta.navigateByUrl('rondas');
    //     });
    // }
  }

}
