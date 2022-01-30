import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { IJugador } from '../../../../common/models/interface/jugador.interface';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './jugador-page.component.html',
  styleUrls: ['./jugador-page.component.css']
})
export class JugadorPageComponent implements OnInit {

  private subscribeDominoApiService: Subscription | undefined;
  public listaJugadores: IJugador[] | undefined;

  constructor(private dominoApiService:DominoApiService) { }


  ngOnInit(): void {
    this.subscribeDominoApiService= this.dominoApiService.getJugadores().subscribe((jugadores)=>{
     this.listaJugadores= jugadores.jugadores;
   })
 }

 ngOnDestroy(): void{
   this.subscribeDominoApiService?.unsubscribe();
 }

}
