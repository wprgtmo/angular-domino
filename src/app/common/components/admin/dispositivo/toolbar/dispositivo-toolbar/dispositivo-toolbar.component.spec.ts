import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivoToolbarComponent } from './dispositivo-toolbar.component';

describe('DispositivoToolbarComponent', () => {
  let component: DispositivoToolbarComponent;
  let fixture: ComponentFixture<DispositivoToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispositivoToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositivoToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
