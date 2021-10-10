import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugador-toolbar',
  templateUrl: './jugador-toolbar.component.html',
  styleUrls: ['./jugador-toolbar.component.css']
})
export class JugadorToolbarComponent {

  constructor(private ruta: Router) { }


  addJugador(): void {
    this.ruta.navigateByUrl('/jugador_nuevo');
  }

  viewList(): void {
    this.ruta.navigateByUrl('/jugador_lista');
  }

  viewCard(): void {
    this.ruta.navigateByUrl('/jugadores');
  }
}
