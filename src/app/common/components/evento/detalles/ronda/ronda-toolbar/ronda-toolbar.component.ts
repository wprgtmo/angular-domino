import { NombreEstadoF } from './../../../../../shared/auxiliar';
import { EventosService } from 'src/app/state/facade/eventos.service';
import { IRonda } from '../../../../../models/interface/ronda.interface';
import { Component, OnInit, OnDestroy, ChangeDetectionStrategy } from '@angular/core';
import { interval, Observable, Subscription, combineLatest, of } from 'rxjs';
import { map, mergeMap } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as moment from 'moment/moment';
import 'moment-duration-format';

@Component({
  selector: 'app-ronda-toolbar',
  templateUrl: './ronda-toolbar.component.html',
  styleUrls: ['./ronda-toolbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RondaToolbarComponent implements OnInit, OnDestroy {
  rondas?:IRonda[];
  rondaActiva$:  Observable<IRonda | undefined> = new Observable();
  ronda_select?: number;
  subs?: Subscription;
  duracion$: Observable<string>= new Observable();
  private formato: string= "d[d] h[h] m[m] s[s]";




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

    this.duracion$= combineLatest([interval(1000),this.rondaActiva$]).pipe(
      map(([temp, ronda]:any) => { return ((ronda) && (ronda?.estado==="I")) ?
         moment.duration(ronda.duracion + temp, 'seconds').format(this.formato) : moment.duration(ronda.duracion , 'seconds').format(this.formato)
      })
    );

  }

  changeRonda(ronda: any) {
    this.ronda_select= ronda.value;
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
    // this.eventosService.iniciarRonda();
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
