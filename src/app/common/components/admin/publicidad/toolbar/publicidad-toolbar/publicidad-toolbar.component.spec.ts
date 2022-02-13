import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadToolbarComponent } from './publicidad-toolbar.component';

describe('PublicidadToolbarComponent', () => {
  let component: PublicidadToolbarComponent;
  let fixture: ComponentFixture<PublicidadToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicidadToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicidadToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
