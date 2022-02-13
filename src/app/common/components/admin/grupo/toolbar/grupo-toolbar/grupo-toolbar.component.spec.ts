import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoToolbarComponent } from './grupo-toolbar.component';

describe('GrupoToolbarComponent', () => {
  let component: GrupoToolbarComponent;
  let fixture: ComponentFixture<GrupoToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
