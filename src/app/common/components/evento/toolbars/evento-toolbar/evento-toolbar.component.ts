import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/state/app.state';
import { esTarjeta } from 'src/app/state/selectors/eventos.selectors';
import { EventosService } from '../../../../../state/facade/eventos.service';

@Component({
  selector: 'app-evento-toolbar',
  templateUrl: './evento-toolbar.component.html',
  styleUrls: ['./evento-toolbar.component.css']
})
export class EventoToolbarComponent implements OnInit, OnDestroy {
  subs?: Subscription;
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

  constructor(private ruta: Router, private eventosDispachService: EventosService, private store: Store<AppState>) { }

  ngOnInit(): void {
    this.subs= this.store.select(esTarjeta).subscribe((esTarjeta) => this.isCard= esTarjeta);
 }

  addEvento(): void {
    this.ruta.navigateByUrl('eventNew');
  }

  mostrandoTarjetas(): number{
    return this.isCard?1:0;
 }

  viewEvent(): void {
    const esTarjeta= this.mostrandoTarjetas();
    this.mostrandoTarjetas()?
      this.eventosDispachService.mostrarEventosComoLista():
      this.eventosDispachService.mostrarEventosComoTarjetas();
    this.ruta.navigateByUrl(this.view[esTarjeta].url);
  }

  ngOnDestroy(){
    this.subs?.unsubscribe();
  }

}
