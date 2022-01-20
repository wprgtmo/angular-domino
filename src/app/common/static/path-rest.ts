import { environment } from "src/environments/environment";

export class PathRest{
  //static readonly GET_EVENTOS= environment.API_URL + 'eventos';
  static readonly URL_BASE              ="http://localhost/domino_api/";

  static readonly GET_EVENTOS           = '/api/eventos';
  static readonly NEW_EVENTO            = '/api/eventos/crear';
  static readonly INIT_EVENTO           = '/api/eventos/iniciar';
  static readonly FIN_EVENTO            = '/api/eventos/finalizar';
  static readonly DEL_EVENTO            = '/api/eventos/eliminar';


  static readonly GET_RONDAS            = '/api/evento/rondas';
  static readonly GET_NUEVA_RONDA       = '/api/evento/ronda/nueva';

  static readonly GET_BOLETAS           = '/api/evento/boletas';
  static readonly GET_BOLETAS_COMPLETA  = '/api/evento/boletas/completa';

  static readonly GET_MESAS             = '/api/evento/mesas';
  static readonly GET_PAREJAS           = '/api/evento/parejas';
  static readonly GET_JUGADORES         = '/api/jugadores';
  static readonly NEW_PAREJA            = '/api/parejas/create';


  static readonly NEW_JUGADOR            = '/api/jugadores/crear';
  static readonly DEL_JUGADOR            = '/api/jugadores/eliminar';
}
