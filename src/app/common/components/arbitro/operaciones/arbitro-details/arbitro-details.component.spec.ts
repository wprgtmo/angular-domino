import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitroDetailsComponent } from './arbitro-details.component';

describe('ArbitroDetailsComponent', () => {
  let component: ArbitroDetailsComponent;
  let fixture: ComponentFixture<ArbitroDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbitroDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitroDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
