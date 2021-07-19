import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllPoleManagersComponent } from './all-pole-managers.component';

describe('AllPoleManagersComponent', () => {
  let component: AllPoleManagersComponent;
  let fixture: ComponentFixture<AllPoleManagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllPoleManagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllPoleManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
