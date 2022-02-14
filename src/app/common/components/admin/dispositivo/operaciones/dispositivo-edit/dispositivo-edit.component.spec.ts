import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivoEditComponent } from './dispositivo-edit.component';

describe('DispositivoEditComponent', () => {
  let component: DispositivoEditComponent;
  let fixture: ComponentFixture<DispositivoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispositivoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositivoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
