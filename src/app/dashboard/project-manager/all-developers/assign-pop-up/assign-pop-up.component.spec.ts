import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AssignPopUpComponent } from './assign-pop-up.component';

describe('AssignPopUpComponent', () => {
  let component: AssignPopUpComponent;
  let fixture: ComponentFixture<AssignPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AssignPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AssignPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
