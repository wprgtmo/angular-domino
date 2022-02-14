import { EventosService } from '../../../../state/facade/eventos.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEvento } from 'src/app/common/models/interface/evento.interface';

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
