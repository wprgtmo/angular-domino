import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IEvento } from 'src/app/common/models/interface/evento.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';

import { MatTableDataSource } from "@angular/material/table";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { listaEventos } from 'src/app/state/selectors/eventos.selectors';
import { accionSeleccionarEvento } from 'src/app/state/actions/eventos.actions';
import { NombreEstado } from 'src/app/common/auxiliar/auxiliar';
import { EventosService } from 'src/app/state/facade/eventos.service';


@Component({
  templateUrl: './evento-list-page.component.html',
  styleUrls: ['./evento-list-page.component.css']
})
export class EventoListPageComponent implements OnInit, OnDestroy {

  public displayedColumns: string[] = ['id', 'nombre', 'comentario', 'estado', 'fecha_inicio', 'fecha_cierre'];

  private subs?: Subscription;

  clickedRows = new Set<IEvento>();

  dataSource = new MatTableDataSource<IEvento>();

  nombreEstado = NombreEstado;

  constructor(private store:Store<AppState>, private ruta: Router, private eventosDispachService: EventosService) { }

  ngOnInit(): void {
    this.eventosDispachService.mostrarEventosComoLista();
     this.subs= this.store.select(listaEventos).subscribe((eventos)=>{
      this.dataSource.data= eventos.slice();
    })
  }

  ngOnDestroy(): void{
    this.subs?.unsubscribe();
  }

  seleccionarEvento(evento: IEvento){
    if (evento!==undefined){
      this.eventosDispachService.seleccionarEvento(evento.id);
      this.ruta.navigateByUrl('eventDetails');
    }
  }

}
