import { ConfigComponent } from './../config/config.component';
import { ProfileComponent } from './opciones/profile/profile.component';
import { HelpComponent } from './opciones/help/help.component';
import { Component } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-submenu',
  templateUrl: './submenu.component.html',
  styleUrls: ['./submenu.component.css']
})
export class SubmenuComponent {

  constructor(private ruta: Router,  public dialog: MatDialog){}

  // perfil= function(){
  //   console.log("Click perfil");
  // }

  // ayuda= function(){
  // }

  // config= function(){
  //   console.log("Click config");
  // }

  // close= function(){
  //   console.log("Click close");
  // }

  


  // opcionesMenu = [
  //   {
  //     nombre: 'Perfil',
  //     enlace: 'perfil',
  //     icono: 'manage_accounts', //account_box , contact_page, admin_panel_settings, manage_accounts
  //     isSelected: true,
  //     evento: this.perfil
  //   }, 
  //   {
  //     nombre: 'Ayuda',
  //     enlace: 'ayuda',
  //     icono: 'help',  // help, help_outline, help_center
  //     isSelected: true,
  //     evento: this.ayuda
  //   },
  //   {
  //     nombre: 'Configuración',
  //     enlace: 'config',
  //     icono: 'settings', // display_settings, tune, settings,settings_applications
  //     isSelected: true,
  //     evento: this.config
  //   },
  //   {
  //     nombre: 'Cerrar sesión',
  //     enlace: 'sessionClose',
  //     icono: 'cancel', //disabled_by_default, cancel, highlight_off, close
  //     isSelected: true,
  //     evento: this.close
  //   },
  // ];


  // openDialog(ventana: any) {
  //   const dialogRef = this.dialog.open(ventana);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

  onListSelectionChange(menu: MatSelectionListChange) {
    this.ruta.navigateByUrl(menu.source.selectedOptions.selected[0]?.value);
  }

  abrirPerfil(){
    this.dialog.open(ProfileComponent);
  }

  abrirAyuda(){
    this.dialog.open(HelpComponent);
  }

  abrirConfig(){
    this.dialog.open(ConfigComponent);
  }
  
  cerrarSession(){
    this.dialog.open(HelpComponent);
  }

}

