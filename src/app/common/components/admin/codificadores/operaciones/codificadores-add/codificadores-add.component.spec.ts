import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodificadoresAddComponent } from './codificadores-add.component';

describe('CodificadoresAddComponent', () => {
  let component: CodificadoresAddComponent;
  let fixture: ComponentFixture<CodificadoresAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodificadoresAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodificadoresAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
