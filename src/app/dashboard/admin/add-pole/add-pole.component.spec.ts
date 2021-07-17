import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPoleComponent } from './add-pole.component';

describe('AddPoleComponent', () => {
  let component: AddPoleComponent;
  let fixture: ComponentFixture<AddPoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
