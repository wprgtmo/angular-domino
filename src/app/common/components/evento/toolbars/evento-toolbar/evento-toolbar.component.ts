import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { IEvento } from 'src/app/common/models/interface/evento.interface';

@Component({
  selector: 'app-evento-toolbar',
  templateUrl: './evento-toolbar.component.html',
  styleUrls: ['./evento-toolbar.component.css']
})
export class EventoToolbarComponent implements OnInit, OnDestroy {
  subsSelectionService?: Subscription;
  subsSelectionServiceIsCard?: Subscription;
  eventoSeleccionado?: IEvento;
  isCard?: boolean;

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

  ngOnInit(): void {
    this.subsSelectionService= this.seleccionService.channelEvent.subscribe((evento)=>{
      this.eventoSeleccionado = evento;
    });
    this.subsSelectionServiceIsCard= this.seleccionService.channelIsCard.subscribe((IsCard) => {
      this.isCard= IsCard;
    })
 }

  addEvento(): void {
    this.ruta.navigateByUrl('eventNew');
  }

  viewEvent(): void {
      console.log("Es lista en el View: ", this.isCard);
      const lista= this.mostrandoLista();
      this.seleccionService.setsetIsCard(!this.isCard);
      console.log("Es lista despues de cambiar el view: ", this.isCard);
      this.ruta.navigateByUrl(this.view[lista].url);
  }

 mostrandoLista(): number{
    return this.isCard?1:0;
 }

 ngOnDestroy(): void{
   this.subsSelectionService?.unsubscribe();
   this.subsSelectionServiceIsCard?.unsubscribe();
 }


}
