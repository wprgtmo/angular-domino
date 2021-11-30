import { IJugador } from 'src/app/common/models/jugador.interface';
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




  // mostrarIniciar() {
  //   return (this.jugadorSeleccionado?.estado == 'C');
  // }

  // mostrarFinalizar() {
  //   return (this.jugadorSeleccionado?.estado == 'I');
  // }

  // mostrarEliminar() {
  //   return (this.jugadorSeleccionado?.estado == 'F');
  // }

  estado() {
    switch (this.jugadorSeleccionado?.id) {
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

  iniciarEvento(){
    this.dominoApiService.iniciarEvento(this.jugadorSeleccionado!.id.toString()).subscribe((datos)=>{
      console.log(datos);
      this.ruta.navigateByUrl('eventsCard');
    })
  }

  finalizarEvento(){
    this.dominoApiService.finalizarEvento(this.jugadorSeleccionado!.id.toString()).subscribe((datos)=>{
      console.log(datos);
      this.ruta.navigateByUrl('eventsCard');
    })
  }

  eliminarEvento(){
    this.dominoApiService.delEvento(this.jugadorSeleccionado!.id.toString()).subscribe((datos)=>{
      console.log(datos);
      this.ruta.navigateByUrl('eventsCard');
    })
  }
}
