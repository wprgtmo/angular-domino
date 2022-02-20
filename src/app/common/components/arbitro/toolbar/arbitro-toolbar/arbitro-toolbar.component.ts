import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ArbitrosService } from './../../../../../state/facade/arbitros.service';

@Component({
  selector: 'app-arbitro-toolbar',
  templateUrl: './arbitro-toolbar.component.html',
  styleUrls: ['./arbitro-toolbar.component.css']
})
export class ArbitroToolbarComponent implements OnInit {
  esTarjeta$: Observable<boolean>= new Observable();

  constructor(private ruta: Router, private arbitrosService: ArbitrosService) { }

  ngOnInit(): void {
    this.esTarjeta$= this.arbitrosService.getMostrandoTarjetas$();
 }

 addArbitro(): void {
    this.ruta.navigateByUrl('arbitroAdd');
  }

  verComoTarjeta(): void {
    this.arbitrosService.mostrarArbitrosComoTarjetas();
    this.ruta.navigateByUrl('arbitrosCard');
  }


  verComoLista(): void {
    this.arbitrosService.mostrarArbitrosComoLista();
    this.ruta.navigateByUrl('arbitrosList');
  }


}
