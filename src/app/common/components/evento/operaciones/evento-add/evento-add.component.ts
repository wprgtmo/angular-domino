import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IEvento } from 'src/app/common/models/evento.interface';
import { DominoApiService } from 'src/app/common/services/domino-api.service';

@Component({
  selector: 'app-evento-add',
  templateUrl: './evento-add.component.html',
  styleUrls: ['./evento-add.component.css'],
})
export class EventoAddComponent {
  public archivos: any = [];
  public preview: string | undefined;
  public loading= false;

  public eventoAddFrm: FormGroup | undefined;

  public evento: IEvento[] | undefined;

  constructor(
    private dominoApiService: DominoApiService,
    private ruta: Router,
    private sanitizer: DomSanitizer
  ) {
    this.loadBuilder();
  }

  loadBuilder(): void {
    this.eventoAddFrm = new FormGroup({
      nombre: new FormControl(''),
      comentario: new FormControl(''),
      logo: new FormControl(''),
      fecha_inicio: new FormControl(new Date()),
      fecha_cierre: new FormControl(new Date()),
    });
  }

  capturarFile(event: any): void {
    const archivo = event.target.files[0];
    this.extraerBase64(archivo).then( (image:any) => {
      this.preview = image.base;
    })
    this.archivos.push(archivo);
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

  onClick(): void {
    try {    
      this.loading
      const frmFiles= new FormData();
      this.archivos.forEach( (archivo: any) => {
        frmFiles.append('files', archivo);
      });
      



      this.dominoApiService
      .newEvento(this.eventoAddFrm?.value)
      .subscribe((datos) => {
        this.ruta.navigateByUrl('eventsCard');
      });
      
    } catch (error) {
      
    }

  }
}
