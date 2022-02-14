import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivoAddComponent } from './dispositivo-add.component';

describe('DispositivoAddComponent', () => {
  let component: DispositivoAddComponent;
  let fixture: ComponentFixture<DispositivoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispositivoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositivoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
