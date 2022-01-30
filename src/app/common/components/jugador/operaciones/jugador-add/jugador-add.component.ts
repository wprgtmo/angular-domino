import { IJugador } from 'src/app/common/models/interface/jugador.interface';
import { Moment } from 'moment/moment';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import * as moment from 'moment/moment';

@Component({
  selector: 'app-jugador-add',
  templateUrl: './jugador-add.component.html',
  styleUrls: ['./jugador-add.component.css']
})
export class JugadorAddComponent {
  public archivo: any;
  public preview: string | undefined;
  public loading= false;


  public jugadorAddFrm: FormGroup | undefined;

  public jugador: IJugador[] | undefined;

  constructor(
    private dominoApiService: DominoApiService,
    private ruta: Router,
    private sanitizer: DomSanitizer) {
    this.loadBuilder();
  }

  loadBuilder(): void {
    this.jugadorAddFrm = new FormGroup({
      nombre: new FormControl(''),
      alias: new FormControl(''),
      telefono: new FormControl(''),
      sexo: new FormControl(''),
      correo: new FormControl(''),
      nro_identidad: new FormControl(''),
      comentario: new FormControl(''),
      ocupacion: new FormControl(''),
      nivel: new FormControl(''),
      elo: new FormControl(''),
      ranking: new FormControl(''),
      tipo: new FormControl(''),
      foto: new FormControl(''),
      fecha_nacimiento: new FormControl(moment(new Date())),
      ciudad_id: new FormControl('')
    });
  }

  onClick(): void {
    let fecha_nacimiento=this.jugadorAddFrm?.get('fecha_nacimiento')?.value;
    try {
      this.loading= true;
      const frmData= new FormData();
      frmData.append('nombre', this.jugadorAddFrm?.get('nombre')?.value);
      frmData.append('telefono', this.jugadorAddFrm?.get('telefono')?.value);
      frmData.append('sexo', 'M');
      frmData.append('foto', this.archivo);
      frmData.append('correo', this.jugadorAddFrm?.get('correo')?.value);
      frmData.append('nro_identidad', this.jugadorAddFrm?.get('nro_identidad')?.value);
      frmData.append('alias',  this.jugadorAddFrm?.get('alias')?.value);
      frmData.append('comentario', this.jugadorAddFrm?.get('comentario')?.value);
      frmData.append('ocupacion', this.jugadorAddFrm?.get('ocupacion')?.value);
      frmData.append('nivel', this.jugadorAddFrm?.get('nivel')?.value);
      frmData.append('elo', this.jugadorAddFrm?.get('elo')?.value);
      frmData.append('ranking', this.jugadorAddFrm?.get('ranking')?.value);
      frmData.append('tipo', this.jugadorAddFrm?.get('tipo')?.value);
      frmData.append('ocupacion', this.jugadorAddFrm?.get('ocupacion')?.value);
      frmData.append('fecha_nacimiento', moment(fecha_nacimiento).format("YYYY-MM-DD HH:mm:ss"));

      this.dominoApiService
      .newJugador(frmData)
      .subscribe((datos) => {
        this.loading= false;
        this.ruta.navigateByUrl('playersCard');
      });

    } catch (error) {
        this.loading=false

    }

  }


  capturarFile(event: any): void {
    const archivoSubir = event.target.files[0];
    this.extraerBase64(archivoSubir).then( (imagenSubir:any) => {
      this.preview = imagenSubir.base;
      this.archivo = archivoSubir;
    })
  }

  extraerBase64 = async ($event: any) =>
    new Promise((resolve) => {
      try {
        const unsafeImage = window.URL.createObjectURL($event);
        const imagen = this.sanitizer.bypassSecurityTrustUrl(unsafeImage);
        const reader = new FileReader();
        reader.readAsDataURL($event);
        reader.onload = () => {
          resolve({
            base: reader.result,
          });
          reader.onerror = (error) => {
            resolve({
              base: null,
            });
          };
        }
        return
      } catch (error) {
        return null;
      }
    })
}
