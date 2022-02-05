import { IEvento } from './../../common/models/interface/evento.interface';
import { IRonda } from '../../common/models/interface/ronda.interface';
import { IPareja } from '../../common/models/interface/pareja.interface';
import { IMesa } from 'src/app/common/models/interface/mesa.interface';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as EventosActions from '../actions/eventos.actions';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { esTarjeta, eventoSeleccionado, idEventoSeleccionado, listaEventos, mesas, parejas } from '../selectors/eventos.selectors';
@Injectable({
  providedIn: 'root'
})
export class EventosService {
  constructor(private store: Store<AppState>) {}


  // ****** Metodos Dispatch *************

  public cargarEventos() {
    this.store.dispatch(EventosActions.accionCargarEventos());
  }

  public eventosCargados(eventos: IEvento[]) {
    this.store.dispatch(EventosActions.accionEventosCargados({ eventos: { ...eventos }
    }));
  }

  public nuevoEvento(evento: IEvento) {
    this.store.dispatch(EventosActions.accionNuevoEvento({ evento: { ...evento }}));
  }

  public mostrarEventosComoLista() {
    this.store.dispatch(EventosActions.accionMostrarEventosComoLista());
  }

  public mostrarEventosComoTarjetas() {
    this.store.dispatch(EventosActions.accionMostrarEventosComoTarjeta());
  }

  public errorCargandoEventos(errores: any) {
    this.store.dispatch(EventosActions.accionErrorCargandoEventos({ error: { ...errores } }));
  }

  public seleccionarEvento(id: number) {
    this.store.dispatch(EventosActions.accionSeleccionarEvento({ id }));
  }

  public iniciarEvento(id: number) {
    this.store.dispatch(EventosActions.accionIniciarEvento({ id }));
  }

  public eventoIniciado(evento: IEvento) {
    this.store.dispatch(EventosActions.accionEventoIniciado( { evento } ));
  }

  public eliminarEvento(id: number) {
    this.store.dispatch(EventosActions.accionEliminarEvento({ id }));
  }

  public eventoEliminado() {
    this.store.dispatch(EventosActions.accionEventoEliminado());
  }

  public finalizarEvento(id: number) {
    this.store.dispatch(EventosActions.accionFinalizarEvento({ id }));
  }

  public eventoFinalizado() {
    this.store.dispatch(EventosActions.accionEventoFinalizado());
  }

  public cargarParejas(evento_id: number) {
    this.store.dispatch(EventosActions.accionCargarParejas({ evento_id }));
  }

  public parejasCargadas(parejas: IPareja[]) {
    this.store.dispatch(EventosActions.accionParejasCargadas({ parejas: { ...parejas }
    }));
  }

  public cargarMesas(evento_id: number) {
    this.store.dispatch(EventosActions.accionCargarMesas({ evento_id }));
  }

  public mesasCargadas(mesas: IMesa[]) {
    this.store.dispatch(EventosActions.accionMesasCargadas({ mesas: { ...mesas }
    }));
  }

  public cargarRondas(evento_id: number) {
    this.store.dispatch(EventosActions.accionCargarRondas({ evento_id }));
  }

  public rondasCargadas(rondas: IRonda[]) {
    this.store.dispatch(EventosActions.accionRondasCargadas({ rondas: { ...rondas } }));
  }

  public seleccionarRonda(id: number) {
    this.store.dispatch(EventosActions.accionSeleccionarRonda({ id }));
  }

  // ****** Metodos Select *************

  public getEventos$(): Observable<IEvento[]> {
    return this.store.select(listaEventos);
  }

  public getIdEventoSeleccionado$(): Observable<number> {
    return this.store.select(idEventoSeleccionado);
  }

  public getEventoSeleccionado$(): Observable<IEvento | undefined> {
    return this.store.select(eventoSeleccionado);
  }


  public getMostrandoTarjetas$(): Observable<boolean> {
    return this.store.select(esTarjeta);
  }


  public getParejas$(): Observable<IPareja[]> {
    return this.store.select(parejas);
  }


  public getMesas$(): Observable<IMesa[]> {
    return this.store.select(mesas);
  }


}

