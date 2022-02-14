import { EventosService } from 'src/app/state/facade/eventos.service';
import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { IPareja } from 'src/app/common/models/interface/pareja.interface';
import { map, switchMap, tap } from 'rxjs/operators';

@Component({
  templateUrl: './pareja-page.component.html',
  styleUrls: ['./pareja-page.component.css']
})
export class ParejaPageComponent implements OnInit {

  listaParejas?: IPareja[];
  id$: Observable<number>= new Observable();
  parejas$: Observable<IPareja[]>= new Observable();
  subs?: Subscription;

  constructor(private eventosService: EventosService) { }

  ngOnInit(): void {
    this.id$ = this.eventosService.getIdEventoSeleccionado$();

    this.subs = this.id$.pipe(map((id) => this.eventosService.cargarParejas(id))).subscribe();

    this.parejas$= this.eventosService.getParejas$();
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}
