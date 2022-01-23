import { SeleccionService } from './../../services/seleccion.service';
import { Component, Input, OnInit } from '@angular/core';
import { IEvento } from '../../models/evento.interface';
import { Router } from '@angular/router';
import { PathRest } from '../../static/path-rest';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit{

  @Input() evento?: IEvento;
  public fotoEvento = "";

  constructor(private ruta: Router, private seleccionService: SeleccionService) { }

  ngOnInit(){
    this.fotoEvento= PathRest.URL_BASE +  this.evento?.imagen;
  }

  estado(): string {
    return this.seleccionService.nombreEstado(this.evento?.estado);
  }

  seleccionarEvento(): void{
    if (this.evento!==undefined)
      this.seleccionService.setEventoSeleccionado(this.evento);
    this.ruta.navigateByUrl('eventDetails');
  }



}
