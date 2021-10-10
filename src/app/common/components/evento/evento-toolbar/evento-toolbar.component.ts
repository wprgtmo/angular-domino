import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-toolbar',
  templateUrl: './evento-toolbar.component.html',
  styleUrls: ['./evento-toolbar.component.css']
})
export class EventoToolbarComponent  {

  constructor(private ruta: Router) { }


  addEvento(): void {
    this.ruta.navigateByUrl('/evento_nuevo');
  }

  viewList(): void {
    this.ruta.navigateByUrl('/evento_lista');
  }

  viewCard(): void {
    this.ruta.navigateByUrl('/eventos');
  }

}
