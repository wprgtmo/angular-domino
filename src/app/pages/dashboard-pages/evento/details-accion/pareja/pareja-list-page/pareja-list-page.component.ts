import { Component, OnInit, OnDestroy } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { IPareja } from 'src/app/common/models/interface/pareja.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { AppState } from 'src/app/state/app.state';
import { idEventoSeleccionado } from 'src/app/state/selectors/eventos.selectors';

@Component({
  templateUrl: './pareja-list-page.component.html',
  styleUrls: ['./pareja-list-page.component.css'],
})
export class ParejaListPageComponent implements OnInit, OnDestroy {
  private subs?: Subscription;
  private id$: Observable<number> = new Observable();
  displayedColumns: string[] = ['nombre', 'jugador1', 'jugador2'];
  dataSource = new MatTableDataSource<IPareja>();

  constructor(private dominoApiService: DominoApiService,private store: Store<AppState>) {}

  ngOnInit(): void {
    this.id$ = this.store.select(idEventoSeleccionado).pipe(map((id) => id));

    this.subs = this.id$
      .pipe(switchMap((id) => this.dominoApiService.getParejas(id)))
      .subscribe((parejas) => (this.dataSource.data = parejas.parejas));
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}
