import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IEvento } from 'src/app/common/models/evento.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';

import { MatTableDataSource } from "@angular/material/table";
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';


@Component({
  templateUrl: './evento-list-page.component.html',
  styleUrls: ['./evento-list-page.component.css']
})
export class EventoListPageComponent implements OnInit, OnDestroy {

  public displayedColumns: string[] = ['id', 'nombre', 'comentario', 'estado', 'fecha_inicio', 'fecha_cierre'];

  private subscribeDominoApiService: Subscription | undefined;

  clickedRows = new Set<IEvento>();

  public dataSource = new MatTableDataSource<IEvento>();

  constructor(private dominoApiService:DominoApiService, private ruta: Router, private seleccionService: SeleccionService) { }

  ngOnInit(): void {
     this.subscribeDominoApiService= this.dominoApiService.getEventos().subscribe((eventos)=>{
      this.dataSource.data= eventos.eventos;
    })
  }

  ngOnDestroy(): void{
    this.subscribeDominoApiService?.unsubscribe();
  }

  drop(event: CdkDragDrop<string[]>){
    moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
}

  seleccionarEvento(evento: IEvento){
    if (evento!==undefined)
    this.seleccionService.setEventoSeleccionado(evento);
    this.ruta.navigate(['eventDetails'], { queryParams: {isLista: 0}} );
  }

}
