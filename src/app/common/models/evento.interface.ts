export interface IEvento{
  id            : number;
  ciudad_id     : number;
  nombre        : string;
  comentario    : string;
  cerrado       : boolean;
  fecha_inicio  : Date;
  fecha_cierre  : Date;
  creado        : Date;
  actualizado   : Date;
}

