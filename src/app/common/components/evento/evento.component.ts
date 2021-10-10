import { Component, Input } from '@angular/core';
import { IEvento } from '../../models/evento.interface';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent {

  @Input() evento: IEvento | undefined ;

  onClick(): void {
    alert('Okkkkk');
  }
  onAction(): void {
    alert('Okkkkk');
  }

  mostrarEstadoCreado(){
    return !(this.estado()=='Creado');
  }

  mostrarEstadoIniciado(){
    return !(this.estado()=='Iniciado');
  }

  mostrarEstadoFinalizado(){
    return !(this.estado()=='Finalizado');
  }

  estado(){
    if (this.evento?.estado=="C")
      return "Creado";
    if  (this.evento?.estado=="I")
      return "Iniciado";
    if  (this.evento?.estado=="F")
      return "Finalizado";
    return "Sin estado";
  }

}
