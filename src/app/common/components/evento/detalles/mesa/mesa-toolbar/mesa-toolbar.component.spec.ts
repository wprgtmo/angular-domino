import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesaToolbarComponent } from './mesa-toolbar.component';

describe('MesaToolbarComponent', () => {
  let component: MesaToolbarComponent;
  let fixture: ComponentFixture<MesaToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesaToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MesaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
