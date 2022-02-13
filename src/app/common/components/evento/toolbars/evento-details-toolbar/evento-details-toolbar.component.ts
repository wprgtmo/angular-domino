import { EventosService } from 'src/app/state/facade/eventos.service';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IEvento } from 'src/app/common/models/interface/evento.interface';
import { Subscription } from 'rxjs';
import { NombreEstado } from 'src/app/common/shared/auxiliar';

@Component({
  selector: 'app-evento-details-toolbar',
  templateUrl: './evento-details-toolbar.component.html',
  styleUrls: ['./evento-details-toolbar.component.css'],
})
export class EventoDetailsToolbarComponent implements OnInit, OnDestroy {
  subs?: Subscription;
  subsIsCard?: Subscription;
  eventoSeleccionado?:IEvento;
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

  constructor(private ruta: Router, private eventosService: EventosService) { }

  ngOnInit(): void {
    this.subs= this.eventosService.getEventoSeleccionado$().subscribe((evento) => this.eventoSeleccionado= evento);
    this.subsIsCard= this.eventosService.getMostrandoTarjetas$().subscribe((esTarjeta) => this.isCard= esTarjeta);
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
    this.subsIsCard?.unsubscribe();
  }

  viewEvent(): void {
    const esTarjeta= this.mostrandoTarjetas();
    this.mostrandoTarjetas()?
      this.eventosService.mostrarEventosComoLista():
      this.eventosService.mostrarEventosComoTarjetas();
    this.ruta.navigateByUrl(this.view[esTarjeta].url);
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
   return NombreEstado(this.eventoSeleccionado?.estado);
  }

  eventos() {
    if (this.mostrandoTarjetas()) this.ruta.navigateByUrl('eventsCard');
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

  estadisticas() {
    this.ruta.navigateByUrl('estadisticaEvento');
  }

  premiados() {
    this.ruta.navigateByUrl('premiados');
  }

  mostrandoTarjetas(): number {
    return this.isCard? 1 : 0;
  }

  iniciarEvento() {
    this.eventosService.iniciarEvento(this.eventoSeleccionado!.id);
    this.ruta.navigateByUrl('eventsCard');
  }

  finalizarEvento() {
    this.eventosService.finalizarEvento(this.eventoSeleccionado!.id);
    this.ruta.navigateByUrl('eventsCard');
  }

  eliminarEvento() {
    this.eventosService.eliminarEvento(this.eventoSeleccionado!.id);
    this.ruta.navigateByUrl('eventsCard');
  }
}
