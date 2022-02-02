import { EventosDispachService } from 'src/app/state/dispatch/eventos.dispatch';
import { Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { IEvento } from 'src/app/common/models/interface/evento.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { NombreEstado } from 'src/app/common/auxiliar/auxiliar';
import { Subscription } from 'rxjs';
import { Store } from '@ngrx/store';
import { esTarjeta, eventoSeleccionado } from 'src/app/state/selectors/eventos.selectors';
import { AppState } from 'src/app/state/app.state';

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

  constructor(private ruta: Router, private store: Store<AppState>, private eventosDispachService: EventosDispachService) { }

  ngOnInit(): void {
    this.subs= this.store.select(eventoSeleccionado).subscribe((evento) => this.eventoSeleccionado= evento);
    this.subsIsCard= this.store.select(esTarjeta).subscribe((esTarjeta) => this.isCard= esTarjeta);
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
    this.subsIsCard?.unsubscribe();
  }
  
  viewEvent(): void {   
    const esTarjeta= this.mostrandoTarjetas();  
    this.mostrandoTarjetas()?
      this.eventosDispachService.mostrarEventosComoLista(): 
      this.eventosDispachService.mostrarEventosComoTarjetas();
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

  mostrandoTarjetas(): number {
    return this.isCard? 1 : 0;
  }

  iniciarEvento() {
    this.eventosDispachService.iniciarEvento(this.eventoSeleccionado!.id);
    this.ruta.navigateByUrl('eventsCard');
  }
    
  finalizarEvento() {
    this.eventosDispachService.finalizarEvento(this.eventoSeleccionado!.id);
    this.ruta.navigateByUrl('eventsCard');
  }

  eliminarEvento() {
    this.eventosDispachService.eliminarEvento(this.eventoSeleccionado!.id);
    this.ruta.navigateByUrl('eventsCard');
  }
}
