import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jugador-toolbar',
  templateUrl: './jugador-toolbar.component.html',
  styleUrls: ['./jugador-toolbar.component.css']
})
export class JugadorToolbarComponent {
  @Input() isLista?: number;

  view=[{
    icono:"view_module_white",
    tooltip:"Ver tarjetas",
    url:"playersCard"
  },{
    icono:"view_list_white",
    tooltip:"Ver lista",
    url:"playersList"
  }]
  constructor(private ruta: Router) { }

  addJugador(): void {
    this.ruta.navigateByUrl('playerAdd');
  }

  viewJugador(): void {
    this.ruta.navigateByUrl(this.view[this.mostrandoLista()].url);
  }

  mostrandoLista(): number{
    return ((this.isLista==undefined) || (this.isLista==0))?0:1;
 }


}
