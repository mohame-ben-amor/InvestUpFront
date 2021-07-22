import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPoleComponent } from './my-pole.component';

describe('MyPoleComponent', () => {
  let component: MyPoleComponent;
  let fixture: ComponentFixture<MyPoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyPoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyPoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
