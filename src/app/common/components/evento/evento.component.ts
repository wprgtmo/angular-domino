import { Component, Input, OnInit } from '@angular/core';
import { IEvento } from '../../models/interface/evento.interface';
import { Router } from '@angular/router';
import { PathRest } from '../../static/path-rest';
import { accionSeleccionarEvento } from 'src/app/state/actions/eventos.actions';
import { NombreEstado } from '../../shared/auxiliar';
import { EventosService } from 'src/app/state/facade/eventos.service';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit{

  @Input() evento?: IEvento;
  public fotoEvento = "";

  constructor(private ruta: Router, private eventosService: EventosService) { }

  ngOnInit(){
    this.fotoEvento= PathRest.URL_IMG_EVENTOS +  this.evento?.imagen;
  }

  estado(): string {
    return NombreEstado(this.evento?.estado);
  }

  seleccionarEvento(): void{
    if (this.evento!==undefined){
      this.eventosService.seleccionarEvento( this.evento.id );
      this.ruta.navigateByUrl('eventDetails');
    }
  }



}
