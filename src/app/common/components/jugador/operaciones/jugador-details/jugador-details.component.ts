import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IJugador } from 'src/app/common/models/jugador.interface';
import { SeleccionService } from 'src/app/common/services/seleccion.service';

@Component({
  selector: 'app-jugador-details',
  templateUrl: './jugador-details.component.html',
  styleUrls: ['./jugador-details.component.css']
})
export class JugadorDetailsComponent implements OnInit {

  @Input() jugador: IJugador | undefined ;
  fotoJugador: string | undefined;

  constructor(private ruta: Router, private seleccionService: SeleccionService) { }

  ngOnInit(){
    this.fotoJugador= 'http://localhost/domino_api/' + this.jugador?.foto;
  }

}
