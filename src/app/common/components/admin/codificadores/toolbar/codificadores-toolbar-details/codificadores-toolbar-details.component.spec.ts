import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodificadoresToolbarDetailsComponent } from './codificadores-toolbar-details.component';

describe('CodificadoresToolbarDetailsComponent', () => {
  let component: CodificadoresToolbarDetailsComponent;
  let fixture: ComponentFixture<CodificadoresToolbarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodificadoresToolbarDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodificadoresToolbarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
