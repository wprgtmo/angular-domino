import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitroAddComponent } from './arbitro-add.component';

describe('ArbitroAddComponent', () => {
  let component: ArbitroAddComponent;
  let fixture: ComponentFixture<ArbitroAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbitroAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitroAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
