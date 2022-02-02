import { EventosDispachService } from './../../../../state/dispatch/eventos.dispatch';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { AppState } from './../../../../state/app.state';
import { listaEventos } from 'src/app/state/selectors/eventos.selectors';

@Component({
  templateUrl: './evento-page.component.html',
  styleUrls: ['./evento-page.component.css']
})
export class EventoPageComponent implements OnInit {


  listaEventos$: Observable<any> = new Observable() ;

  constructor(private store: Store<AppState>, private eventosDispachService: EventosDispachService) {}

  ngOnInit(): void {
    this.eventosDispachService.mostrarEventosComoTarjetas();
    this.eventosDispachService.cargarEventos();
    this.listaEventos$= this.store.select(listaEventos);    
  }

}
