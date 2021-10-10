import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoToolbarComponent } from './evento-toolbar.component';

describe('EventoToolbarComponent', () => {
  let component: EventoToolbarComponent;
  let fixture: ComponentFixture<EventoToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
