import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadVideoComponent } from './publicidad-video.component';

describe('PublicidadVideoComponent', () => {
  let component: PublicidadVideoComponent;
  let fixture: ComponentFixture<PublicidadVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicidadVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicidadVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
