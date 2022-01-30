import { IRonda } from './../../models/interface/ronda.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEvento } from '../../models/interface/evento.interface';
import { DominoApiService } from '../../services/domino-api.service';
import { SeleccionService } from '../../services/seleccion.service';

@Component({
  selector: 'app-ronda',
  templateUrl: './ronda.component.html',
  styleUrls: ['./ronda.component.css']
})
export class RondaComponent implements OnInit {

  @Input() ronda?: IRonda;

  private subscribeDominoApiService: Subscription | undefined;
  private subscribeSelectionService: Subscription | undefined;
  private eventoSeleccionado: IEvento | undefined;

  constructor(private seleccionService: SeleccionService, private dominoApiService: DominoApiService) { }

  ngOnInit(): void {
    this.subscribeSelectionService= this.seleccionService.channelEvent.subscribe((evento)=>{this.eventoSeleccionado = evento;});
    // this.subscribeDominoApiService= this.dominoApiService.getRondaNueva(((this.eventoSeleccionado === undefined) ? "0" : this.eventoSeleccionado?.id).toString()).subscribe((ronda) => {
    //   console.log(ronda);
    //   this.ronda = ronda;
    // })

  }


 ngOnDestroy(): void{
   this.subscribeDominoApiService?.unsubscribe();
   this.subscribeSelectionService?.unsubscribe();
 }

};

