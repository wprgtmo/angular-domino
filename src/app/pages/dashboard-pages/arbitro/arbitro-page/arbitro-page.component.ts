import { ArbitrosService } from './../../../../state/facade/arbitros.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IArbitro } from 'src/app/common/models/interface/arbitro.interface';

@Component({
  templateUrl: './arbitro-page.component.html',
  styleUrls: ['./arbitro-page.component.css']
})
export class ArbitroPageComponent implements OnInit {
  
  arbitros$: Observable<IArbitro[]> = new Observable();

  constructor(private arbitrosService:ArbitrosService) { }


  ngOnInit(): void {
    this.arbitrosService.mostrarArbitrosComoTarjetas();
    this.arbitrosService.cargarArbitros();
    this.arbitros$= this.arbitrosService.getArbitros$();
 }

}
