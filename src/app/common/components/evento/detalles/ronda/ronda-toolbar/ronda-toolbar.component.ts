import { NombreEstadoF } from './../../../../../shared/auxiliar';
import { EventosService } from 'src/app/state/facade/eventos.service';
import { IRonda } from '../../../../../models/interface/ronda.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import * as moment from 'moment/moment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ronda-toolbar',
  templateUrl: './ronda-toolbar.component.html',
  styleUrls: ['./ronda-toolbar.component.css'],
})
export class RondaToolbarComponent implements OnInit, OnDestroy {
  rondas?:IRonda[];
  rondaActiva$:  Observable<IRonda | undefined> = new Observable();
  ronda_select?: number;
  subs?: Subscription;


  rondas$:  Observable<IRonda[]> = new Observable();

  constructor(private eventosService: EventosService, private ruta: Router) {}

  ngOnInit(): void {
    this.rondas$= this.eventosService.getIdEventoSeleccionado$().pipe(
      map((evento_id) => this.eventosService.cargarRondas(evento_id)),
      mergeMap(() => this.eventosService.getRondas$())
    );

    // this.subs= this.eventosService.getIdEventoSeleccionado$().pipe(
    //   map((evento_id) => this.eventosService.cargarRondas(evento_id)),
    //   mergeMap(() => this.eventosService.getRondas$())
    // ).subscribe((lista_rondas) =>  {
    //   if (lista_rondas.length>0){
    //     this.rondas= lista_rondas;
    //     this.ronda_select= lista_rondas[lista_rondas.length-1].id;
    //   }
    // });

    this.rondaActiva$ = this.eventosService.getRondaSeleccionada$();
  }

  changeRonda(ronda: any) {
    this.ronda_select= ronda.value;

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

  nombreEstado(estado: string): string {
    return NombreEstadoF(estado);
  }

  ngOnDestroy(): void {
    // this.subs?.unsubscribe();

  }

}
