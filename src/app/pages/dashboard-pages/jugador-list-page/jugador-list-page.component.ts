import { IJugador } from './../../../common/models/jugador.interface';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { MatTableDataSource } from "@angular/material/table";
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  templateUrl: './jugador-list-page.component.html',
  styleUrls: ['./jugador-list-page.component.css']
})
export class JugadorListPageComponent implements OnInit, OnDestroy {

  public displayedColumns: string[] = ['id', 'nombre', 'comentario', 'nro_identidad', 'alias', 'fecha_nacimiento'];

  private subscribeDominoApiService: Subscription | undefined;

  public dataSource = new MatTableDataSource<IJugador>();

  constructor(private dominoApiService:DominoApiService) { }


  drop(event: CdkDragDrop<string[]>){
      moveItemInArray(this.displayedColumns, event.previousIndex, event.currentIndex);
  }

  ngOnInit(): void {
     this.subscribeDominoApiService= this.dominoApiService.getJugadores().subscribe((jugadores)=>{
      this.dataSource.data= jugadores.jugadores;
    })
  }

  ngOnDestroy(): void{
    this.subscribeDominoApiService?.unsubscribe();
  }

}
