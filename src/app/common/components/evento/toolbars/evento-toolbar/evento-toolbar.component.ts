import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { EventosService } from '../../../../../state/facade/eventos.service';

@Component({
  selector: 'app-evento-toolbar',
  templateUrl: './evento-toolbar.component.html',
  styleUrls: ['./evento-toolbar.component.css']
})
export class EventoToolbarComponent implements OnInit {
  esTarjeta$: Observable<boolean>= new Observable();

  constructor(private ruta: Router, private eventosService: EventosService) { }

  ngOnInit(): void {
    this.esTarjeta$= this.eventosService.getMostrandoTarjetas$();
 }

  addEvento(): void {
    this.ruta.navigateByUrl('eventNew');
  }

  verComoTarjeta(): void {
    this.eventosService.mostrarEventosComoTarjetas();
    this.ruta.navigateByUrl('eventsCard');
  }

  
  verComoLista(): void {
    this.eventosService.mostrarEventosComoLista();
    this.ruta.navigateByUrl('eventsList');
  }



}
