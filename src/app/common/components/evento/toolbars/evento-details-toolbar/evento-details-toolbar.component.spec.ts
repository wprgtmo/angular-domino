import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoDetailsToolbarComponent } from './evento-details-toolbar.component';

describe('EventoDetailsToolbarComponent', () => {
  let component: EventoDetailsToolbarComponent;
  let fixture: ComponentFixture<EventoDetailsToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoDetailsToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoDetailsToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
