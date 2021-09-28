import { Component, Input, OnInit } from '@angular/core';
import { IEvento } from '../../models/evento.interface';

@Component({
  selector: 'app-evento',
  templateUrl: './evento.component.html',
  styleUrls: ['./evento.component.css']
})
export class EventoComponent implements OnInit {
  @Input() evento: IEvento | undefined ;
  onClick(): void {
    alert('Okkkkk');
  }

  ngOnInit(){
    console.log(this.evento?.nombre);

  }

}
