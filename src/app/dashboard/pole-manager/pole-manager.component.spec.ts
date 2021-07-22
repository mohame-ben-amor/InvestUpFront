import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleManagerComponent } from './pole-manager.component';

describe('PoleManagerComponent', () => {
  let component: PoleManagerComponent;
  let fixture: ComponentFixture<PoleManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoleManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoleManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
