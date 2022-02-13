import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { map, mergeMap, tap } from 'rxjs/operators';
import { IEstadisticaRonda } from 'src/app/common/models/interface/estadistica-ronda.interface';
import { EventosService } from 'src/app/state/facade/eventos.service';

@Component({
  templateUrl: './estadistica-evento-page.component.html',
  styleUrls: ['./estadistica-evento-page.component.css']
})
export class EstadisticaEventoPageComponent implements OnInit {
  public displayedColumns: string[] = [
    'pareja',
    'juegos_jugados',
    'juegos_ganados',
    'juegos_perdidos',
    'tantos_ganados',
    'tantos_favor',
    'tantos_contra',
    'diferencia_tantos',
    'bonificacion',
  ];

  private subs?: Subscription;

  dataSource = new MatTableDataSource<IEstadisticaRonda>();

  constructor(private eventosService: EventosService) {}

  ngOnInit(): void {
    this.subs = this.eventosService
      .getIdRondaSeleccionada$()
      .pipe(
        map((ronda_id) => this.eventosService.cargarEstadisticaRonda(ronda_id)),
        mergeMap(() => this.eventosService.getEstadisticaRonda$())
      )
      .subscribe(
        (estadisticaRonda) => (this.dataSource.data = estadisticaRonda)
      );
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}
