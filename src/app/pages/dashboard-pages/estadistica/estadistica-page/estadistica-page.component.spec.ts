import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaPageComponent } from './estadistica-page.component';

describe('EstadisticaPageComponent', () => {
  let component: EstadisticaPageComponent;
  let fixture: ComponentFixture<EstadisticaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
