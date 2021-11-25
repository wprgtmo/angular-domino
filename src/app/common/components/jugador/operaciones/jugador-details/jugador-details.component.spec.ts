import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorDetailsComponent } from './jugador-details.component';

describe('JugadorDetailsComponent', () => {
  let component: JugadorDetailsComponent;
  let fixture: ComponentFixture<JugadorDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
