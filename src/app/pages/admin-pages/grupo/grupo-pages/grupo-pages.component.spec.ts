import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoPagesComponent } from './grupo-pages.component';

describe('GrupoPagesComponent', () => {
  let component: GrupoPagesComponent;
  let fixture: ComponentFixture<GrupoPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
