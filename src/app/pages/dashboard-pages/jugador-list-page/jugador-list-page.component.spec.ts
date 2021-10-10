import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JugadorListPageComponent } from './jugador-list-page.component';

describe('JugadorListPageComponent', () => {
  let component: JugadorListPageComponent;
  let fixture: ComponentFixture<JugadorListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JugadorListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JugadorListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
