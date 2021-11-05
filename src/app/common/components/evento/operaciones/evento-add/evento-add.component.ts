import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IEvento } from 'src/app/common/models/evento.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css'],
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
      fecha_inicio: new FormControl(new Date()),
      fecha_cierre: new FormControl(new Date()),
    });
  }

  onClick(): void {
    try {
      this.loading= true;
      const frmData= new FormData();
      frmData.append('imagen', this.archivo);
      frmData.append('nombre', this.eventoAddFrm?.get('nombre')?.value);
      frmData.append('comentario', this.eventoAddFrm?.get('comentario')?.value);
      frmData.append('fecha_inicio', this.eventoAddFrm?.get('fecha_inicio')?.value);
      frmData.append('fecha_cierre', this.eventoAddFrm?.get('fecha_cierre')?.value);
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
