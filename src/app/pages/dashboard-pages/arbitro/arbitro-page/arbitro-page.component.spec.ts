import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitroPageComponent } from './arbitro-page.component';

describe('ArbitroPageComponent', () => {
  let component: ArbitroPageComponent;
  let fixture: ComponentFixture<ArbitroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbitroPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
