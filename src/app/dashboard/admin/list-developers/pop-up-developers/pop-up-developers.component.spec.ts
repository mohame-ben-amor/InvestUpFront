import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpDevelopersComponent } from './pop-up-developers.component';

describe('PopUpDevelopersComponent', () => {
  let component: PopUpDevelopersComponent;
  let fixture: ComponentFixture<PopUpDevelopersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpDevelopersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpDevelopersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
