import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from "@angular/material/table";
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IEvento } from 'src/app/common/models/interface/evento.interface';
import { IPareja } from 'src/app/common/models/interface/pareja.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { SeleccionService } from 'src/app/common/services/seleccion.service';

@Component({
  templateUrl: './pareja-list-page.component.html',
  styleUrls: ['./pareja-list-page.component.css']
})
export class ParejaListPageComponent implements OnInit, OnDestroy {
  public displayedColumns: string[] = ['nombre', 'jugador1', 'jugador2'];

  private subscribeDominoApiService: Subscription | undefined;
  private subscribeSelectionService: Subscription | undefined;
  public eventoSeleccionado: IEvento | undefined;

  public dataSource = new MatTableDataSource<IPareja>();

  constructor(private dominoApiService: DominoApiService, private seleccionService: SeleccionService, private ruta: Router) { }

  ngOnInit(): void {
    this.subscribeSelectionService = this.seleccionService.channelEvent.subscribe((evento) => {
      this.eventoSeleccionado = evento;
    });
    let evento_seleccionado = this.eventoSeleccionado === undefined ? 0 : this.eventoSeleccionado?.id;
    console.log("evento: ", evento_seleccionado);

    this.subscribeDominoApiService= this.dominoApiService.getParejas(evento_seleccionado.toString()).subscribe((parejas)=>{
      console.log(parejas);

      this.dataSource.data= parejas.parejas;
    })
  }

  ngOnDestroy(): void{
    this.subscribeSelectionService?.unsubscribe();
    this.subscribeDominoApiService?.unsubscribe();
  }

}
