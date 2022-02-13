import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadEditComponent } from './publicidad-edit.component';

describe('PublicidadEditComponent', () => {
  let component: PublicidadEditComponent;
  let fixture: ComponentFixture<PublicidadEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicidadEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicidadEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
