import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { IEvento } from 'src/app/common/models/evento.interface';

@Component({
  selector: 'app-evento-toolbar',
  templateUrl: './evento-toolbar.component.html',
  styleUrls: ['./evento-toolbar.component.css']
})
export class EventoToolbarComponent implements OnInit, OnDestroy {
  @Input() isLista?: number;

  subscribeSelectionService: Subscription | undefined;
  eventoSeleccionado: IEvento | undefined;

  view=[{
        icono:"view_module_white",
        tooltip:"Ver tarjetas",
        url:"eventsCard"
      },{
        icono:"view_list_white",
        tooltip:"Ver lista",
        url:"eventsList"
      }]

  constructor(private ruta: Router, private seleccionService: SeleccionService) { }

  addEvento(): void {
    this.ruta.navigateByUrl('eventNew');
  }

  viewEvent(): void {
      this.ruta.navigateByUrl(this.view[this.mostrandoLista()].url);
  }

  ngOnInit(): void {
    this.subscribeSelectionService= this.seleccionService.channelEvent.subscribe((evento)=>{
      this.eventoSeleccionado = evento;
    });
 }

 mostrandoLista(): number{
    return ((this.isLista==undefined) || (this.isLista==0))?0:1;
 }

 ngOnDestroy(): void{
   this.subscribeSelectionService?.unsubscribe();
 }


}
