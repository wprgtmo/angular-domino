import { environment } from "src/environments/environment";

export class PathRest{
  //static readonly GET_EVENTOS= environment.API_URL + 'eventos';
  static readonly GET_EVENTOS= '/api/eventos';
  static readonly GET_JUGADORES= '/api/jugadores';
  static readonly GET_RONDAS= '/api/evento/rondas';
  static readonly GET_NUEVA_RONDA= '/api/evento/ronda/nueva';
}
