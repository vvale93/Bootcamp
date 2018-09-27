import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Leaderboard2v2Component } from './leaderboard2v2.component';

describe('Leaderboard2v2Component', () => {
  let component: Leaderboard2v2Component;
  let fixture: ComponentFixture<Leaderboard2v2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leaderboard2v2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Leaderboard2v2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
