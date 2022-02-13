import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PremiadosPageComponent } from './premiados-page.component';

describe('PremiadosPageComponent', () => {
  let component: PremiadosPageComponent;
  let fixture: ComponentFixture<PremiadosPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PremiadosPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PremiadosPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
