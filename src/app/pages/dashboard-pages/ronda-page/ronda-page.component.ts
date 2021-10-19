import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEvento } from 'src/app/common/models/evento.interface';
import { IRondaNuevaRespuesta } from 'src/app/common/models/ronda-nueva-respuesta.interface';
import { IRonda } from 'src/app/common/models/ronda.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { SeleccionService } from 'src/app/common/services/seleccion.service';

@Component({
  templateUrl: './ronda-page.component.html',
  styleUrls: ['./ronda-page.component.css']
})
export class RondaPageComponent implements OnInit {

  private subscribeDominoApiService: Subscription | undefined;
  private subscribeSelectionService: Subscription | undefined;
  private eventoSeleccionado: IEvento | undefined;
  public listaRondas: IRonda[] | undefined;

  constructor(private seleccionService: SeleccionService, private dominoApiService: DominoApiService) { }

  ngOnInit(): void {
    this.subscribeSelectionService= this.seleccionService.channel.subscribe((evento)=>{this.eventoSeleccionado = evento;});
    let evento_seleccionado= (this.eventoSeleccionado === undefined) ? 0 : this.eventoSeleccionado?.id;
    this.subscribeDominoApiService= this.dominoApiService.getRondas(evento_seleccionado.toString()).subscribe((rondasRespuesta) => {
      console.log(rondasRespuesta);
      this.listaRondas = rondasRespuesta.rondas;
    })
  }


 ngOnDestroy(): void{
   this.subscribeDominoApiService?.unsubscribe();
   this.subscribeSelectionService?.unsubscribe();
 }
}
