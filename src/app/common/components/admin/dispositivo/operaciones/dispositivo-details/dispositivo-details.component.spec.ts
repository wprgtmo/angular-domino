import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivoDetailsComponent } from './dispositivo-details.component';

describe('DispositivoDetailsComponent', () => {
  let component: DispositivoDetailsComponent;
  let fixture: ComponentFixture<DispositivoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispositivoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositivoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
