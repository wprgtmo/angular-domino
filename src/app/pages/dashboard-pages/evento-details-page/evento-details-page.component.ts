import { Component, OnInit } from '@angular/core';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { Subscription } from 'rxjs';
import { IEvento } from 'src/app/common/models/evento.interface';

@Component({
  templateUrl: './evento-details-page.component.html',
  styleUrls: ['./evento-details-page.component.css'],
})
export class EventoDetailsPageComponent implements OnInit {
  private subscribeSelectionService: Subscription | undefined;
  public eventoSeleccionado?: IEvento;

  constructor(private seleccionService: SeleccionService) {}

  ngOnInit(): void {
    this.subscribeSelectionService = this.seleccionService.channel.subscribe(
      (evento) => {
        this.eventoSeleccionado = evento;
      }
    );
  }
}
