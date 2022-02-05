import { SeleccionService } from './../../../services/seleccion.service';
import { EventosService } from 'src/app/state/facade/eventos.service';
import { IRonda } from './../../../models/interface/ronda.interface';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { rondas, idEventoSeleccionado } from 'src/app/state/selectors/eventos.selectors';
import { AppState } from 'src/app/state/app.state';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-ronda-toolbar',
  templateUrl: './ronda-toolbar.component.html',
  styleUrls: ['./ronda-toolbar.component.css'],
})
export class RondaToolbarComponent implements OnInit, OnDestroy {
  private subscribeDominoApiService?: Subscription;
  private subscribeRondasDominoApiService?: Subscription;

  public rondas?: IRonda[];
  public ronda_activa= 0;

  evento_id$: Observable<number> = new Observable();
  rondas$: Observable<IRonda[]> = new Observable();

  constructor(
    private eventosDispachService: EventosService,
    private seleccionService: SeleccionService,
    private store: Store<AppState>,
    private dominoApiService: DominoApiService,
    private ruta: Router
  ) {}

  ngOnInit(): void {
    this.evento_id$= this.store.select(idEventoSeleccionado).pipe(map(id => id));

    this.evento_id$.pipe(
      map((id) => this.eventosDispachService.cargarRondas(id)),
      tap((rondas) => console.log("Rondas cargadas", rondas))
    );

    this.rondas$= this.store.select(rondas);


    // this.subscribeRondasDominoApiService = this.dominoApiService
    //   .getRondas(this.seleccionService.getEventoSeleccionado().id)
    //   .subscribe((rondasRespuesta) => {
    //     this.rondas = rondasRespuesta.rondas;
    //     if (this.rondas.length > 0) {
    //       this.ronda_activa = this.rondas[this.rondas.length-1].id;
    //       this.eventosDispachService.seleccionarRonda( this.ronda_activa);
    //       // this.seleccionService.setRondaIdSeleccionada(this.ronda_activa);
    //     }
    //   });
  }

  changeRonda(ronda: any) {
    this.eventosDispachService.seleccionarRonda( ronda.value );
    // this.seleccionService.setRondaIdSeleccionada(ronda.value);
  }

  iniciarRonda() {
    if (this.seleccionService.getEventoSeleccionado().id != 0) {
      this.subscribeDominoApiService = this.dominoApiService
        .getRondaNueva(this.seleccionService.getEventoSeleccionado().id)
        .subscribe(() => {
          this.ruta.navigateByUrl('rondas');
        });
    }
  }

  ngOnDestroy(): void {
    this.subscribeDominoApiService?.unsubscribe();
    this.subscribeRondasDominoApiService?.unsubscribe();
  }
}
