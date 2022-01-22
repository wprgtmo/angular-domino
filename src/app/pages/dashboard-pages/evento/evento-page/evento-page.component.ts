import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { LoaderService } from './../../../../common/services/loader.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { IEvento } from 'src/app/common/models/evento.interface';

@Component({
  templateUrl: './evento-page.component.html',
  styleUrls: ['./evento-page.component.css']
})
export class EventoPageComponent implements OnInit, OnDestroy {


  private subsDominoApiService?: Subscription;
  public listaEventos?: IEvento[] ;

  isLoading: Subject<boolean> = this.loaderService.isLoading;

  constructor(private dominoApiService:DominoApiService, private loaderService: LoaderService, private seleccionService: SeleccionService) { }

  ngOnInit(): void {
     this.subsDominoApiService= this.dominoApiService.getEventos().subscribe((eventos)=>{
      this.listaEventos= eventos.eventos;
    })
  }

  ngOnDestroy(): void{
    this.subsDominoApiService?.unsubscribe();
  }
}
