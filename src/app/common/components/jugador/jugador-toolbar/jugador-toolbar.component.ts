import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugador-toolbar',
  templateUrl: './jugador-toolbar.component.html',
  styleUrls: ['./jugador-toolbar.component.css']
})
export class JugadorToolbarComponent {
  isLista = true;
  isCard = ! this.isLista;
  constructor(private ruta: Router) { }


  addJugador(): void {
    this.ruta.navigateByUrl('/jugador_nuevo');
  }

  viewJugadorList(): void {
    this.isLista=true;
    this.isCard = ! this.isLista;
    this.ruta.navigateByUrl('/jugador_lista');
  }

  viewJugadorCard(): void {
    this.isLista=false;
    this.isCard = ! this.isLista;
    this.ruta.navigateByUrl('/jugadores');
  }
}
