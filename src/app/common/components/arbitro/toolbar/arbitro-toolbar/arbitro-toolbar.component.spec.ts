import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitroToolbarComponent } from './arbitro-toolbar.component';

describe('ArbitroToolbarComponent', () => {
  let component: ArbitroToolbarComponent;
  let fixture: ComponentFixture<ArbitroToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbitroToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitroToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
