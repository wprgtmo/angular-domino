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

  estado(){
    if (this.evento?.estado=="C")
      return "Creado";
    else
      if  (this.evento?.estado=="I")
        return "Iniciado";
      else
        return "Cerrado";
  }

}
