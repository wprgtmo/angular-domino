import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoAddPageComponent } from './evento-add-page.component';

describe('EventoAddPageComponent', () => {
  let component: EventoAddPageComponent;
  let fixture: ComponentFixture<EventoAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
