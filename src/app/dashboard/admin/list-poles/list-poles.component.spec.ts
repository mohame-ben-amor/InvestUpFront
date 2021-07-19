import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPolesComponent } from './list-poles.component';

describe('ListPolesComponent', () => {
  let component: ListPolesComponent;
  let fixture: ComponentFixture<ListPolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
