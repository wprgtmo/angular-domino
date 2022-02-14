import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodificadoresEditComponent } from './codificadores-edit.component';

describe('CodificadoresEditComponent', () => {
  let component: CodificadoresEditComponent;
  let fixture: ComponentFixture<CodificadoresEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodificadoresEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodificadoresEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
