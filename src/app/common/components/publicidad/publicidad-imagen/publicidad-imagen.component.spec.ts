import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadImagenComponent } from './publicidad-imagen.component';

describe('PublicidadImagenComponent', () => {
  let component: PublicidadImagenComponent;
  let fixture: ComponentFixture<PublicidadImagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicidadImagenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicidadImagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
