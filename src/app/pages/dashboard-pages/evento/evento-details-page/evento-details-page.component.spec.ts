import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoDetailsPageComponent } from './evento-details-page.component';

describe('EventoDetailsPageComponent', () => {
  let component: EventoDetailsPageComponent;
  let fixture: ComponentFixture<EventoDetailsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoDetailsPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
