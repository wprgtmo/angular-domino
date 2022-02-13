import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-arbitro-toolbar',
  templateUrl: './arbitro-toolbar.component.html',
  styleUrls: ['./arbitro-toolbar.component.css']
})
export class ArbitroToolbarComponent implements OnInit {

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
