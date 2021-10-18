import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { IEvento } from 'src/app/common/models/evento.interface';

@Component({
  selector: 'app-evento-toolbar',
  templateUrl: './evento-toolbar.component.html',
  styleUrls: ['./evento-toolbar.component.css']
})
export class EventoToolbarComponent implements OnInit, OnDestroy {

  isLista = true;
  subscribeSelectionService: Subscription | undefined;
  eventoSeleccionado: IEvento | undefined;

  constructor(private ruta: Router, private seleccionService: SeleccionService) { }


  addEvento(): void {
    this.ruta.navigateByUrl('eventNew');
  }

  viewEventList(): void {
    this.ruta.navigateByUrl('eventsList');
  }

  viewEventCard(): void {
    this.ruta.navigateByUrl('eventsCard');
  }


  ngOnInit(): void {
    this.subscribeSelectionService= this.seleccionService.channel.subscribe((evento)=>{
      this.eventoSeleccionado = evento;
    });
 }

 ngOnDestroy(): void{
   this.subscribeSelectionService?.unsubscribe();
 }


}
