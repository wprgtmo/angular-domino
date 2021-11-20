import { Router } from '@angular/router';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pareja-toolbar',
  templateUrl: './pareja-toolbar.component.html',
  styleUrls: ['./pareja-toolbar.component.css']
})
export class ParejaToolbarComponent implements OnInit {
  @Input() isLista?: number;

  view=[{
    icono:"view_module_white",
    tooltip:"Ver tarjetas",
    url:"parejas"
  },{
    icono:"view_list_white",
    tooltip:"Ver lista",
    url:"parejaList"
  }]
  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }

  parejaAdd(){
    this.ruta.navigateByUrl("parejaAdd");
  }

  viewPareja(): void {
    this.ruta.navigateByUrl(this.view[this.mostrandoLista()].url);
  }

  mostrandoLista(): number{
    return ((this.isLista==undefined) || (this.isLista==0))?0:1;
 }

}
