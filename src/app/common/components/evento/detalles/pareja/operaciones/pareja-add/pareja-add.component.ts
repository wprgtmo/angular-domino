import { Component, Input, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { MatInput } from '@angular/material/input';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IEvento } from 'src/app/common/models/interface/evento.interface';
import { IJugador } from 'src/app/common/models/interface/jugador.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { EventosService } from 'src/app/state/facade/eventos.service';

@Component({
  selector: 'app-pareja-add',
  templateUrl: './pareja-add.component.html',
  styleUrls: ['./pareja-add.component.css'],
})
export class ParejaAddComponent implements OnInit, OnDestroy {
  @Input() jugadores?: IJugador[];
  @ViewChild('nombrePareja') nombrePareja?: MatInput;
  public loading = false;
  private subscribeSelectionService?: Subscription;
  private eventoSeleccionado?: IEvento;
  public parejaAddFrm?: UntypedFormGroup;
  private nombrePareja1 = '';
  private nombrePareja2 = '';
  id$: Observable<number> = new Observable();
  subs?: Subscription;


  jugadoresParejas = new Set<IJugador>();

  constructor(
    // private seleccionService: SeleccionService,
    private eventosService: EventosService,
    private dominoApiService: DominoApiService,
    private ruta: Router
  ) {
    this.loadBuilder();
  }

  ngOnInit() {
    this.subs= this.eventosService.getEventoSeleccionado$().subscribe((evento) => this.eventoSeleccionado= evento);
  }

  loadBuilder(): void {
    this.parejaAddFrm = new UntypedFormGroup({
      nombre: new UntypedFormControl(''),
      jugador1: new UntypedFormControl(''),
      jugador2: new UntypedFormControl(''),
    });
  }

  onClick() {
    let nombre = this.parejaAddFrm?.get('nombre')?.value;
    let evento_id = this.eventoSeleccionado?.id;
    let jugador1 = this.parejaAddFrm?.get('jugador1')?.value;
    let jugador2 = this.parejaAddFrm?.get('jugador2')?.value;
    try {
      this.loading = true;

      const frmData = new FormData();
      frmData.append('nombre', nombre);
      frmData.append(
        'evento_id',
        evento_id == undefined ? '0' : evento_id.toString()
      );
      frmData.append('jugador1_id', jugador1.id);
      frmData.append('jugador2_id', jugador2.id);

      console.log(frmData);

      this.dominoApiService.newPareja(frmData).subscribe((datos) => {
        console.log(datos);
        this.loading = false;
        this.ruta.navigateByUrl('parejas');
      });
    } catch (error) {
      this.loading = false;
    }
  }

  ngOnDestroy() {
    this.subs?.unsubscribe();
  }

  jugador1Change(jugador1: MatSelectChange) {
    this.nombrePareja1 = jugador1.source.value.alias + ' - ';

    if (this.parejaAddFrm && this.parejaAddFrm.get('nombre'))
      this.parejaAddFrm
        .get('nombre')!
        .setValue(this.nombrePareja1 + this.nombrePareja2);
  }

  jugador2Change(jugador2: MatSelectChange) {
    this.nombrePareja2 = jugador2.source.value.alias;
    if (this.parejaAddFrm && this.parejaAddFrm.get('nombre'))
      this.parejaAddFrm
        .get('nombre')!
        .setValue(this.nombrePareja1 + this.nombrePareja2);

  }
}
