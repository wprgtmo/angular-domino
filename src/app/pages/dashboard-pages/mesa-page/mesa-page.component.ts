import { IMesa } from './../../../common/models/mesa.interface';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEvento } from 'src/app/common/models/evento.interface';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { DominoApiService } from 'src/app/common/services/domino-api.service';

@Component({
  templateUrl: './mesa-page.component.html',
  styleUrls: ['./mesa-page.component.css']
})
export class MesaPageComponent implements OnInit {

  private subscribeMesasDominoApiService: Subscription | undefined;
  private subscribeSelectionService: Subscription | undefined;
  public listaMesas?: IMesa[];
  private eventoSeleccionado?: IEvento;

  constructor(private seleccionService: SeleccionService, private dominoApiService: DominoApiService) { }

  ngOnInit(): void {
    this.subscribeSelectionService= this.seleccionService.channelEvent.subscribe((evento)=>{this.eventoSeleccionado = evento;});

    let evento_seleccionado= (this.eventoSeleccionado === undefined) ? 0 : this.eventoSeleccionado?.id;

    this.subscribeMesasDominoApiService= this.dominoApiService.getMesas(evento_seleccionado.toString() ).subscribe((mesaRespuesta) => {
      this.listaMesas = mesaRespuesta.mesas.sort((m1, m2)=> m1.numero-m2.numero);
    })

  }

 ngOnDestroy(): void{
   this.subscribeMesasDominoApiService?.unsubscribe();
   this.subscribeSelectionService?.unsubscribe();
 }
}
