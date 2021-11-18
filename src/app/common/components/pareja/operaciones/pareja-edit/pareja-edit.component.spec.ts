import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParejaEditComponent } from './pareja-edit.component';

describe('ParejaEditComponent', () => {
  let component: ParejaEditComponent;
  let fixture: ComponentFixture<ParejaEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParejaEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParejaEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
