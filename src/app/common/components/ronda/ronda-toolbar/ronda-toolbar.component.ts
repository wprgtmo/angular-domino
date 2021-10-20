import { IRonda } from './../../../models/ronda.interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ronda-toolbar',
  templateUrl: './ronda-toolbar.component.html',
  styleUrls: ['./ronda-toolbar.component.css']
})
export class RondaToolbarComponent implements OnInit {
  @Input() rondas?: IRonda[] ;

  ronda_activa= 50;
  // (this.rondas==undefined)? 0 : this.rondas[0]?.id

  constructor() { }

  ngOnInit(): void {
  }


}
