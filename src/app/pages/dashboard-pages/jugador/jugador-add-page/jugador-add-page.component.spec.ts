import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorAddPageComponent } from './jugador-add-page.component';

describe('JugadorAddPageComponent', () => {
  let component: JugadorAddPageComponent;
  let fixture: ComponentFixture<JugadorAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
