import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IJugador } from 'src/app/common/models/interface/jugador.interface';
import { SeleccionService } from 'src/app/common/services/seleccion.service';

@Component({
  templateUrl:'./jugador-detail-page.component.html',
  styleUrls: ['./jugador-detail-page.component.css']
})
export class JugadorDetailPageComponent implements OnInit {
  private subscribeSelectionService: Subscription | undefined;
  public jugadorSeleccionado?: IJugador;


  constructor(private seleccionService: SeleccionService) {}

  ngOnInit(): void {
    this.subscribeSelectionService = this.seleccionService.channelJugador.subscribe(
      (jugador) => {
        this.jugadorSeleccionado = jugador;
      }
    );
  }
}
