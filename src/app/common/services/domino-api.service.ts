import { IJugadorRespuesta } from '../models/respuestas/jugador-respuesta.interface';
import { PathRest } from './../static/path-rest';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEventoRespuesta } from '../models/respuestas/evento-respuesta.interface';
import { IRondaNuevaRespuesta } from '../models/respuestas/ronda-nueva-respuesta.interface';
import { IRondasRespuesta } from '../models/respuestas/rondas-respuesta.interface';
import { IBoletasRespuesta } from '../models/respuestas/boletas-respuesta.interface';
import { IMesasRespuesta } from '../models/respuestas/mesas-respuesta.interface';
import { IParejasRespuesta } from '../models/respuestas/parejas-respuesta.interface';

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

  getRondas(evento_id: string): Observable<IRondasRespuesta>{
    return this.http_API.post<IRondasRespuesta>(PathRest.GET_RONDAS, {"evento_id": evento_id});
  }

  getRondaNueva(evento_id: string): Observable<IRondaNuevaRespuesta>{
    return this.http_API.post<IRondaNuevaRespuesta>(PathRest.GET_NUEVA_RONDA, {"evento_id": evento_id});
  }

  getBoletas(evento_id: string, ronda_id: string): Observable<IBoletasRespuesta>{
    return this.http_API.post<IBoletasRespuesta>(PathRest.GET_BOLETAS, {"evento_id": evento_id, "ronda_id": ronda_id});
  }

  getMesas(evento_id: string): Observable<IMesasRespuesta>{
    return this.http_API.post<IMesasRespuesta>(PathRest.GET_MESAS, {"evento_id": evento_id});
  }

  getParejas(evento_id: string): Observable<IParejasRespuesta>{
    return this.http_API.post<IParejasRespuesta>(PathRest.GET_PAREJAS, {"evento_id": evento_id});
  }


}
