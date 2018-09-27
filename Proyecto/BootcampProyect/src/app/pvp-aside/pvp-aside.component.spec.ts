import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PvpAsideComponent } from './pvp-aside.component';

describe('PvpAsideComponent', () => {
  let component: PvpAsideComponent;
  let fixture: ComponentFixture<PvpAsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PvpAsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PvpAsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
