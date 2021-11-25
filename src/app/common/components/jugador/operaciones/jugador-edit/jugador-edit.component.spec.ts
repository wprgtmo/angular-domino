import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorEditComponent } from './jugador-edit.component';

describe('JugadorEditComponent', () => {
  let component: JugadorEditComponent;
  let fixture: ComponentFixture<JugadorEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
