import { IArbitro } from './../../../models/interface/arbitro.interface';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PathRest } from 'src/app/common/static/path-rest';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { ArbitrosService } from 'src/app/state/facade/arbitros.service';

@Component({
  selector: 'app-arbitro',
  templateUrl: './arbitro.component.html',
  styleUrls: ['./arbitro.component.css']
})
export class ArbitroComponent implements OnInit {
  @Input() arbitro?: IArbitro;

  fotoArbitro?: string;

  constructor(private ruta: Router, private arbitrosService: ArbitrosService) { }

  ngOnInit(){
    this.fotoArbitro= PathRest.URL_IMG_ARBITROS + this.arbitro?.foto;
  

  seleccionarArbitro(){
    if (this.arbitro!==undefined){
      this.arbitrosService.SeleccionarArbitro(this.arbitro.id);
      this.ruta.navigateByUrl('arbitroDetails');
    }
  }

}
