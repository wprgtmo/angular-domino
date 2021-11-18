import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IEvento } from 'src/app/common/models/evento.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';

import { MatTableDataSource } from "@angular/material/table";


@Component({
  templateUrl: './evento-list-page.component.html',
  styleUrls: ['./evento-list-page.component.css']
})
export class EventoListPageComponent implements OnInit, OnDestroy {

  public displayedColumns: string[] = ['id', 'nombre', 'comentario', 'estado', 'fecha_inicio', 'fecha_cierre'];

  private subscribeDominoApiService: Subscription | undefined;
  // public listaEventos: IEvento[] | undefined;

  public dataSource = new MatTableDataSource<IEvento>();

  constructor(private dominoApiService:DominoApiService, private ruta: Router) { }

  ngOnInit(): void {
     this.subscribeDominoApiService= this.dominoApiService.getEventos().subscribe((eventos)=>{
      // this.listaEventos= eventos.eventos;
      this.dataSource.data= eventos.eventos;
    })
  }

  ngOnDestroy(): void{
    this.subscribeDominoApiService?.unsubscribe();
  }

}
