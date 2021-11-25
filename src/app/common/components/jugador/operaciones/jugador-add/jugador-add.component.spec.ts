import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorAddComponent } from './jugador-add.component';

describe('JugadorAddComponent', () => {
  let component: JugadorAddComponent;
  let fixture: ComponentFixture<JugadorAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
