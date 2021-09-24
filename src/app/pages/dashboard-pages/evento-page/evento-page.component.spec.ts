import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventoPageComponent } from './evento-page.component';

describe('EventoPageComponent', () => {
  let component: EventoPageComponent;
  let fixture: ComponentFixture<EventoPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventoPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EventoPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
