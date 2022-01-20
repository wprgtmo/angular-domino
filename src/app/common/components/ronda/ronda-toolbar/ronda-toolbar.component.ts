import { IRonda } from './../../../models/ronda.interface';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { Subscription } from 'rxjs';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { IEvento } from 'src/app/common/models/evento.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ronda-toolbar',
  templateUrl: './ronda-toolbar.component.html',
  styleUrls: ['./ronda-toolbar.component.css'],
})
export class RondaToolbarComponent implements OnInit, OnDestroy {
  private subscribeDominoApiService?: Subscription;
  private subscribeRondasDominoApiService?: Subscription;

  public rondas?: IRonda[];
  public ronda_activa= 0;

  constructor(
    private seleccionService: SeleccionService,
    private dominoApiService: DominoApiService,
    private ruta: Router
  ) {}

  ngOnInit(): void {
    this.subscribeRondasDominoApiService = this.dominoApiService
      .getRondas(this.seleccionService.getEventoSeleccionado().id)
      .subscribe((rondasRespuesta) => {
        this.rondas = rondasRespuesta.rondas;
        if (this.rondas.length > 0) {
          this.ronda_activa = this.rondas[this.rondas.length-1].id;
          this.seleccionService.setRondaIdSeleccionada(this.ronda_activa);
        }
      });
  }

  changeRonda(evento: any) {
    this.seleccionService.setRondaIdSeleccionada(evento.value);
  }

  iniciarRonda() {
    if (this.seleccionService.getEventoSeleccionado().id != 0) {
      this.subscribeDominoApiService = this.dominoApiService
        .getRondaNueva(this.seleccionService.getEventoSeleccionado().id)
        .subscribe(() => {
          this.ruta.navigateByUrl('rondas');
        });
    }
  }

  ngOnDestroy(): void {
    this.subscribeDominoApiService?.unsubscribe();
    this.subscribeRondasDominoApiService?.unsubscribe();
  }
}
