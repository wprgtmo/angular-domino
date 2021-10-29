import { Component, Input, OnInit } from '@angular/core';
import { IJugador } from '../../models/jugador.interface';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  @Input() jugador: IJugador | undefined ;

  fotoJugador: string | undefined;

  constructor() { }

  onClick(): void {
    alert('Okkkkk Jugador');
  }

  ngOnInit(){
    this.fotoJugador= 'http://localhost/domino_api/' + this.jugador?.foto;


  }

}
