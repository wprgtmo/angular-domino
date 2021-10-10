import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoListPageComponent } from './evento-list-page.component';

describe('EventoListPageComponent', () => {
  let component: EventoListPageComponent;
  let fixture: ComponentFixture<EventoListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
