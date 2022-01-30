import { Router } from '@angular/router';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IEvento } from 'src/app/common/models/interface/evento.interface';
import { Subscription } from 'rxjs';
import { SeleccionService } from 'src/app/common/services/seleccion.service';

@Component({
  selector: 'app-pareja-toolbar',
  templateUrl: './pareja-toolbar.component.html',
  styleUrls: ['./pareja-toolbar.component.css'],
})
export class ParejaToolbarComponent implements OnInit, OnDestroy {
  private subscribeSelectionService: Subscription | undefined;
  private eventoSeleccionado: IEvento | undefined;

  @Input() isLista?: number;

  view = [
    {
      icono: 'view_module_white',
      tooltip: 'Ver tarjetas',
      url: 'parejas',
    },
    {
      icono: 'view_list_white',
      tooltip: 'Ver lista',
      url: 'parejaList',
    },
  ];
  constructor(
    private ruta: Router,
    private seleccionService: SeleccionService
  ) {}

  ngOnInit(): void {
    this.subscribeSelectionService =
      this.seleccionService.channelEvent.subscribe((evento) => {
        this.eventoSeleccionado = evento;
      });
  }

  parejaAdd() {
    this.ruta.navigateByUrl('parejaAdd');
  }

  viewPareja(): void {
    this.ruta.navigateByUrl(this.view[this.mostrandoLista()].url);
  }

  mostrandoLista(): number {
    return this.isLista == undefined || this.isLista == 0 ? 0 : 1;
  }

  mostrarAdd(){
    return this.eventoSeleccionado?.estado=='C';
  }

  ngOnDestroy(): void {
    this.subscribeSelectionService?.unsubscribe();
  }
}
