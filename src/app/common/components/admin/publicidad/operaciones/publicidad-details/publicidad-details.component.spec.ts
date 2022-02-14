import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadDetailsComponent } from './publicidad-details.component';

describe('PublicidadDetailsComponent', () => {
  let component: PublicidadDetailsComponent;
  let fixture: ComponentFixture<PublicidadDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicidadDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicidadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
