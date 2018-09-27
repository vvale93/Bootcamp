import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealmsStatusComponent } from './realms-status.component';

describe('RealmsStatusComponent', () => {
  let component: RealmsStatusComponent;
  let fixture: ComponentFixture<RealmsStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealmsStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealmsStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
