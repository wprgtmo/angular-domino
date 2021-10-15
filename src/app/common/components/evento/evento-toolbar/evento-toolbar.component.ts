import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evento-toolbar',
  templateUrl: './evento-toolbar.component.html',
  styleUrls: ['./evento-toolbar.component.css']
})
export class EventoToolbarComponent  {

  isLista = true;

  constructor(private ruta: Router) { }


  addEvento(): void {
    this.ruta.navigateByUrl('eventNew');
  }

  viewEventList(): void {
    this.ruta.navigateByUrl('eventsList');
  }

  viewEventCard(): void {
    this.ruta.navigateByUrl('eventsCard');
  }
  

}
