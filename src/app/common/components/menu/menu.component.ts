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
      nombre: 'Inicio',
      enlace: 'home',
      icono: 'home', //event_note
      isSelected: true,
    },
    {
      nombre: 'Eventos',
      enlace: 'eventsCard',
      icono: 'domain', //event_note
      isSelected: true,
    },
    {
      nombre: 'Jugadores',
      enlace: 'playersCard',
      icono: 'person_outline',//people_outline_white  assignment_ind account_box person_outline portrait
      isSelected: false,
    },
    {
      nombre: 'Arbitros',
      enlace: 'arbitro',
      icono: 'portrait',//people_outline_white  assignment_ind account_box person_outline portrait
      isSelected: false,
    },
    {
      nombre: 'Estadisticas',
      enlace: 'estadistica',
      icono: 'bar_chart',
      isSelected: false,
    },
    {
      nombre: 'Usuarios',
      enlace: 'admin/usuario',
      icono: 'account_box',//people_outline_white portrait
      isSelected: false,
    },
    {
      nombre: 'Grupos',
      enlace: 'admin/grupo',
      icono: 'group',//people_outline_white
      isSelected: false,
    },
    {
      nombre: 'Dispositivos',
      enlace: 'admin/dispositivo',
      icono: 'phone_android',//people_outline_white
      isSelected: false,
    },
    {
      nombre: 'Publicidad',
      enlace: 'publicidad',
      icono: 'ondemand_video',//people_outline_white
      isSelected: false,
    },
  ];

  constructor(private ruta: Router){}

  onListSelectionChange(menu: MatSelectionListChange) {
    this.ruta.navigateByUrl(menu.source.selectedOptions.selected[0]?.value);
  }
}
