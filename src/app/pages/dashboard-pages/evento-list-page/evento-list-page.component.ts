import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IEvento } from 'src/app/common/models/evento.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';

@Component({
  templateUrl: './evento-list-page.component.html',
  styleUrls: ['./evento-list-page.component.css']
})
export class EventoListPageComponent implements OnInit, OnDestroy {


  private subscribeDominoApiService: Subscription | undefined;
  public listaEventos: IEvento[] | undefined;

  constructor(private dominoApiService:DominoApiService, private ruta: Router) { }

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
