import { IEvento } from './../models/evento.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeleccionService {
  private subject = new BehaviorSubject(<IEvento>{});
  channel = this.subject.asObservable();

  constructor() { }

  public setEventoSeleccionado(evento: IEvento): void {
      this.subject.next(evento);
  }

  public getEventoSeleccionado(): IEvento{
    return this.subject.getValue();
  }


}
