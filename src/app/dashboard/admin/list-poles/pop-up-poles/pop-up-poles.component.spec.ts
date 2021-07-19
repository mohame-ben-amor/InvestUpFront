import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpPolesComponent } from './pop-up-poles.component';

describe('PopUpPolesComponent', () => {
  let component: PopUpPolesComponent;
  let fixture: ComponentFixture<PopUpPolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopUpPolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopUpPolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
