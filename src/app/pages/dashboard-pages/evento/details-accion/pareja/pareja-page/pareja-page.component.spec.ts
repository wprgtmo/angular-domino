import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParejaPageComponent } from './pareja-page.component';

describe('ParejaPageComponent', () => {
  let component: ParejaPageComponent;
  let fixture: ComponentFixture<ParejaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParejaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParejaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
