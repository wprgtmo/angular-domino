import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { IEvento } from 'src/app/common/models/evento.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';

@Component({
  selector: 'app-evento-details-toolbar',
  templateUrl: './evento-details-toolbar.component.html',
  styleUrls: ['./evento-details-toolbar.component.css'],
})
export class EventoDetailsToolbarComponent implements OnInit {
  private subscribeSelectionService: Subscription | undefined;
  eventoSeleccionado: IEvento | undefined;
  @Input() isLista?: number;

  view=[{
    icono:"view_list_white",
    tooltip:"Ver eventos como lista",
    url:"eventsList"
  },{
    icono:"view_module_white",
    tooltip:"Ver eventos como tarjetas",
    url:"eventsCard"
  }]

  constructor(private ruta: Router, private seleccionService: SeleccionService, private dominoApiService: DominoApiService) { }

  ngOnInit(): void {
    this.subscribeSelectionService =
      this.seleccionService.channelEvent.subscribe((evento) => {
        this.eventoSeleccionado = evento;
      });
  }

  viewEvent(): void {
    this.ruta.navigateByUrl(this.view[this.mostrandoLista()].url);
}

  ngOnDestroy(): void {
    this.subscribeSelectionService?.unsubscribe();
  }

  mostrarIniciar() {
    return this.eventoSeleccionado?.estado == 'C';
  }

  mostrarFinalizar() {
    return this.eventoSeleccionado?.estado == 'I';
  }

  mostrarEliminar() {
    return this.eventoSeleccionado?.estado == 'F';
  }

  estado() {
    switch (this.eventoSeleccionado?.estado) {
      case 'C':
        return 'Creado';
        break;
      case 'I':
        return 'Iniciado';
        break;
      case 'F':
        return 'Finalizado';
        break;
      default:
        return 'Sin estado';
        break;
    }
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
    return this.isLista == undefined || this.isLista == 0 ? 0 : 1;
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
