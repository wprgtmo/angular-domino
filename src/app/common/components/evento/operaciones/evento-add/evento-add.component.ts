import { Moment } from 'moment/moment';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IEvento } from 'src/app/common/models/evento.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

// Depending on whether rollup is used, moment needs to be imported differently.
// Since Moment.js doesn't have a default export, we normally need to import using the `* as`
// syntax. However, rollup creates a synthetic default module and we thus need to import it using
// the `default as` syntax.

import * as moment from 'moment/moment';
// tslint:disable-next-line:no-duplicate-imports
// import {default as _rollupMoment} from 'moment';

// const moment = _rollupMoment || _moment;

@Component({
  selector: 'app-evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css'],
  providers:[
      // `MomentDateAdapter` and `MAT_MOMENT_DATE_FORMATS` can be automatically provided by importing
      // `MatMomentDateModule` in your applications root module. We provide it at the component level
      // here, due to limitations of our example generation script.
      {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
      {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class EventoAddComponent {
  public archivo: any;
  public preview: string | undefined;
  public loading= false;


  public eventoAddFrm: FormGroup | undefined;

  public evento: IEvento[] | undefined;

  constructor(
    private dominoApiService: DominoApiService,
    private ruta: Router,
    private sanitizer: DomSanitizer) {
    this.loadBuilder();
  }

  loadBuilder(): void {
    this.eventoAddFrm = new FormGroup({
      nombre: new FormControl(''),
      comentario: new FormControl(''),
      imagen: new FormControl(''),
      fecha_inicio: new FormControl(moment(new Date())),
      fecha_cierre: new FormControl(moment(new Date())),
    });
  }

  onClick(): void {
    let inicio=this.eventoAddFrm?.get('fecha_inicio')?.value;
    let cierre=this.eventoAddFrm?.get('fecha_cierre')?.value;
    try {
      this.loading= true;
      
      const frmData= new FormData();
      frmData.append('imagen', this.archivo);
      frmData.append('nombre', this.eventoAddFrm?.get('nombre')?.value);
      frmData.append('comentario', this.eventoAddFrm?.get('comentario')?.value);
      frmData.append('fecha_inicio', moment(inicio).format("YYYY-MM-DD HH:mm:ss"));
      frmData.append('fecha_cierre', moment(cierre).format("YYYY-MM-DD HH:mm:ss"));
      console.log(frmData);

      this.dominoApiService
      .newEvento(frmData)
      .subscribe((datos) => {
        console.log(datos);
        this.loading= false;
        this.ruta.navigateByUrl('eventsCard');
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
