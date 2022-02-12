import { SeleccionService } from './../../services/seleccion.service';
import { Component, Input, OnInit } from '@angular/core';
import { IEvento } from '../../models/interface/evento.interface';
import { Router } from '@angular/router';
import { PathRest } from '../../static/path-rest';
import { Store } from '@ngrx/store';
import { accionSeleccionarEvento } from 'src/app/state/actions/eventos.actions';
import { NombreEstado } from '../../shared/auxiliar';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit{

  @Input() evento?: IEvento;
  public fotoEvento = "";

  constructor(private ruta: Router, private seleccionService: SeleccionService, private store: Store) { }

  ngOnInit(){
    this.fotoEvento= PathRest.URL_BASE +  this.evento?.imagen;
  }

  estado(): string {
    return NombreEstado(this.evento?.estado);
  }

  seleccionarEvento(): void{
    if (this.evento!==undefined){
      this.store.dispatch(accionSeleccionarEvento( { id: this.evento.id } ));
      this.ruta.navigateByUrl('eventDetails');
    }
  }



}
