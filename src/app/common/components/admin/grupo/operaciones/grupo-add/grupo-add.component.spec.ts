import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoAddComponent } from './grupo-add.component';

describe('GrupoAddComponent', () => {
  let component: GrupoAddComponent;
  let fixture: ComponentFixture<GrupoAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
