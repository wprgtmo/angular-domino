import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaPageComponent } from './mesa-page.component';

describe('MesaPageComponent', () => {
  let component: MesaPageComponent;
  let fixture: ComponentFixture<MesaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
