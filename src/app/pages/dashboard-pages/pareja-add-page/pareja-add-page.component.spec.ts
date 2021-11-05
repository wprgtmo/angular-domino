import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParejaAddPageComponent } from './pareja-add-page.component';

describe('ParejaAddPageComponent', () => {
  let component: ParejaAddPageComponent;
  let fixture: ComponentFixture<ParejaAddPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParejaAddPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParejaAddPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
