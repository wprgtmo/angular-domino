import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IEvento } from 'src/app/common/models/interface/evento.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';

import { MatTableDataSource } from "@angular/material/table";
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { listaEventos } from 'src/app/state/selectors/eventos.selectors';


@Component({
  templateUrl: './evento-list-page.component.html',
  styleUrls: ['./evento-list-page.component.css']
})
export class EventoListPageComponent implements OnInit, OnDestroy {

  public displayedColumns: string[] = ['id', 'nombre', 'comentario', 'estado', 'fecha_inicio', 'fecha_cierre'];

  private subscribeDominoApiService?: Subscription;

  clickedRows = new Set<IEvento>();

  public dataSource = new MatTableDataSource<IEvento>();

  constructor(private store:Store<AppState>, private ruta: Router, public seleccionService: SeleccionService) { }

  ngOnInit(): void {
     this.subscribeDominoApiService= this.store.select(listaEventos).subscribe((eventos)=>{
      this.dataSource.data= eventos.slice();
    })
  }

  ngOnDestroy(): void{
    this.subscribeDominoApiService?.unsubscribe();
  }

  seleccionarEvento(evento: IEvento){
    if (evento!==undefined){
      this.seleccionService.setEventoSeleccionado(evento);
      this.ruta.navigateByUrl('eventDetails');
    }
  }

}
