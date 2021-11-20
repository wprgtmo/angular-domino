import { IRonda } from './../../../models/ronda.interface';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { Subscription } from 'rxjs';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { IEvento } from 'src/app/common/models/evento.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ronda-toolbar',
  templateUrl: './ronda-toolbar.component.html',
  styleUrls: ['./ronda-toolbar.component.css'],
})
export class RondaToolbarComponent implements OnInit, OnDestroy {
  @Input() rondas?: IRonda[];
  private subscribeDominoApiService?: Subscription;  
  private subscribeSelectionService?: Subscription;
  private eventoSeleccionado?: IEvento;
  public ronda?: IRonda;

  ronda_activa = 50;
  // (this.rondas==undefined)? 0 : this.rondas[0]?.id

  constructor(
    private seleccionService: SeleccionService,
    private dominoApiService: DominoApiService,
    private ruta: Router
  ) {}

  ngOnInit(): void {    
    this.subscribeSelectionService= this.seleccionService.channelEvent.subscribe((evento)=>{this.eventoSeleccionado = evento;});
  }

  changeRonda(evento: any) {
    this.seleccionService.setRondaIdSeleccionada(evento.value);
  }

  nuevaRonda() {
    if (this.eventoSeleccionado){
      this.subscribeDominoApiService= this.dominoApiService.getRondaNueva((this.eventoSeleccionado?.id).toString()).subscribe((ronda) => {
        this.ronda = ronda.nuevaRonda;
        this.ruta.navigateByUrl('rondas');
      })
    } 
  }

  ngOnDestroy(): void{
    this.subscribeDominoApiService?.unsubscribe();
    this.subscribeSelectionService?.unsubscribe();
  }
}
