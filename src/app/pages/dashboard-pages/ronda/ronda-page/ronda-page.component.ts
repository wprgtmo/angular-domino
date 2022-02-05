import { IBoletaCompleta } from '../../../../common/models/interface/boleta-completa.interface';
import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import * as moment from 'moment/moment';
import { IRonda } from 'src/app/common/models/interface/ronda.interface';

@Component({
  templateUrl: './ronda-page.component.html',
  styleUrls: ['./ronda-page.component.css'],
})
export class RondaPageComponent implements OnInit {
  private subscribeBoletasDominoApiService?: Subscription;
  private subscribeRondaSelectionService?: Subscription;
  private recargar?: Subscription;
  public listaBoletas?: IBoletaCompleta[];
  public rondaActiva?: IRonda;
  public rondaSeleccionadaId?: number;
  private ronda_id = 0;

  constructor(
    private seleccionService: SeleccionService,
    private dominoApiService: DominoApiService
  ) {}

  ngOnInit(): void {
    moment.locale('es-ES');
    this.subscribeRondaSelectionService =
      this.seleccionService.channelRonda.subscribe((ronda_id) => {
        this.ronda_id = ronda_id;
      });

    // this.recargar = interval(3000).subscribe(() => {
    //   this.actualizarBoletas();
    // });
  }

  actualizarBoletas() {
    this.subscribeBoletasDominoApiService = this.dominoApiService
      .getBoletasCompleta(
        this.seleccionService.getEventoSeleccionado().id,
        this.ronda_id
      )
      .subscribe((boletaRespuesta) => {
        if (this.ronda_id != 0) {
          console.log(boletaRespuesta);
          if (boletaRespuesta.boletas.length > 0) {
            this.listaBoletas = boletaRespuesta.boletas.sort(
              (b1, b2) => b1.mesa_id - b2.mesa_id
            );
            this.rondaActiva = this.listaBoletas[0].ronda;
            this.duracionRonda();
          }
        }
      });
  }

  ngOnDestroy(): void {
    this.subscribeBoletasDominoApiService?.unsubscribe();
    this.subscribeRondaSelectionService?.unsubscribe();
    this.recargar?.unsubscribe();
  }

  duracionRonda(): string {
    let tiempo = moment.duration(this.rondaActiva?.duracion, 'seconds');

    return tiempo.humanize().toString();
  }
}
