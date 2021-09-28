import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { IEvento } from 'src/app/common/models/evento.interface';

@Component({
  templateUrl: './evento-page.component.html',
  styleUrls: ['./evento-page.component.css']
})
export class EventoPageComponent implements OnInit, OnDestroy {


  private subscribeDominoApiService: Subscription | undefined;
  public listaEventos: IEvento[] | undefined;

  constructor(private dominoApiService:DominoApiService) { }

  onClick(): void {
    alert('Okkkkk');
  }

  ngOnInit(): void {
     this.subscribeDominoApiService= this.dominoApiService.getEventos().subscribe((eventos)=>{
      console.log(eventos);
      this.listaEventos= eventos.eventos;
    })
  }

  ngOnDestroy(): void{
    this.subscribeDominoApiService?.unsubscribe();
  }
}
