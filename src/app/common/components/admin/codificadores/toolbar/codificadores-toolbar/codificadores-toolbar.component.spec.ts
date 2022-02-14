import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodificadoresToolbarComponent } from './codificadores-toolbar.component';

describe('CodificadoresToolbarComponent', () => {
  let component: CodificadoresToolbarComponent;
  let fixture: ComponentFixture<CodificadoresToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodificadoresToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodificadoresToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
