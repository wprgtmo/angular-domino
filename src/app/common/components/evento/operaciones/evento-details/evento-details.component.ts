import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IEvento } from 'src/app/common/models/evento.interface';
import { SeleccionService } from 'src/app/common/services/seleccion.service';

@Component({
  selector: 'app-evento-details',
  templateUrl: './evento-details.component.html',
  styleUrls: ['./evento-details.component.css']
})
export class EventoDetailsComponent implements OnInit {
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

  detalleEstado() {
    switch (this.evento?.estado) {
      case "C": return "Puede crear las parejas y asociar los jugadores"; break;
      case "I": return "Puede asignar las mesas y jugar las rondas"; break;
      case "F": return "Cerrado el evento, puede ver los resultados"; break;
      default: return "Sin estado"; break;
    }
  }

}
