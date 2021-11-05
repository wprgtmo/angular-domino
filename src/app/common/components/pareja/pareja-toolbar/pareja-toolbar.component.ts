import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pareja-toolbar',
  templateUrl: './pareja-toolbar.component.html',
  styleUrls: ['./pareja-toolbar.component.css']
})
export class ParejaToolbarComponent implements OnInit {

  constructor(private ruta: Router) { }

  ngOnInit(): void {
  }

  parejaAdd(){
    this.ruta.navigateByUrl("parejaAdd");
  }

}
