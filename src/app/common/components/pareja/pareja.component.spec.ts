import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParejaComponent } from './pareja.component';

describe('ParejaComponent', () => {
  let component: ParejaComponent;
  let fixture: ComponentFixture<ParejaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParejaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParejaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
