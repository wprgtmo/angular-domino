import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RondaPageComponent } from './ronda-page.component';

describe('RondaPageComponent', () => {
  let component: RondaPageComponent;
  let fixture: ComponentFixture<RondaPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RondaPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RondaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
