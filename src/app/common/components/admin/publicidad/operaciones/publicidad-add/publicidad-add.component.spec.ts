import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublicidadAddComponent } from './publicidad-add.component';

describe('PublicidadAddComponent', () => {
  let component: PublicidadAddComponent;
  let fixture: ComponentFixture<PublicidadAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PublicidadAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PublicidadAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
