import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { cargandoDatosSelector } from 'src/app/state/selectors/cargando.selector';

@Component({
  selector: 'app-cargando',
  templateUrl: './cargando.component.html',
  styleUrls: ['./cargando.component.css'],
})
export class CargandoComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: ProgressSpinnerMode = 'indeterminate';
  value = 50;

  cargando$: Observable<boolean> = new Observable();

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
     this.cargando$= this.store.select(cargandoDatosSelector);
  }
}
