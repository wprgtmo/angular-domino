import { IJugadorRespuesta } from '../models/respuestas/jugador-respuesta.interface';
import { PathRest } from './../static/path-rest';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IEventoRespuesta } from '../models/respuestas/evento-respuesta.interface';
import { IRondaNuevaRespuesta } from '../models/respuestas/ronda-nueva-respuesta.interface';
import { IRondasRespuesta } from '../models/respuestas/rondas-respuesta.interface';
import { IBoletasRespuesta } from '../models/respuestas/boletas-respuesta.interface';
import { IBoletasCompletaRespuesta } from '../models/respuestas/boletas-completa-respuesta.interface';
import { IMesasRespuesta } from '../models/respuestas/mesas-respuesta.interface';
import { IParejasRespuesta } from '../models/respuestas/parejas-respuesta.interface';
import { IPareja } from '../models/interface/pareja.interface';

@Injectable({
  providedIn: 'root'
})
export class DominoApiService {

  constructor(private http_API: HttpClient) { }

  getEventos():Observable<IEventoRespuesta>{
    return this.http_API.get<IEventoRespuesta>(PathRest.GET_EVENTOS);
  }

  newEvento(datosEvento: FormData):Observable<IEventoRespuesta>{
    return this.http_API.post<IEventoRespuesta>(PathRest.NEW_EVENTO, datosEvento);
  }

  iniciarEvento(evento_id: string):Observable<IEventoRespuesta>{
    return this.http_API.post<IEventoRespuesta>(PathRest.INIT_EVENTO, {"evento_id": evento_id});
  }

  finalizarEvento(evento_id: string):Observable<IEventoRespuesta>{
    return this.http_API.post<IEventoRespuesta>(PathRest.FIN_EVENTO, {"evento_id": evento_id});
  }

  delEvento(evento_id: string):Observable<IEventoRespuesta>{
    return this.http_API.delete<IEventoRespuesta>(PathRest.DEL_EVENTO+'/'+evento_id);
  }

  getJugadores():Observable<IJugadorRespuesta>{
    return this.http_API.get<IJugadorRespuesta>(PathRest.GET_JUGADORES);
  }

  newJugador(datosJugador: FormData):Observable<IJugadorRespuesta>{
    return this.http_API.post<IJugadorRespuesta>(PathRest.NEW_JUGADOR, datosJugador);
  }

  delJugador(jugador_id: string):Observable<IJugadorRespuesta>{
    return this.http_API.delete<IJugadorRespuesta>(PathRest.DEL_JUGADOR+'/'+jugador_id);
  }

  getRondas(evento_id: number): Observable<IRondasRespuesta>{
    return this.http_API.post<IRondasRespuesta>(PathRest.GET_RONDAS, {"evento_id": evento_id});
  }

  getRondaNueva(evento_id: number): Observable<IRondaNuevaRespuesta>{
    return this.http_API.post<IRondaNuevaRespuesta>(PathRest.GET_NUEVA_RONDA, {"evento_id": evento_id});
  }

  getBoletas(evento_id: string, ronda_id: string): Observable<IBoletasRespuesta>{
    return this.http_API.post<IBoletasRespuesta>(PathRest.GET_BOLETAS, {"evento_id": evento_id, "ronda_id": ronda_id});
  }

  getBoletasCompleta(evento_id: number, ronda_id: number): Observable<IBoletasCompletaRespuesta>{
    return this.http_API.post<IBoletasCompletaRespuesta>(PathRest.GET_BOLETAS_COMPLETA, {"evento_id": evento_id, "ronda_id": ronda_id});
  }

  getMesas(evento_id: string): Observable<IMesasRespuesta>{
    return this.http_API.post<IMesasRespuesta>(PathRest.GET_MESAS, {"evento_id": evento_id});
  }

  getParejas(evento_id: string): Observable<IParejasRespuesta>{
    return this.http_API.post<IParejasRespuesta>(PathRest.GET_PAREJAS, {"evento_id": evento_id});
  }

  newPareja(datosPareja: FormData):Observable<IPareja>{
    return this.http_API.post<IPareja>(PathRest.NEW_PAREJA, datosPareja);
  }



}
