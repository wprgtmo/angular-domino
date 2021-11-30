import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IJugador } from '../../models/jugador.interface';
import { SeleccionService } from '../../services/seleccion.service';

@Component({
  selector: 'app-jugador',
  templateUrl: './jugador.component.html',
  styleUrls: ['./jugador.component.css']
})
export class JugadorComponent implements OnInit {

  @Input() jugador: IJugador | undefined ;

  fotoJugador: string | undefined;

  constructor(private ruta: Router, private seleccionService: SeleccionService) { }

  ngOnInit(){
    this.fotoJugador= 'http://localhost/domino_api/' + this.jugador?.foto;
  }
  seleccionarJugador(){
    if (this.jugador!==undefined)
      this.seleccionService.setJugadorSeleccionado(this.jugador);
    this.ruta.navigateByUrl('playerDetails');
  }
}
 