import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodificadoresComponent } from './codificadores.component';

describe('CodificadoresComponent', () => {
  let component: CodificadoresComponent;
  let fixture: ComponentFixture<CodificadoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodificadoresComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodificadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
