import { PathRest } from './../../static/path-rest';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IJugador } from '../../models/interface/jugador.interface';
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
    this.fotoJugador= PathRest.URL_IMG_JUGADORES + this.jugador?.foto;
  }
  seleccionarJugador(){
    if (this.jugador!==undefined)
      this.seleccionService.setJugadorSeleccionado(this.jugador);
    this.ruta.navigateByUrl('playerDetails');
  }
}
