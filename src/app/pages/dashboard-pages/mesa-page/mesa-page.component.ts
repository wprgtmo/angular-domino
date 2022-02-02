import { IMesa } from './../../../common/models/interface/mesa.interface';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { Store } from '@ngrx/store';
import { idEventoSeleccionado } from 'src/app/state/selectors/eventos.selectors';
import { AppState } from 'src/app/state/app.state';
import { map, switchMap } from 'rxjs/operators';

@Component({
  templateUrl: './mesa-page.component.html',
  styleUrls: ['./mesa-page.component.css']
})
export class MesaPageComponent implements OnInit {
  id$: Observable<number>= new Observable();
  listaMesas$: Observable<IMesa[]>= new Observable();

  constructor(private store: Store<AppState>, private dominoApiService: DominoApiService) { }

  ngOnInit(): void {

    this.id$= this.store.select(idEventoSeleccionado).pipe(map(id => id));

    this.listaMesas$= this.id$.pipe(
      switchMap((id)=> this.dominoApiService.getMesas(id)),
      map((mesaResp)=> mesaResp.mesas.sort((m1, m2)=> m1.numero-m2.numero))
    );
  }
}
