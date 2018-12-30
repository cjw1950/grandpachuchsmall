import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportparaComponent } from './sportpara.component';

describe('SportparaComponent', () => {
  let component: SportparaComponent;
  let fixture: ComponentFixture<SportparaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportparaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportparaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
