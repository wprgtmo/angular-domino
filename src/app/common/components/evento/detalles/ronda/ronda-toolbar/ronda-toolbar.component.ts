import { EventosService } from 'src/app/state/facade/eventos.service';
import { IRonda } from '../../../../../models/interface/ronda.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import * as moment from 'moment/moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ronda-toolbar',
  templateUrl: './ronda-toolbar.component.html',
  styleUrls: ['./ronda-toolbar.component.css'],
})
export class RondaToolbarComponent implements OnInit {
  rondas$: Observable<IRonda[]> = new Observable();
  rondaActiva$:  Observable<IRonda | undefined> = new Observable();

  constructor(private eventosService: EventosService, private ruta: Router) {}

  ngOnInit(): void {
    this.eventosService.seleccionarRonda(0);
    this.rondas$ = this.eventosService.getIdEventoSeleccionado$().pipe(
      map((evento_id) => this.eventosService.cargarRondas(evento_id)),
      mergeMap(() => this.eventosService.getRondas$())
      );
    this.rondaActiva$ = this.eventosService.getRondaSeleccionada$();
  }

  changeRonda(ronda: any) {
    if (ronda) this.eventosService.seleccionarRonda(ronda.value);
  }

  duracionRonda(duracion: number): string {
    let tiempo = moment.duration(duracion, 'seconds');
    return tiempo.humanize().toString();
  }

  iniciarRonda() {



    // if (this.seleccionService.getEventoSeleccionado().id != 0) {
    //   this.subscribeDominoApiService = this.dominoApiService
    //     .getRondaNueva(this.seleccionService.getEventoSeleccionado().id)
    //     .subscribe(() => {
    //       this.ruta.navigateByUrl('rondas');
    //     });
    // }
    this.ruta.navigateByUrl('rondas');
  }

  verResultados() {
    // if (this.seleccionService.getEventoSeleccionado().id != 0) {
    //   this.subscribeDominoApiService = this.dominoApiService
    //     .getRondaNueva(this.seleccionService.getEventoSeleccionado().id)
    //     .subscribe(() => {
    //       this.ruta.navigateByUrl('rondas');
    //     });
    // }
    this.ruta.navigateByUrl('rondaResultados');
  }

}
