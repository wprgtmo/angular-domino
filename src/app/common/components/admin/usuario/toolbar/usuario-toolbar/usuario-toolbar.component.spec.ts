import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioToolbarComponent } from './usuario-toolbar.component';

describe('UsuarioToolbarComponent', () => {
  let component: UsuarioToolbarComponent;
  let fixture: ComponentFixture<UsuarioToolbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioToolbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
