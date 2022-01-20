import { IBoletaCompleta } from '../../../../common/models/boleta-completa.interface';
import { IRonda } from '../../../../common/models/ronda.interface';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEvento } from 'src/app/common/models/evento.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import * as moment from 'moment/moment';

@Component({
  templateUrl: './ronda-page.component.html',
  styleUrls: ['./ronda-page.component.css'],
})
export class RondaPageComponent implements OnInit {
  private subscribeBoletasDominoApiService: Subscription | undefined;
  private subscribeRondaSelectionService: Subscription | undefined;
  public listaBoletas?: IBoletaCompleta[];
  public rondaActiva?: IRonda;
  public rondaSeleccionadaId?: number;

  constructor(private seleccionService: SeleccionService, private dominoApiService: DominoApiService) { }

  ngOnInit(): void {
    moment.locale('es-ES');
    this.subscribeRondaSelectionService = this.seleccionService.channelRonda.subscribe((ronda_id) => {
          this.actualizarBoletas(ronda_id);
      });
  }

  actualizarBoletas(ronda_id: number) {
    this.subscribeBoletasDominoApiService = this.dominoApiService
      .getBoletasCompleta(this.seleccionService.getEventoSeleccionado().id, ronda_id)
      .subscribe((boletaRespuesta) => {
        console.log(boletaRespuesta);
        if (boletaRespuesta.boletas.length>0){
          this.listaBoletas = boletaRespuesta.boletas.sort(
            (b1, b2) => b1.mesa_id - b2.mesa_id
          );
          this.rondaActiva= this.listaBoletas[0].ronda;
          this.duracionRonda();
        }
      });
  }

  ngOnDestroy(): void {
    this.subscribeBoletasDominoApiService?.unsubscribe();
    this.subscribeRondaSelectionService?.unsubscribe();
  }

  duracionRonda(): string {
    let tiempo = moment.duration(this.rondaActiva?.duracion, 'seconds');

    return tiempo.humanize().toString();
  }
}
