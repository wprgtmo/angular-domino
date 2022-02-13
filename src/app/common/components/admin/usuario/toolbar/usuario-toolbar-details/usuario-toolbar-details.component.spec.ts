import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioToolbarDetailsComponent } from './usuario-toolbar-details.component';

describe('UsuarioToolbarDetailsComponent', () => {
  let component: UsuarioToolbarDetailsComponent;
  let fixture: ComponentFixture<UsuarioToolbarDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioToolbarDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioToolbarDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
