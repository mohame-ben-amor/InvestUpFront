import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarEntrepreneurComponent } from './sidebar-entrepreneur.component';

describe('SidebarEntrepreneurComponent', () => {
  let component: SidebarEntrepreneurComponent;
  let fixture: ComponentFixture<SidebarEntrepreneurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarEntrepreneurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarEntrepreneurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
