import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Leaderboard3v3Component } from './leaderboard3v3.component';

describe('Leaderboard3v3Component', () => {
  let component: Leaderboard3v3Component;
  let fixture: ComponentFixture<Leaderboard3v3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Leaderboard3v3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Leaderboard3v3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
