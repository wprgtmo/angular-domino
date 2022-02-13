import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitroEditComponent } from './arbitro-edit.component';

describe('ArbitroEditComponent', () => {
  let component: ArbitroEditComponent;
  let fixture: ComponentFixture<ArbitroEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbitroEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitroEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
