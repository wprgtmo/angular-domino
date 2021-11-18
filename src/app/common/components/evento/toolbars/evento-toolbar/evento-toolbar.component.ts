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

  isLista = false;
  subscribeSelectionService: Subscription | undefined;
  eventoSeleccionado: IEvento | undefined;

  constructor(private ruta: Router, private seleccionService: SeleccionService) { }

  addEvento(): void {
    this.ruta.navigateByUrl('eventNew');
  }

  viewEvent(): void {
    this.ruta.navigateByUrl((this.isLista)?"eventsCard":"eventsList");
    this.isLista=!this.isLista;
  }

  ngOnInit(): void {
    this.subscribeSelectionService= this.seleccionService.channelEvent.subscribe((evento)=>{
      this.eventoSeleccionado = evento;
    });
 }

 ngOnDestroy(): void{
   this.subscribeSelectionService?.unsubscribe();
 }


}
