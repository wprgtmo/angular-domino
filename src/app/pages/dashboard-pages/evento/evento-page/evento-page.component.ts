import { IEvento } from './../../../../common/models/interface/evento.interface';
import { EventosService } from '../../../../state/facade/eventos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  templateUrl: './evento-page.component.html',
  styleUrls: ['./evento-page.component.css']
})
export class EventoPageComponent implements OnInit {


  listaEventos$: Observable<IEvento[]> = new Observable() ;

  constructor(private eventosService: EventosService) {}

  ngOnInit(): void {
    this.eventosService.mostrarEventosComoTarjetas();
    this.eventosService.cargarEventos();
    this.listaEventos$= this.eventosService.getEventos$();
  }

}
