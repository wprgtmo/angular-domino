import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dispositivo-toolbar',
  templateUrl: './dispositivo-toolbar.component.html',
  styleUrls: ['./dispositivo-toolbar.component.css']
})
export class DispositivoToolbarComponent implements OnInit {

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
