import { Component } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent {

    opcionesMenu = [
    {
      nombre: 'Perfil',
      enlace: 'perfil',
      icono: 'manage_accounts', //account_box , contact_page, admin_panel_settings, manage_accounts
      isSelected: true,
    }, 
    {
      nombre: 'Ayuda',
      enlace: 'ayuda',
      icono: 'help',  // help, help_outline, help_center
      isSelected: true,
    },
    {
      nombre: 'Configuración',
      enlace: 'config',
      icono: 'settings', // display_settings, tune, settings,settings_applications
      isSelected: true,
    },
    {
      nombre: 'Cerrar sesión',
      enlace: 'sessionClose',
      icono: 'cancel', //disabled_by_default, cancel, highlight_off, close
      isSelected: true,
    },
  ];

  constructor(private ruta: Router){}

  onListSelectionChange(menu: MatSelectionListChange) {
    this.ruta.navigateByUrl(menu.source.selectedOptions.selected[0]?.value);
  }
}
