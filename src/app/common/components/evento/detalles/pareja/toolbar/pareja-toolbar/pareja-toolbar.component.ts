import { Router } from '@angular/router';
import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { IEvento } from 'src/app/common/models/interface/evento.interface';
import { Observable, Subscription } from 'rxjs';
import { EventosService } from 'src/app/state/facade/eventos.service';

@Component({
  selector: 'app-pareja-toolbar',
  templateUrl: './pareja-toolbar.component.html',
  styleUrls: ['./pareja-toolbar.component.css'],
})
export class ParejaToolbarComponent implements OnInit, OnDestroy {
  private eventoSeleccionado: IEvento | undefined;
  
  evento$: Observable<IEvento>= new Observable();
  subs?: Subscription;

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
    private eventosService: EventosService
  ) {}

  ngOnInit(): void {
      this.subs= this.eventosService.getEventoSeleccionado$().subscribe((evento) => this.eventoSeleccionado= evento);
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
    this.subs?.unsubscribe();
  }
}
