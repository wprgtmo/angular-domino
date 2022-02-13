import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicidad-toolbar',
  templateUrl: './publicidad-toolbar.component.html',
  styleUrls: ['./publicidad-toolbar.component.css']
})
export class PublicidadToolbarComponent implements OnInit {

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
