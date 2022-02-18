import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { IArbitro } from 'src/app/common/models/interface/arbitro.interface';
import { listaArbitros, idArbitroSeleccionado, arbitroSeleccionado, esTarjeta } from './../selectors/arbitros.selectors';
import * as ArbitrosActions from '../actions/arbitros.actions';

@Injectable({
  providedIn: 'root'
})
export class ArbitrosService {
  constructor(private store: Store<AppState>) {}


  // ****** Metodos Dispatch *************

  public cargarArbitros() {
    this.store.dispatch(ArbitrosActions.accionCargarArbitros());
  }

  public arbitrosCargados(arbitros: IArbitro[]) {
    this.store.dispatch(ArbitrosActions.accionArbitrosCargados({ arbitros: { ...arbitros }
    }));
  }

  public crearNuevoArbitro(arbitro: IArbitro) {
    this.store.dispatch(ArbitrosActions.accionCrearNuevoArbitro({ arbitro: { ...arbitro }}));
  }

  public nuevoArbitroCreado(arbitro: IArbitro) {
    this.store.dispatch(ArbitrosActions.accionNuevoArbitroCreado({ arbitro: { ...arbitro }}));
  }

  public mostrarArbitrosComoLista() {
    this.store.dispatch(ArbitrosActions.accionMostrarArbitrosComoLista());
  }

  public mostrarArbitrosComoTarjetas() {
    this.store.dispatch(ArbitrosActions.accionMostrarArbitrosComoTarjeta());
  }

  public errorCargandoArbitros(errores: any) {
    this.store.dispatch(ArbitrosActions.accionErrorArbitros({ error: { ...errores } }));
  }

  public accionSeleccionarArbitro(arbitro_id: number) {
    this.store.dispatch(ArbitrosActions.accionSeleccionarArbitro({ arbitro_id }));
  }

  public accionEliminarArbitro(arbitro_id: number) {
    this.store.dispatch(ArbitrosActions.accionEliminarArbitro({ arbitro_id }));
  }

  public arbitroEliminado() {
    this.store.dispatch(ArbitrosActions.accionArbitroEliminado());
  }

  // ****** Metodos Select *************

  public getArbitros$(): Observable<IArbitro[]> {
    return this.store.select(listaArbitros);
  }

  public getIdArbitroSeleccionado$(): Observable<number> {
    return this.store.select(idArbitroSeleccionado);
  }

  public getArbitroSeleccionado$(): Observable<IArbitro | undefined> {
    return this.store.select(arbitroSeleccionado);
  }


  public getMostrandoTarjetas$(): Observable<boolean> {
    return this.store.select(esTarjeta);
  }

}

