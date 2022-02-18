import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IArbitro } from 'src/app/common/models/interface/arbitro.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { SeleccionService } from 'src/app/common/services/seleccion.service';

@Component({
  selector: 'app-arbitro-toolbar-details',
  templateUrl: './arbitro-toolbar-details.component.html',
  styleUrls: ['./arbitro-toolbar-details.component.css']
})
export class ArbitroToolbarDetailsComponent implements OnInit {

  arbitro$:Observable<IArbitro>= new Observable();

  constructor(private ruta: Router, private seleccionService: SeleccionService, private dominoApiService: DominoApiService) { }

  ngOnInit(): void {
    // this.arbitro$= this.seleccionService.channelJugador();
 }

 ngOnDestroy(): void{
 }


  rondas() {
    this.ruta.navigateByUrl('rondas');
  }

  mesas() {
    this.ruta.navigateByUrl('mesas');
  }

  parejas() {
    this.ruta.navigateByUrl('parejas');
  }

  eliminarJugador(){
    // this.dominoApiService.delJugador(this.arbitro!.id.toString()).subscribe((datos)=>{
    //   this.ruta.navigateByUrl('arbitroCard');
    // })
  }
}
