import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParejaListPageComponent } from './pareja-list-page.component';

describe('ParejaListPageComponent', () => {
  let component: ParejaListPageComponent;
  let fixture: ComponentFixture<ParejaListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParejaListPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParejaListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
