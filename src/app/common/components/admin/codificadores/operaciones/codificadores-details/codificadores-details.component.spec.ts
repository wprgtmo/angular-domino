import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodificadoresDetailsComponent } from './codificadores-details.component';

describe('CodificadoresDetailsComponent', () => {
  let component: CodificadoresDetailsComponent;
  let fixture: ComponentFixture<CodificadoresDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CodificadoresDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CodificadoresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
