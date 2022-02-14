import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuario-toolbar',
  templateUrl: './usuario-toolbar.component.html',
  styleUrls: ['./usuario-toolbar.component.css']
})
export class UsuarioToolbarComponent implements OnInit {

  view=[{
    icono:"view_module_white",
    tooltip:"Ver tarjetas",
    url:"eventsCard"
  },{
    icono:"view_list_white",
    tooltip:"Ver lista",
    url:"eventsList"
  }]

  constructor() { }

  ngOnInit(): void {
    
  }


  mostrandoTarjetas(): number{
    return 1;
 }


}
