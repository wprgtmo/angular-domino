import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorToolbarDetailsComponent } from './jugador-toolbar-details.component';

describe('JugadorToolbarDetailsComponent', () => {
  let component: JugadorToolbarDetailsComponent;
  let fixture: ComponentFixture<JugadorToolbarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorToolbarDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorToolbarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
