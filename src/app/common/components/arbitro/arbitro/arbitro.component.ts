import { IArbitro } from './../../../models/interface/arbitro.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathRest } from 'src/app/common/static/path-rest';
import { SeleccionService } from 'src/app/common/services/seleccion.service';

@Component({
  selector: 'app-arbitro',
  templateUrl: './arbitro.component.html',
  styleUrls: ['./arbitro.component.css']
})
export class ArbitroComponent implements OnInit {
  @Input() arbitro?: IArbitro;

  fotoJugador: string | undefined;

  constructor(private ruta: Router, private seleccionService: SeleccionService) { }

  ngOnInit(){
    this.fotoJugador= PathRest.URL_BASE + this.arbitro?.foto;
  }
  seleccionarArbitro(){
    // if (this.arbitro!==undefined)
    //   this.seleccionService.setJugadorSeleccionado(this.arbitro);
    this.ruta.navigateByUrl('arbitroDetails');
  }

}
