import { Component, OnInit } from '@angular/core';
import { IJugador } from 'src/app/common/models/jugador.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { Subscription } from 'rxjs';

@Component({
  templateUrl: './pareja-add-page.component.html',
  styleUrls: ['./pareja-add-page.component.css']
})
export class ParejaAddPageComponent implements OnInit {

  private subscribeDominoApiService: Subscription | undefined;
  public listaJugadores: IJugador[] | undefined;

  constructor(private dominoApiService:DominoApiService) { }


  ngOnInit(): void {
    this.subscribeDominoApiService= this.dominoApiService.getJugadores().subscribe((jugadores)=>{
     console.log(jugadores);
     this.listaJugadores= jugadores.jugadores;
   })
 }

 ngOnDestroy(): void{
   this.subscribeDominoApiService?.unsubscribe();
 }
}
