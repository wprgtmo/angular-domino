import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorToolbarComponent } from './jugador-toolbar.component';

describe('JugadorToolbarComponent', () => {
  let component: JugadorToolbarComponent;
  let fixture: ComponentFixture<JugadorToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
