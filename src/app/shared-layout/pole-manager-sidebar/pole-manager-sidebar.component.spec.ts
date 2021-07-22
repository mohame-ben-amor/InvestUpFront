import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PoleManagerSidebarComponent } from './pole-manager-sidebar.component';

describe('PoleManagerSidebarComponent', () => {
  let component: PoleManagerSidebarComponent;
  let fixture: ComponentFixture<PoleManagerSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PoleManagerSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PoleManagerSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
