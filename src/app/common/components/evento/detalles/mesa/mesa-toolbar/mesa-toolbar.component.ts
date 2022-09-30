import { EventosService } from './../../../../../../state/facade/eventos.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { IEvento } from 'src/app/common/models/interface/evento.interface';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-mesa-toolbar',
  templateUrl: './mesa-toolbar.component.html',
  styleUrls: ['./mesa-toolbar.component.css']
})
export class MesaToolbarComponent implements OnInit, OnDestroy {  
  
  private eventoSeleccionado: IEvento | undefined;
  
  evento$: Observable<IEvento>= new Observable();
  subs?: Subscription;

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
    ) { }

  ngOnInit(): void {
    this.subs= this.eventosService.getEventoSeleccionado$().subscribe((evento) => this.eventoSeleccionado= evento);
  }

  mostrarAdd(){
    return this.eventoSeleccionado?.estado=='C';
  }

  mesaAdd(): void{
    
  }

  mostrandoLista(): number{
    return 1
  }

  viewMesas(): void{    
    this.ruta.navigateByUrl(this.view[this.mostrandoLista()].url);
  }

  ngOnDestroy(): void {
    this.subs?.unsubscribe();
  }
}
