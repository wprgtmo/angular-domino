import { Component } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
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
      icono: 'home', 
      isSelected: true,
    },
    {
      nombre: 'Eventos',
      enlace: 'eventsCard',
      icono: 'domain', 
      isSelected: true,
    },
    {
      nombre: 'Jugadores',
      enlace: 'playersCard',
      icono: 'person_outline',
      isSelected: false,
    },
    {
      nombre: 'Arbitros',
      enlace: 'arbitro',
      icono: 'portrait',
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
      icono: 'account_box',
      isSelected: false,
    },
    {
      nombre: 'Grupos',
      enlace: 'admin/grupo',
      icono: 'group',
      isSelected: false,
    },
    {
      nombre: 'Dispositivos',
      enlace: 'admin/dispositivo',
      icono: 'phone_android',
      isSelected: false,
    },
    {
      nombre: 'Publicidad',
      enlace: 'admin/publicidad',
      icono: 'ondemand_video',
      isSelected: false,
    },
    {
      nombre: 'Codificadores',
      enlace: 'admin/codificadores',
      icono: 'manage_accounts',
      isSelected: false,
    },
  ];

  constructor(private ruta: Router){}

  onListSelectionChange(menu: MatSelectionListChange) {
    this.ruta.navigateByUrl(menu.source.selectedOptions.selected[0]?.value);
  }
}
