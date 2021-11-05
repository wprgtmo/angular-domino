import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-pareja-add',
  templateUrl: './pareja-add.component.html',
  styleUrls: ['./pareja-add.component.css']
})
export class ParejaAddComponent implements OnInit {

  public loading= false;
  public parejaAddFrm: FormGroup | undefined;
  constructor() { }

  ngOnInit(): void {
  }


  loadBuilder(): void {
    this.parejaAddFrm = new FormGroup({
      nombre: new FormControl(''),
    });
  }

  onClick(){

  }

}
