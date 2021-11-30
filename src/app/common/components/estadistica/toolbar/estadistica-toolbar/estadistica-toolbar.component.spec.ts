import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticaToolbarComponent } from './estadistica-toolbar.component';

describe('EstadisticaToolbarComponent', () => {
  let component: EstadisticaToolbarComponent;
  let fixture: ComponentFixture<EstadisticaToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EstadisticaToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
