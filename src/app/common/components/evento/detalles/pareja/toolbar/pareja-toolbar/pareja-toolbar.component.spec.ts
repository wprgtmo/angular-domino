import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParejaToolbarComponent } from './pareja-toolbar.component';

describe('ParejaToolbarComponent', () => {
  let component: ParejaToolbarComponent;
  let fixture: ComponentFixture<ParejaToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParejaToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParejaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
