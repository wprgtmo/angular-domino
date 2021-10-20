import { Component, Input, OnInit } from '@angular/core';
import { IMesa } from '../../models/mesa.interface';

@Component({
  selector: 'app-mesa',
  templateUrl: './mesa.component.html',
  styleUrls: ['./mesa.component.css']
})
export class MesaComponent implements OnInit {
  @Input() mesa?: IMesa;

  constructor() { }

  ngOnInit(): void {
  }

}
