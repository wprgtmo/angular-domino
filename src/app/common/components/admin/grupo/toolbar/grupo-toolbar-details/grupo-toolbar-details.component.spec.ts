import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrupoToolbarDetailsComponent } from './grupo-toolbar-details.component';

describe('GrupoToolbarDetailsComponent', () => {
  let component: GrupoToolbarDetailsComponent;
  let fixture: ComponentFixture<GrupoToolbarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrupoToolbarDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrupoToolbarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
