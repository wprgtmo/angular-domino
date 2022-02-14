import { IJugador } from 'src/app/common/models/interface/jugador.interface';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { DominoApiService } from 'src/app/common/services/domino-api.service';

@Component({
  selector: 'app-jugador-toolbar-details',
  templateUrl: './jugador-toolbar-details.component.html',
  styleUrls: ['./jugador-toolbar-details.component.css']
})
export class JugadorToolbarDetailsComponent implements OnInit {
  private subscribeSelectionService: Subscription | undefined;
  jugadorSeleccionado: IJugador | undefined;

  constructor(private ruta: Router, private seleccionService: SeleccionService, private dominoApiService: DominoApiService) { }

  ngOnInit(): void {
    this.subscribeSelectionService= this.seleccionService.channelJugador.subscribe((jugador)=>{
      this.jugadorSeleccionado = jugador;
    });
 }

 ngOnDestroy(): void{
   this.subscribeSelectionService?.unsubscribe();
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
    this.dominoApiService.delJugador(this.jugadorSeleccionado!.id.toString()).subscribe((datos)=>{
      this.ruta.navigateByUrl('playersCard');
    })
  }
}
