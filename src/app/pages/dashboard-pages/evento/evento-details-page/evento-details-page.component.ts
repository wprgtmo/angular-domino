import { Component, Input, OnInit } from '@angular/core';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { Subscription } from 'rxjs';
import { IEvento } from 'src/app/common/models/evento.interface';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: './evento-details-page.component.html',
  styleUrls: ['./evento-details-page.component.css'],
})
export class EventoDetailsPageComponent implements OnInit {
  private subscribeSelectionService: Subscription | undefined;
  public eventoSeleccionado?: IEvento;
  @Input() isLista?: number;

  constructor(
    private route: ActivatedRoute,
    private ruta: Router,
    private seleccionService: SeleccionService
  ) {
    this.route.queryParams.subscribe((params) => {
      if (this.ruta?.getCurrentNavigation()?.extras) {
        this.isLista = params.isLista;
      }
    });
  }

  ngOnInit(): void {
    this.subscribeSelectionService = this.seleccionService.channelEvent.subscribe(
      (evento) => {
        this.eventoSeleccionado = evento;
      }
    );
  }
}
