import { Component, OnInit } from '@angular/core';
import { PathRest } from 'src/app/common/static/path-rest';

@Component({
  selector: 'app-publicidad-imagen',
  templateUrl: './publicidad-imagen.component.html',
  styleUrls: ['./publicidad-imagen.component.css']
})
export class PublicidadImagenComponent implements OnInit {
  
  public imagenPub = "";

  constructor() { }

  ngOnInit(): void {
    this.imagenPub= PathRest.URL_IMG_PUBLICIDAD +  "publicidad1.jpg";
  }

}
