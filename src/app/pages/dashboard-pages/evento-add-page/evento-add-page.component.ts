import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { IEvento } from 'src/app/common/models/evento.interface';
import { Router } from '@angular/router';
import { DominoApiService } from 'src/app/common/services/domino-api.service';


@Component({
  templateUrl: './evento-add-page.component.html',
  styleUrls: ['./evento-add-page.component.css']
})
export class EventoAddPageComponent {

  public eventoAddFrm: FormGroup | undefined;

  public evento: IEvento[] | undefined;

  constructor(private dominoApiService: DominoApiService, private ruta: Router) {
    this.loadBuilder();
  }

  loadBuilder(): void {
    this.eventoAddFrm = new FormGroup({
      nombre: new FormControl(''),
      comentario: new FormControl(''),
      fecha_inicio: new FormControl(new Date()),
      fecha_cierre: new FormControl(new Date())
    });
  }


  onClick(): void {
    this.dominoApiService.newEvento(this.eventoAddFrm?.value).subscribe((datos)=>{
      console.log("Respuesta", datos);
    })
  }

}
