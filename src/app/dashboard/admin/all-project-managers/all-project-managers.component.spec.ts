import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProjectManagersComponent } from './all-project-managers.component';

describe('AllProjectManagersComponent', () => {
  let component: AllProjectManagersComponent;
  let fixture: ComponentFixture<AllProjectManagersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProjectManagersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProjectManagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
