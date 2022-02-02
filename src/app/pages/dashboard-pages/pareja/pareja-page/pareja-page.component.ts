import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { IEvento } from 'src/app/common/models/interface/evento.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { IPareja } from 'src/app/common/models/interface/pareja.interface';
import { Store } from '@ngrx/store';
import { eventoSeleccionado, idEventoSeleccionado } from 'src/app/state/selectors/eventos.selectors';
import { AppState } from 'src/app/state/app.state';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  templateUrl: './pareja-page.component.html',
  styleUrls: ['./pareja-page.component.css']
})
export class ParejaPageComponent implements OnInit {

  id$: Observable<number>= new Observable();
  listaParejas$: Observable<IPareja[]>= new Observable();

  constructor(private store: Store<AppState>, private dominoApiService: DominoApiService) { }

  ngOnInit(): void {

    this.id$= this.store.select(idEventoSeleccionado).pipe(map(id => id));

    this.listaParejas$= this.id$.pipe(switchMap((id)=> this.dominoApiService.getParejas(id)));

  }
}
