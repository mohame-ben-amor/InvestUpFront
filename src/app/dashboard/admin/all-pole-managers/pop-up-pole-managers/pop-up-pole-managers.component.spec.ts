import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpPoleManagersComponent } from './pop-up-pole-managers.component';

describe('PopUpPoleManagersComponent', () => {
  let component: PopUpPoleManagersComponent;
  let fixture: ComponentFixture<PopUpPoleManagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpPoleManagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpPoleManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
