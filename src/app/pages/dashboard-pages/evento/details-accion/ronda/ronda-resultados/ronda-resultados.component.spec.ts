import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RondaResultadosComponent } from './ronda-resultados.component';

describe('RondaResultadosComponent', () => {
  let component: RondaResultadosComponent;
  let fixture: ComponentFixture<RondaResultadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RondaResultadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RondaResultadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
