import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitroListPagesComponent } from './arbitro-list-pages.component';

describe('ArbitroListPagesComponent', () => {
  let component: ArbitroListPagesComponent;
  let fixture: ComponentFixture<ArbitroListPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbitroListPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitroListPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
