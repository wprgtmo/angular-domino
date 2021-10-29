import { SeleccionService } from './../../services/seleccion.service';
import { Component, Input, OnInit } from '@angular/core';
import { IEvento } from '../../models/evento.interface';
import { Router } from '@angular/router';

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
    this.fotoEvento= 'http://localhost/domino_api/public/assets/img/eventos/' + this.evento?.imagen;
  }

  estado() {
    switch (this.evento?.estado) {
      case "C": return "Creado"; break;
      case "I": return "Iniciado"; break;
      case "F": return "Finalizado"; break;
      default: return "Sin estado"; break;
    }
  }

  seleccionarEvento(){
    if (this.evento!==undefined)
      this.seleccionService.setEventoSeleccionado(this.evento);
    this.ruta.navigateByUrl('eventDetails');

  }



}
