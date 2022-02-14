import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadToolbarDetailsComponent } from './publicidad-toolbar-details.component';

describe('PublicidadToolbarDetailsComponent', () => {
  let component: PublicidadToolbarDetailsComponent;
  let fixture: ComponentFixture<PublicidadToolbarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicidadToolbarDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicidadToolbarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
