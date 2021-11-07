import { IPareja } from './../../../models/pareja.interface';
import { IBoletaPareja } from './../../../models/boleta-pareja.interface';
import { IJugador } from './../../../models/jugador.interface';
import { IBoletaCompleta } from './../../../models/boleta-completa.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.css']
})
export class BoletaComponent implements OnInit {
  @Input() boleta?: IBoletaCompleta;

  URLFoto: String="http://localhost/domino_api/";
  boletaParejas?: IBoletaPareja[];
  pareja1?: IPareja;
  pareja2?: IPareja;
  jugador?: Array<IJugador>=[];
  constructor() { }

  ngOnInit(): void {
    if (this.boleta != undefined){
      if (this.boleta?.boleta_parejas!= undefined){
        this.boletaParejas= this.boleta?.boleta_parejas;
        if (this.boletaParejas[0].pareja != undefined){
          this.pareja1=this.boletaParejas[0].pareja;
          this.jugador?.push(this.pareja1.jugador1);
          this.jugador?.push(this.pareja1.jugador2);
        }

        if (this.boletaParejas[1].pareja != undefined){
          this.pareja2=this.boletaParejas[1].pareja;
          this.jugador?.push(this.pareja2.jugador1);
          this.jugador?.push(this.pareja2.jugador2);
        }
      }
    }
  }

  foto(indice:  number): string{
      return this.URLFoto + this.jugador![indice].foto;
  }
}
