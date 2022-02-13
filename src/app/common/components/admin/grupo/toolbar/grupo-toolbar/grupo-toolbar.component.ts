import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupo-toolbar',
  templateUrl: './grupo-toolbar.component.html',
  styleUrls: ['./grupo-toolbar.component.css']
})
export class GrupoToolbarComponent implements OnInit {

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
