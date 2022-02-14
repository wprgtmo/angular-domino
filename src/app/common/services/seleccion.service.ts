import { IJugador } from './../models/interface/jugador.interface';
import { IEvento } from '../models/interface/evento.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { IRonda } from '../models/interface/ronda.interface';

@Injectable({
  providedIn: 'root'
})
export class SeleccionService {
  private subjectEvent = new BehaviorSubject(<IEvento>{});
  channelEvent = this.subjectEvent.asObservable();

  private subjectJugador = new BehaviorSubject(<IJugador>{});
  channelJugador = this.subjectJugador.asObservable();

  private subjectRonda = new BehaviorSubject(<number>0);
  channelRonda = this.subjectRonda.asObservable();

  private subjectRondas = new BehaviorSubject(<IRonda[]>{});
  channelRondas = this.subjectRondas.asObservable();

  private subjectIsCard = new BehaviorSubject(<boolean>true);
  channelIsCard = this.subjectIsCard.asObservable();

  constructor() { }

  public setEventoSeleccionado(evento: IEvento): void {
      this.subjectEvent.next(evento);
  }

  public getEventoSeleccionado(): IEvento{
    return this.subjectEvent.getValue();
  }

  public setRondaIdSeleccionada(ronda_id: number): void {
      this.subjectRonda.next(ronda_id);
  }

  public getRondaIdSeleccionada(): number{
    return this.subjectRonda.getValue();
  }

  public setJugadorSeleccionado(jugador: IJugador): void {
    this.subjectJugador.next(jugador);
  }

  public getJugadorSeleccionado(): IJugador{
    return this.subjectJugador.getValue();
  }

  public setsetIsCard(esTarjeta: boolean): void {
    this.subjectIsCard.next(esTarjeta);
  }

  public getIsCard(): boolean{
    return this.subjectIsCard.getValue();
  }

}
