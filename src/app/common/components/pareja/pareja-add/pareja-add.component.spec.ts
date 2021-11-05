import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParejaAddComponent } from './pareja-add.component';

describe('ParejaAddComponent', () => {
  let component: ParejaAddComponent;
  let fixture: ComponentFixture<ParejaAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParejaAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParejaAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
