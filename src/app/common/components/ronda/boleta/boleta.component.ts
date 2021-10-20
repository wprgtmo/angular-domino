import { Component, OnInit, Input } from '@angular/core';
import { IBoleta } from 'src/app/common/models/boleta.interface';

@Component({
  selector: 'app-boleta',
  templateUrl: './boleta.component.html',
  styleUrls: ['./boleta.component.css']
})
export class BoletaComponent implements OnInit {
  @Input() boleta?: IBoleta;
  constructor() { }

  ngOnInit(): void {
  }

}
