import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaEventoPageComponent } from './estadistica-evento-page.component';

describe('EstadisticaEventoPageComponent', () => {
  let component: EstadisticaEventoPageComponent;
  let fixture: ComponentFixture<EstadisticaEventoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticaEventoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaEventoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
