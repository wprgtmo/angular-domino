import { IJugadorRespuesta } from './../models/jugador-respuesta.interface';
import { PathRest } from './../static/path-rest';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEventoRespuesta } from '../models/evento-respuesta.interface';
import { IRondaNuevaRespuesta } from '../models/ronda-nueva-respuesta.interface';

@Injectable({
  providedIn: 'root'
})
export class DominoApiService {

  constructor(private http_API: HttpClient) { }

  getEventos():Observable<IEventoRespuesta>{
    return this.http_API.get<IEventoRespuesta>(PathRest.GET_EVENTOS);
  }

  getJugadores():Observable<IJugadorRespuesta>{
    return this.http_API.get<IJugadorRespuesta>(PathRest.GET_JUGADORES);
  }

  getRondaNueva(evento_id: string): Observable<IRondaNuevaRespuesta>{
    return this.http_API.post<IRondaNuevaRespuesta>(PathRest.GET_NUEVA_RONDA, {"evento_id": evento_id});
  }


}
