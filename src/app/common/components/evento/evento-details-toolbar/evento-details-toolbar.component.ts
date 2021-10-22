import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { IEvento } from 'src/app/common/models/evento.interface';


@Component({
  selector: 'app-evento-details-toolbar',
  templateUrl: './evento-details-toolbar.component.html',
  styleUrls: ['./evento-details-toolbar.component.css']
})
export class EventoDetailsToolbarComponent implements OnInit {
  private subscribeSelectionService: Subscription | undefined;
  eventoSeleccionado: IEvento | undefined;

  constructor(private ruta: Router, private seleccionService: SeleccionService) { }

  ngOnInit(): void {
    this.subscribeSelectionService= this.seleccionService.channel.subscribe((evento)=>{
      this.eventoSeleccionado = evento;
      this.mostrarEvento();
    });
 }

 ngOnDestroy(): void{
   this.subscribeSelectionService?.unsubscribe();
 }


  mostrarEvento() {
    if (this.eventoSeleccionado!==undefined){
      this.mostrarEstadoCreado();
      this.mostrarEstadoIniciado()
      this.mostrarEstadoFinalizado();
    }


  }

  mostrarEstadoCreado() {
    return !(this.eventoSeleccionado?.estado == 'C');
  }

  mostrarEstadoIniciado() {
    return !(this.eventoSeleccionado?.estado == 'I');
  }

  mostrarEstadoFinalizado() {
    return !(this.eventoSeleccionado?.estado == 'F');
  }


  estado() {
    switch (this.eventoSeleccionado?.estado) {
      case "C": return "Creado"; break;
      case "I": return "Iniciado"; break;
      case "F": return "Finalizado"; break;
      default: return "Sin estado"; break;
    }
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
}
