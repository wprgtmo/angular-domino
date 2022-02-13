import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoDetailsComponent } from './grupo-details.component';

describe('GrupoDetailsComponent', () => {
  let component: GrupoDetailsComponent;
  let fixture: ComponentFixture<GrupoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
