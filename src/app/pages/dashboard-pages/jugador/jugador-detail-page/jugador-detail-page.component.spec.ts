import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorDetailPageComponent } from './jugador-detail-page.component';

describe('JugadorDetailPageComponent', () => {
  let component: JugadorDetailPageComponent;
  let fixture: ComponentFixture<JugadorDetailPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorDetailPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorDetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
