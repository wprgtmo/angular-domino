import { accionMostrarEventosComoLista } from './../actions/eventos.actions';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { IEvento } from 'src/app/common/models/interface/evento.interface';
import * as EventosActions from '../actions/eventos.actions';
import { AppState } from '../app.state';
@Injectable({
  providedIn: 'root'
})
export class EventosDispachService {
  constructor(private store: Store<AppState>) {}

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

}