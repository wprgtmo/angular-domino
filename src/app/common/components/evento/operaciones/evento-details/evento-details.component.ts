import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { IEvento } from 'src/app/common/models/evento.interface';
import { SeleccionService } from 'src/app/common/services/seleccion.service';
import { PathRest } from 'src/app/common/static/path-rest';

@Component({
  selector: 'app-evento-details',
  templateUrl: './evento-details.component.html',
  styleUrls: ['./evento-details.component.css']
})
export class EventoDetailsComponent implements OnInit, OnDestroy {
  public evento?: IEvento;
  public fotoEvento = "";
  private subs?: Subscription;

  constructor(private seleccionService: SeleccionService) { }

  ngOnInit(){
    this.subs=this.seleccionService.channelEvent.subscribe((evento) => {
      this.evento= evento;
      this.fotoEvento= PathRest.URL_BASE + PathRest.IMG_EVENTOS + this.evento?.imagen;
    })
  }

  estado() {
    return this.seleccionService.nombreEstado(this.evento?.estado);
  }

  detalleEstado() {
    switch (this.estado()) {
      case "Creado": return "Puede crear las parejas y asociar los jugadores"; break;
      case "Iniciado": return "Puede asignar las mesas y jugar las rondas"; break;
      case "Finalizado": return "Cerrado el evento, puede ver los resultados"; break;
      default: return "Sin estado"; break;
    }
  }

  ngOnDestroy(): void {
      this.subs?.unsubscribe();
  }

}
