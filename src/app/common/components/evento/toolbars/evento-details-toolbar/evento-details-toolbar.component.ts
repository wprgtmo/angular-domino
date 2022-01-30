import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { IEvento } from 'src/app/common/models/interface/evento.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';

@Component({
  selector: 'app-evento-details-toolbar',
  templateUrl: './evento-details-toolbar.component.html',
  styleUrls: ['./evento-details-toolbar.component.css'],
})
export class EventoDetailsToolbarComponent implements OnInit {
  private subscribeSelectionService?: Subscription;
  private subsSelectionServiceIsCard?: Subscription;
  eventoSeleccionado?: IEvento;
  isCard?: boolean;

  view=[{
    icono:"view_module_white",
    tooltip:"Ver eventos como tarjetas",
    url:"eventsCard"
    },{
    icono:"view_list_white",
    tooltip:"Ver eventos como lista",
    url:"eventsList"
  }]

  constructor(private ruta: Router, private seleccionService: SeleccionService, private dominoApiService: DominoApiService) { }

  ngOnInit(): void {
    this.subscribeSelectionService =
      this.seleccionService.channelEvent.subscribe((evento) => {
        this.eventoSeleccionado = evento;
      });
      this.subsSelectionServiceIsCard= this.seleccionService.channelIsCard.subscribe((IsCard) => {
        this.isCard= IsCard;
      })
  }

  viewEvent(): void {
    this.ruta.navigateByUrl(this.view[this.mostrandoLista()].url);
}

  ngOnDestroy(): void {
    this.subscribeSelectionService?.unsubscribe();
    this.subsSelectionServiceIsCard?.unsubscribe();
  }

  mostrarIniciar() {
    return this.estado() == 'Creado';
  }

  mostrarFinalizar() {
    return this.estado() == 'Iniciado';
  }

  mostrarEliminar() {
    return this.estado() == 'Finalizado';
  }

  estado() {
   return this.seleccionService.nombreEstado(this.eventoSeleccionado?.estado);
  }

  eventos() {
    if (this.mostrandoLista()) this.ruta.navigateByUrl('eventsCard');
    else this.ruta.navigateByUrl('eventsList');
  }

  rondas() {
    this.ruta.navigateByUrl('rondas');
  }

  mesas() {
    this.ruta.navigateByUrl('mesas');
  }

  parejas() {
    this.ruta.navigateByUrl('parejas');
  }

  mostrandoLista(): number {
    return this.isCard? 1 : 0;
  }

  iniciarEvento() {
    this.dominoApiService
      .iniciarEvento(this.eventoSeleccionado!.id.toString())
      .subscribe((datos) => {
        console.log(datos);
        this.ruta.navigateByUrl('eventsCard');
      });
  }

  finalizarEvento() {
    this.dominoApiService
      .finalizarEvento(this.eventoSeleccionado!.id.toString())
      .subscribe((datos) => {
        console.log(datos);
        this.ruta.navigateByUrl('eventsCard');
      });
  }

  eliminarEvento() {
    this.dominoApiService
      .delEvento(this.eventoSeleccionado!.id.toString())
      .subscribe((datos) => {
        console.log(datos);
        this.ruta.navigateByUrl('eventsCard');
      });
  }
}
