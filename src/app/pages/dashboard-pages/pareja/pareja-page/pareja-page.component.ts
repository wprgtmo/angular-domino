import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { IEvento } from 'src/app/common/models/interface/evento.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { IPareja } from 'src/app/common/models/interface/pareja.interface';

@Component({
  templateUrl: './pareja-page.component.html',
  styleUrls: ['./pareja-page.component.css']
})
export class ParejaPageComponent implements OnInit {

  private subscribeDominoApiService: Subscription | undefined;
  private subscribeSelectionService: Subscription | undefined;
  public listaParejas?: IPareja[];
  private eventoSeleccionado?: IEvento;

  constructor(private seleccionService: SeleccionService, private dominoApiService: DominoApiService) { }

  ngOnInit(): void {
    this.subscribeSelectionService= this.seleccionService.channelEvent.subscribe((evento)=>{this.eventoSeleccionado = evento;});

    let evento_seleccionado= (this.eventoSeleccionado === undefined) ? 0 : this.eventoSeleccionado?.id;

    this.subscribeDominoApiService= this.dominoApiService.getParejas(evento_seleccionado.toString()).subscribe((parejasRespuesta) => {
      this.listaParejas = parejasRespuesta.parejas; //.sort((p1, p2)=> p1.id-p2.id)
    })

  }

 ngOnDestroy(): void{
   this.subscribeDominoApiService?.unsubscribe();
   this.subscribeSelectionService?.unsubscribe();
 }
}
