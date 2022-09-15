import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IJugador } from 'src/app/common/models/interface/jugador.interface';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { PathRest } from 'src/app/common/static/path-rest';

@Component({
  selector: 'app-jugador-details',
  templateUrl: './jugador-details.component.html',
  styleUrls: ['./jugador-details.component.css']
})
export class JugadorDetailsComponent implements OnInit {

  @Input() jugador?: IJugador;
  fotoJugador?: string;

  constructor() { }

  ngOnInit(){
    this.fotoJugador= PathRest.URL_IMG_JUGADORES + this.jugador?.foto;
  }

}
