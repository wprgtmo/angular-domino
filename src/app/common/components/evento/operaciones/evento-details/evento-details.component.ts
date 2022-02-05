import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { NombreEstado } from 'src/app/common/auxiliar/auxiliar';
import { IEvento } from 'src/app/common/models/interface/evento.interface';
import { PathRest } from 'src/app/common/static/path-rest';
import { AppState } from 'src/app/state/app.state';
import { eventoSeleccionado } from 'src/app/state/selectors/eventos.selectors';

@Component({
  selector: 'app-evento-details',
  templateUrl: './evento-details.component.html',
  styleUrls: ['./evento-details.component.css']
})
export class EventoDetailsComponent implements OnInit, OnDestroy {
  public evento?: IEvento;
  public fotoEvento = "";
  private subs?: Subscription;

  constructor(private store: Store<AppState>) { }

  ngOnInit(){
    this.subs=this.store.select(eventoSeleccionado).subscribe(({...evento}) => {
      this.evento= evento;
      this.fotoEvento= PathRest.URL_BASE + this.evento?.imagen;
    })
  }

  estado() {
    return NombreEstado(this.evento?.estado);
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
