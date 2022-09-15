import { Component, Input, OnInit } from '@angular/core';
import { PathRest } from 'src/app/common/static/path-rest';
import { IMesa } from '../../../../../models/interface/mesa.interface';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {
  @Input() mesa?: IMesa;
  public fotoMesa = "";

  constructor() { }

  ngOnInit(): void {
    this.fotoMesa= PathRest.URL_IMG_MESAS +  this.mesa?.imagen;
  }

}
