import { Component, OnInit } from '@angular/core';
import { PathRest } from 'src/app/common/static/path-rest';

@Component({
  selector: 'app-publicidad-video',
  templateUrl: './publicidad-video.component.html',
  styleUrls: ['./publicidad-video.component.css']
})
export class PublicidadVideoComponent implements OnInit {

  public videoPub = "";

  constructor() { }

  ngOnInit(): void {
    this.videoPub= PathRest.URL_IMG_PUBLICIDAD +  "videoPub.mp4";
  }

}
