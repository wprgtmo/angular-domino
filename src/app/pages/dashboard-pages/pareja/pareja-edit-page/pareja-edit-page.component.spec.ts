import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParejaEditPageComponent } from './pareja-edit-page.component';

describe('ParejaEditPageComponent', () => {
  let component: ParejaEditPageComponent;
  let fixture: ComponentFixture<ParejaEditPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParejaEditPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParejaEditPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
