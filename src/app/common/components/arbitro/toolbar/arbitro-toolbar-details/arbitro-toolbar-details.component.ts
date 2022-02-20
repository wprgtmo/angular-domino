import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { IArbitro } from 'src/app/common/models/interface/arbitro.interface';
import { ArbitrosService } from './../../../../../state/facade/arbitros.service';

@Component({
  selector: 'app-arbitro-toolbar-details',
  templateUrl: './arbitro-toolbar-details.component.html',
  styleUrls: ['./arbitro-toolbar-details.component.css']
})
export class ArbitroToolbarDetailsComponent implements OnInit {

  arbitro$:Observable<IArbitro|undefined>= new Observable();

  constructor(private arbitrosService: ArbitrosService, private ruta: Router ) { }

  ngOnInit(): void {
    this.arbitro$= this.arbitrosService.getArbitroSeleccionado$();
 }

  eliminarArbitro(arbitro_id: number){
    console.log(arbitro_id);
    this.arbitrosService.EliminarArbitro(arbitro_id);
    this.ruta.navigateByUrl('arbitrosCard');
  }
}
