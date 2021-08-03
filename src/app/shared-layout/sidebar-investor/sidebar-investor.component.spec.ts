import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarInvestorComponent } from './sidebar-investor.component';

describe('SidebarInvestorComponent', () => {
  let component: SidebarInvestorComponent;
  let fixture: ComponentFixture<SidebarInvestorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarInvestorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarInvestorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
