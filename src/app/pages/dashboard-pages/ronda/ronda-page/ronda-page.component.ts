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
  private subscribeRondasDominoApiService: Subscription | undefined;
  private subscribeBoletasDominoApiService: Subscription | undefined;
  private subscribeEventoSelectionService: Subscription | undefined;
  private subscribeRondaSelectionService: Subscription | undefined;
  public listaRondas?: IRonda[];
  public listaBoletas?: IBoletaCompleta[];
  private eventoSeleccionado?: IEvento;
  public rondaActiva?: IRonda;
  public rondaSeleccionadaId?: number;

  constructor(
    private seleccionService: SeleccionService,
    private dominoApiService: DominoApiService
  ) {}

  ngOnInit(): void {
    moment.locale('es-ES');
    this.subscribeEventoSelectionService =
      this.seleccionService.channelEvent.subscribe((evento) => {
        this.eventoSeleccionado = evento;
      });

    let evento_seleccionado =
      this.eventoSeleccionado === undefined ? 0 : this.eventoSeleccionado?.id;

    this.subscribeRondasDominoApiService = this.dominoApiService
      .getRondas(evento_seleccionado.toString())
      .subscribe((rondasRespuesta) => {
        this.listaRondas = rondasRespuesta.rondas;
        this.rondaActiva = this.listaRondas.find(
          (ronda) => ronda.cerrada == false
        );

        let ronda_id =
          this.rondaActiva !== undefined ? this.rondaActiva?.id : -1;
        this.rondaSeleccionadaId = ronda_id;
        this.seleccionService.setRondaIdSeleccionada(ronda_id);
      });

    this.subscribeRondaSelectionService =
      this.seleccionService.channelRonda.subscribe((ronda_id) => {
        if (ronda_id.toString() != '[object Object]') {
          console.log('Ronda seleccionada en el toolbar ', ronda_id);
          this.rondaSeleccionadaId = ronda_id;
          this.rondaActiva = this.listaRondas?.find(
            (ronda) => ronda.id == this.rondaSeleccionadaId
          );
          this.actualizarBoletas(ronda_id);
        }
      });
  }

  actualizarBoletas(ronda_id: number) {
    let evento_seleccionado =
      this.eventoSeleccionado === undefined ? 0 : this.eventoSeleccionado?.id;
    this.subscribeBoletasDominoApiService = this.dominoApiService
      .getBoletasCompleta(evento_seleccionado.toString(), ronda_id.toString())
      .subscribe((boletaRespuesta) => {
        this.listaBoletas = boletaRespuesta.boletas.sort(
          (b1, b2) => b1.mesa_id - b2.mesa_id
        );
        this.duracionRonda();
      });
  }

  ngOnDestroy(): void {
    this.subscribeRondasDominoApiService?.unsubscribe();
    this.subscribeBoletasDominoApiService?.unsubscribe();
    this.subscribeEventoSelectionService?.unsubscribe();
    this.subscribeRondaSelectionService?.unsubscribe();
  }

  duracionRonda(): string {
    let tiempo= moment.duration(this.rondaActiva!.duracion, 'seconds');

    return tiempo.humanize().toString()
  }
}
