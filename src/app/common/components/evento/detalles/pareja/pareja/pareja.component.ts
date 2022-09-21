import { Component, Input, OnInit } from '@angular/core';
import { IJugador } from 'src/app/common/models/interface/jugador.interface';
import { IPareja } from 'src/app/common/models/interface/pareja.interface';
import { PathRest } from 'src/app/common/static/path-rest';

@Component({
  selector: 'app-pareja',
  templateUrl: './pareja.component.html',
  styleUrls: ['./pareja.component.css']
})
export class ParejaComponent implements OnInit {
  @Input() pareja?: IPareja;
  public jugador1?: IJugador;
  public jugador2?: IJugador;
  public fotoJugador1="";
  public fotoJugador2="";
  constructor() { }

  ngOnInit(): void {
    this.jugador1= this.pareja?.jugador1;
    this.jugador2= this.pareja?.jugador2;
    this.fotoJugador1= PathRest.URL_IMG_JUGADORES + this.jugador1?.foto;
    this.fotoJugador2= PathRest.URL_IMG_JUGADORES +  this.jugador2?.foto;
  }

}
