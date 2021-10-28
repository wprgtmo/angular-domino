import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IEvento } from 'src/app/common/models/evento.interface';
import { SeleccionService } from 'src/app/common/services/seleccion.service';

@Component({
  selector: 'app-evento-details',
  templateUrl: './evento-details.component.html',
  styleUrls: ['./evento-details.component.css']
})
export class EventoDetailsComponent  {
  @Input() evento?: IEvento;

  constructor(private ruta: Router, private seleccionService: SeleccionService) { }

  estado() {
    switch (this.evento?.estado) {
      case "C": return "Creado (Puede crear las parejas y asociar los jugadores) "; break;
      case "I": return "Iniciado (Puede asignar las mesas y jugar las rondas)"; break;
      case "F": return "Finalizado (Cerrado el evento, puede ver los resultados)"; break;
      default: return "Sin estado"; break;
    }
  }

  // seleccionarEvento(){
  //   if (this.evento!==undefined)
  //     this.seleccionService.setEventoSeleccionado(this.evento);
  //   this.ruta.navigateByUrl('eventDetails');
  // }

}
