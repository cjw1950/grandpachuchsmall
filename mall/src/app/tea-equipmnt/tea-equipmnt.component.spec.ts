import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeaEquipmntComponent } from './tea-equipmnt.component';

describe('TeaEquipmntComponent', () => {
  let component: TeaEquipmntComponent;
  let fixture: ComponentFixture<TeaEquipmntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeaEquipmntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeaEquipmntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
