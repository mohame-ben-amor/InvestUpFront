import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsPopUpComponent } from './settings-pop-up.component';

describe('SettingsPopUpComponent', () => {
  let component: SettingsPopUpComponent;
  let fixture: ComponentFixture<SettingsPopUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsPopUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsPopUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
