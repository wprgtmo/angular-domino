import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitroAddPagesComponent } from './arbitro-add-pages.component';

describe('ArbitroAddPagesComponent', () => {
  let component: ArbitroAddPagesComponent;
  let fixture: ComponentFixture<ArbitroAddPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbitroAddPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitroAddPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
