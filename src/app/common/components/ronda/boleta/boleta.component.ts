import { IBoletaCompleta } from '../../../models/interface/boleta-completa.interface';
import { Component, Input, OnInit } from '@angular/core';
import { PathRest } from 'src/app/common/static/path-rest';
import { IPareja } from 'src/app/common/models/interface/pareja.interface';
import { IBoletaPareja } from 'src/app/common/models/interface/boleta-pareja.interface';
import { IEstadisticaBoleta } from 'src/app/common/models/interface/estadistica-boleta.interface';

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.css'],
})
export class BoletaComponent implements OnInit {
  @Input() boleta?: IBoletaCompleta;

  constructor() {}

  ngOnInit() {

  }

  getPareja(pareja: number): IPareja | undefined {
    if (this.boleta != undefined) {
      return this.boleta?.boleta_parejas[pareja]?.pareja;
    } else return this.boleta;
  }


  getBoletaPareja(pareja: number): IBoletaPareja | undefined {
    if (this.boleta != undefined) {
      return this.boleta?.boleta_parejas[pareja];
    } else return this.boleta;
  }

  getEstadistica(pareja: number): IEstadisticaBoleta {
    if (this.boleta?.estadistica[0].pareja_id == pareja)
      return this.boleta!.estadistica[0];
    else return this.boleta!.estadistica[1];
  }

  getCantDatasGanadas(pareja?: number): number {
    if ((pareja) && (this.boleta) && (this.boleta.estadistica?.length > 0))
      return this.getEstadistica(pareja)!.CantDatasGanadas;
    else return 0;
  }

  SumaDatasGanadas(): number {
    if ((this.boleta) && (this.boleta.estadistica?.length > 0))
      return  parseInt(this.boleta!.estadistica[0].CantDatasGanadas.toString()) + parseInt(this.boleta!.estadistica[1].CantDatasGanadas.toString());
    else return 0;
  }

  getTotalPuntos(pareja?: number): number {
    if ((pareja) && (this.boleta) && (this.boleta.estadistica?.length > 0))
      return this.getEstadistica(pareja)!.CantPuntos;
    else return 0;
  }

  SumaTotalPuntos(): number {
    if ((this.boleta) && (this.boleta.estadistica?.length > 0))
      return  parseInt(this.boleta!.estadistica[0].CantPuntos.toString()) + parseInt(this.boleta!.estadistica[1].CantPuntos.toString());
    else return 0;
  }

  getDuracionDatas(pareja?: number): number {
    if ((pareja) && (this.boleta) && (this.boleta.estadistica?.length > 0))
      return this.getEstadistica(pareja)!.DuracionDatas;
    else return 0;
  }

  SumaDuracionDatas(): number {
    if ((this.boleta) && (this.boleta.estadistica?.length > 0))
      return  parseInt(this.boleta!.estadistica[0].DuracionDatas.toString()) + parseInt(this.boleta!.estadistica[1].DuracionDatas.toString());
    else return 0;
  }

  suma(a: number, b: number): number{
    return a+b
  }

  foto(fotoJugador?: string): string {
    return fotoJugador ? PathRest.URL_BASE + fotoJugador : '';
  }
}
