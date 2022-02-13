import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RondaToolbarComponent } from './ronda-toolbar.component';

describe('RondaToolbarComponent', () => {
  let component: RondaToolbarComponent;
  let fixture: ComponentFixture<RondaToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RondaToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RondaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
