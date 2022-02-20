import { selectorArbitros } from './../../../../state/selectors/arbitros.selectors';
import { ArbitrosService } from './../../../../state/facade/arbitros.service';
import { IArbitro } from 'src/app/common/models/interface/arbitro.interface';
import { Component, OnInit } from '@angular/core';

import { MatTableDataSource } from "@angular/material/table";
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { Subscription, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { EventosService } from 'src/app/state/facade/eventos.service';
import { NombreEstado } from 'src/app/common/shared/auxiliar';

@Component({
  templateUrl: './arbitro-list-pages.component.html',
  styleUrls: ['./arbitro-list-pages.component.css']
})
export class ArbitroListPagesComponent implements OnInit {

  public displayedColumns: string[] = ['id', 'nombre', 'comentario', 'nro_identidad', 'alias', 'fecha_nacimiento'];

  clickedRows = new Set<IArbitro>();

  dataSource = new MatTableDataSource<IArbitro>();

  arbitros$: Observable<IArbitro[]>= new Observable();

  private subs?: Subscription;

  nombreEstado = NombreEstado;

  constructor(private ruta: Router, private arbitrosService: ArbitrosService) { }

  ngOnInit(): void {
    this.subs= this.arbitrosService.getArbitros$().subscribe((arbitros)=>{
     this.dataSource.data= arbitros;
   })
 }

 ngOnDestroy(): void{
   this.subs?.unsubscribe();
 }
  seleccionarArbitro(arbitro: IArbitro){
    if (arbitro!==undefined){
      this.arbitrosService.SeleccionarArbitro(arbitro.id);
      this.ruta.navigateByUrl('arbitroDetails');
    }
  }

}
