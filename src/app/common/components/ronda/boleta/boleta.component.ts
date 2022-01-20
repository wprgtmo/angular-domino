import { IPareja } from 'src/app/common/models/pareja.interface';
import { IBoletaCompleta } from './../../../models/boleta-completa.interface';
import { Component, Input } from '@angular/core';
import { PathRest } from 'src/app/common/static/path-rest';

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.css']
})
export class BoletaComponent {
  @Input() boleta?: IBoletaCompleta;

  constructor() { }

  getPareja(pareja: number): IPareja | undefined{
    if (this.boleta != undefined){
      return this.boleta?.boleta_parejas[pareja]?.pareja;
    } else
    return this.boleta;

  }

  foto(fotoJugador?: string): string{
    return (fotoJugador)? PathRest.URL_BASE + fotoJugador : "";
  }
}
