import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpPlanificationComponent } from './pop-up-planification.component';

describe('PopUpPlanificationComponent', () => {
  let component: PopUpPlanificationComponent;
  let fixture: ComponentFixture<PopUpPlanificationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpPlanificationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpPlanificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
