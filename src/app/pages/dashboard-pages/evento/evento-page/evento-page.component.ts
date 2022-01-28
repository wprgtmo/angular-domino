import { accionCargarEventos } from './../../../../state/actions/eventos.actions';
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

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.dispatch(accionCargarEventos());
    this.listaEventos$= this.store.select(listaEventos);    
  }

}
