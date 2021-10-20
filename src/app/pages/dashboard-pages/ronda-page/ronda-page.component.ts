import { IRonda } from './../../../common/models/ronda.interface';
import { IBoleta } from './../../../common/models/boleta.interface';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IEvento } from 'src/app/common/models/evento.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { SeleccionService } from 'src/app/common/services/seleccion.service';

@Component({
  templateUrl: './ronda-page.component.html',
  styleUrls: ['./ronda-page.component.css']
})
export class RondaPageComponent implements OnInit {

  private subscribeRondasDominoApiService: Subscription | undefined;
  private subscribeBoletasDominoApiService: Subscription | undefined;
  private subscribeSelectionService: Subscription | undefined;
  public listaRondas?: IRonda[];
  public listaBoletas?: IBoleta[];
  private eventoSeleccionado?: IEvento;
  public rondaSeleccionada?: IRonda;

  constructor(private seleccionService: SeleccionService, private dominoApiService: DominoApiService) { }

  ngOnInit(): void {
    this.subscribeSelectionService= this.seleccionService.channel.subscribe((evento)=>{this.eventoSeleccionado = evento;});

    let evento_seleccionado= (this.eventoSeleccionado === undefined) ? 0 : this.eventoSeleccionado?.id;

    this.subscribeRondasDominoApiService= this.dominoApiService.getRondas(evento_seleccionado.toString()).subscribe((rondasRespuesta) => {
      console.log(rondasRespuesta);
      this.listaRondas = rondasRespuesta.rondas;
      this.rondaSeleccionada = this.listaRondas.find(ronda=>ronda.cerrada==false);
      console.log(this.rondaSeleccionada);
    })
    let ronda_id= (this.rondaSeleccionada!==undefined)? this.rondaSeleccionada?.id.toString(): "";
    this.subscribeBoletasDominoApiService= this.dominoApiService.getBoletas(evento_seleccionado.toString(), ronda_id ).subscribe((boletaRespuesta) => {
      console.log(boletaRespuesta);
      this.listaBoletas = boletaRespuesta.boletas;
    })

  }

 ngOnDestroy(): void{
   this.subscribeRondasDominoApiService?.unsubscribe();
   this.subscribeBoletasDominoApiService?.unsubscribe();
   this.subscribeSelectionService?.unsubscribe();
 }
}
