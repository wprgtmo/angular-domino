import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadPageComponent } from './publicidad-page.component';

describe('PublicidadPageComponent', () => {
  let component: PublicidadPageComponent;
  let fixture: ComponentFixture<PublicidadPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicidadPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicidadPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
