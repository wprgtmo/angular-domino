import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitroToolbarDetailsComponent } from './arbitro-toolbar-details.component';

describe('ArbitroToolbarDetailsComponent', () => {
  let component: ArbitroToolbarDetailsComponent;
  let fixture: ComponentFixture<ArbitroToolbarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbitroToolbarDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitroToolbarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
