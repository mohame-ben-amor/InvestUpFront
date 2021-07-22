import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpEditPoleComponent } from './pop-up-edit-pole.component';

describe('PopUpEditPoleComponent', () => {
  let component: PopUpEditPoleComponent;
  let fixture: ComponentFixture<PopUpEditPoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpEditPoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpEditPoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
