import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportwomanComponent } from './sportwoman.component';

describe('SportwomanComponent', () => {
  let component: SportwomanComponent;
  let fixture: ComponentFixture<SportwomanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportwomanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportwomanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
