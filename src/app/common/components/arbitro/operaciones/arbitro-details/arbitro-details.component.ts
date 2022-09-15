import { ArbitrosService } from './../../../../../state/facade/arbitros.service';
import { Component, Input, OnInit } from '@angular/core';
import { PathRest } from 'src/app/common/static/path-rest';
import { IArbitro } from 'src/app/common/models/interface/arbitro.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-arbitro-details',
  templateUrl: './arbitro-details.component.html',
  styleUrls: ['./arbitro-details.component.css']
})
export class ArbitroDetailsComponent implements OnInit {

  arbitro$: Observable<IArbitro | undefined> = new Observable();
  fotoArbitro?: string;

  constructor(private arbitrosService: ArbitrosService) { }

  ngOnInit(){
    this.arbitro$= this.arbitrosService.getArbitroSeleccionado$();
  }

  getFoto(foto: string): string{
    return PathRest.URL_IMG_ARBITROS + foto;
  }


}
