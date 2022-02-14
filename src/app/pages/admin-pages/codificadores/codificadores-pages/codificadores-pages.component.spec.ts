import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodificadoresPagesComponent } from './codificadores-pages.component';

describe('CodificadoresPagesComponent', () => {
  let component: CodificadoresPagesComponent;
  let fixture: ComponentFixture<CodificadoresPagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodificadoresPagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodificadoresPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
