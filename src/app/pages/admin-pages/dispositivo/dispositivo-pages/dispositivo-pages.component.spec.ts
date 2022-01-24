import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DispositivoPagesComponent } from './dispositivo-pages.component';

describe('DispositivoPagesComponent', () => {
  let component: DispositivoPagesComponent;
  let fixture: ComponentFixture<DispositivoPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DispositivoPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DispositivoPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
