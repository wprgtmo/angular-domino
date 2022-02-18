import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArbitroDetailsPagesComponent } from './arbitro-details-pages.component';

describe('ArbitroDetailsPagesComponent', () => {
  let component: ArbitroDetailsPagesComponent;
  let fixture: ComponentFixture<ArbitroDetailsPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArbitroDetailsPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArbitroDetailsPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
