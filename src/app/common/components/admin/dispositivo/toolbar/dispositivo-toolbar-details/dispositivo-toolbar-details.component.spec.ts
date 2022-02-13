import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivoToolbarDetailsComponent } from './dispositivo-toolbar-details.component';

describe('DispositivoToolbarDetailsComponent', () => {
  let component: DispositivoToolbarDetailsComponent;
  let fixture: ComponentFixture<DispositivoToolbarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispositivoToolbarDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositivoToolbarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
