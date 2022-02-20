import { environment } from './../../../environments/environment';
export class PathRest{
  static readonly URL_BASE              = 'http://localhost/domino_api/';
  
  static readonly URL_BASE_API          = environment.API_URL;
  
  static readonly GET_EVENTOS           = PathRest.URL_BASE_API + '/api/eventos';
  static readonly NEW_EVENTO            = PathRest.URL_BASE_API + '/api/eventos/crear';
  static readonly INIT_EVENTO           = PathRest.URL_BASE_API + '/api/eventos/iniciar';
  static readonly FIN_EVENTO            = PathRest.URL_BASE_API + '/api/eventos/finalizar';
  static readonly DEL_EVENTO            = PathRest.URL_BASE_API + '/api/eventos/eliminar';

  static readonly GET_RONDAS            = PathRest.URL_BASE_API + '/api/evento/rondas';
  static readonly GET_NUEVA_RONDA       = PathRest.URL_BASE_API + '/api/evento/ronda/nueva';
  
  static readonly GET_ESTADISTICA_RONDA = PathRest.URL_BASE_API + '/api/evento/estadisticaRonda';

  static readonly GET_BOLETAS           = PathRest.URL_BASE_API + '/api/evento/boletas';
  static readonly GET_BOLETAS_COMPLETA  = PathRest.URL_BASE_API + '/api/evento/boletas/completa';

  static readonly GET_MESAS             = PathRest.URL_BASE_API + '/api/evento/mesas';
  static readonly GET_PAREJAS           = PathRest.URL_BASE_API + '/api/evento/parejas';
  static readonly NEW_PAREJA            = PathRest.URL_BASE_API + '/api/parejas/create';
  
  static readonly GET_ARBITROS          = PathRest.URL_BASE_API + '/api/arbitros';
  static readonly NEW_ARBITRO           = PathRest.URL_BASE_API + '/api/arbitros/crear';
  static readonly DEL_ARBITRO           = PathRest.URL_BASE_API + '/api/arbitros/eliminar';
  
  static readonly GET_JUGADORES         = PathRest.URL_BASE_API + '/api/jugadores';
  static readonly NEW_JUGADOR           = PathRest.URL_BASE_API + '/api/jugadores/crear';
  static readonly DEL_JUGADOR           = PathRest.URL_BASE_API + '/api/jugadores/eliminar';
}
