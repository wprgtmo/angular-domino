import { environment } from "src/environments/environment";

export class PathRest{
  //static readonly GET_EVENTOS= environment.API_URL + 'eventos';
  static readonly GET_EVENTOS= '/api/eventos';
  static readonly NEW_EVENTO= '/api/eventos/create';
  static readonly DEL_EVENTO= '/api/eventos/delete';
  static readonly GET_JUGADORES= '/api/jugadores';
  static readonly GET_RONDAS= '/api/evento/rondas';
  static readonly GET_NUEVA_RONDA= '/api/evento/ronda/nueva';
  static readonly GET_BOLETAS= '/api/evento/boletas';
  static readonly GET_MESAS= '/api/evento/mesas';
  static readonly GET_PAREJAS= '/api/evento/parejas';
}
