import { Component, ElementRef, AfterViewInit, ViewChild } from '@angular/core';
import {
  MatNavList,
  MatSelectionList,
  MatSelectionListChange,
} from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent {
  opcionesMenu = [
    {
      nombre: 'Eventos',
      enlace: 'eventsCard',
      icono: 'event',
      isSelected: true,
    },
    {
      nombre: 'Jugadores',
      enlace: 'jugadores',
      icono: 'people_outline_white',
      isSelected: false,
    },
    {
      nombre: 'Estadisticas',
      enlace: 'estadisticas',
      icono: 'equalizer_white',
      isSelected: false,
    },
  ];

  constructor(private ruta: Router){}

  onListSelectionChange(menu: MatSelectionListChange) {
    this.ruta.navigateByUrl(menu.source.selectedOptions.selected[0]?.value);
  }
}
