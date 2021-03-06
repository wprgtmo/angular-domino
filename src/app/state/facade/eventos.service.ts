import { IBoleta } from './../../common/models/interface/boleta.interface';
import { IEvento } from './../../common/models/interface/evento.interface';
import { IRonda } from '../../common/models/interface/ronda.interface';
import { IPareja } from '../../common/models/interface/pareja.interface';
import { IMesa } from 'src/app/common/models/interface/mesa.interface';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import * as EventosActions from '../actions/eventos.actions';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';
import { boletas, estadisticaRonda, esTarjeta, eventoSeleccionado, idEventoSeleccionado, idRondaSeleccionada, listaEventos, mesas, parejas, rondas, rondaSeleccionada } from '../selectors/eventos.selectors';
import { IBoletaCompleta } from 'src/app/common/models/interface/boleta-completa.interface';
import { IEstadisticaRonda } from 'src/app/common/models/interface/estadistica-ronda.interface';
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
    this.store.dispatch(EventosActions.accionErrorEventos({ error: { ...errores } }));
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
    if (evento_id>0)
      this.store.dispatch(EventosActions.accionCargarParejas({ evento_id }));
  }

  public parejasCargadas(parejas: IPareja[]) {
    this.store.dispatch(EventosActions.accionParejasCargadas({ parejas: { ...parejas }
    }));
  }

  public cargarMesas(evento_id: number) {
    if (evento_id>0)
      this.store.dispatch(EventosActions.accionCargarMesas({ evento_id }));
  }

  public mesasCargadas(mesas: IMesa[]) {
    this.store.dispatch(EventosActions.accionMesasCargadas({ mesas: { ...mesas }
    }));
  }

  public cargarRondas(evento_id: number) {    
    if (evento_id>0)
      this.store.dispatch(EventosActions.accionCargarRondas({ evento_id }));
  }

  public rondasCargadas(rondas: IRonda[]) {
    this.store.dispatch(EventosActions.accionRondasCargadas({ rondas: { ...rondas } }));
  }

  
  public cargarEstadisticaRonda(ronda_id: number) {    
    if (ronda_id>0)
      this.store.dispatch(EventosActions.accionCargarEstadisticaRonda({ ronda_id }));
  }

  public estadisticaRondaCargadas(estadisticaRonda: IEstadisticaRonda[]) {
    this.store.dispatch(EventosActions.accionEstadisticaRondaCargadas({ estadisticaRonda: { ...estadisticaRonda } }));
  }


  public seleccionarRonda(ronda_id: number) {
    this.store.dispatch(EventosActions.accionSeleccionarRonda({ ronda_id }));
  }

  public cargarBoletas(ronda_id: number) {
    if (ronda_id>0) 
      this.store.dispatch(EventosActions.accionCargarBoletas({ ronda_id }));
  }

  public boletasCargadas(boletas: IBoletaCompleta[]) {
    this.store.dispatch(EventosActions.accionBoletasCargadas({ boletas: { ...boletas } }));
  }

  public seleccionarBoleta(boleta_id: number) {
    this.store.dispatch(EventosActions.accionSeleccionarBoleta({ boleta_id }));
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


  public getRondas$(): Observable<IRonda[]> {
    return this.store.select(rondas);
  }

  public getEstadisticaRonda$(): Observable<IEstadisticaRonda[]> {
    return this.store.select(estadisticaRonda);
  }

  public getRondaSeleccionada$(): Observable<IRonda | undefined> {
    return this.store.select(rondaSeleccionada);
  }

  public getIdRondaSeleccionada$(): Observable<number> {
    return this.store.select(idRondaSeleccionada);
  }


  public getBoletas$(): Observable<IBoletaCompleta[]> {
    return this.store.select(boletas);
  }

  // public getRondaSeleccionada$(): Observable<IRonda | undefined> {
  //   return this.store.select(rondaSeleccionada);
  // }
}

