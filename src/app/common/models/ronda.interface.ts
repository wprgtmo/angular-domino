export interface IRonda {
  id          : number;
  numero      : string;
  evento_id   : string;
  dia         : number;
  cerrada     : boolean;
  comentario  : string;
  inicio      : Date;
  cierre      : Date;
  duracion    : number;
}
