import { IEvento } from './../models/evento.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeleccionService {
  private subjectEvent = new BehaviorSubject(<IEvento>{});
  channelEvent = this.subjectEvent.asObservable();

  private subjectRonda = new BehaviorSubject(<String>{});
  channelRonda = this.subjectRonda.asObservable();

  constructor() { }

  public setEventoSeleccionado(evento: IEvento): void {
      this.subjectEvent.next(evento);
  }

  public getEventoSeleccionado(): IEvento{
    return this.subjectEvent.getValue();
  }


  public setRondaIdSeleccionada(ronda_id: string): void {
      this.subjectRonda.next(ronda_id);
  }

  public getRondaIdSeleccionada(): String{
    return this.subjectRonda.getValue();
  }


}
