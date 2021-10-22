export interface IBoleta {
  id: number;
  evento_id: number;
  ronda_id: number;
  mesa_id: number;
  es_valida: boolean;
  fecha_registro: Date;
}
