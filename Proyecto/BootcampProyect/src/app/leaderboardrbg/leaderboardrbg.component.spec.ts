import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardrbgComponent } from './leaderboardrbg.component';

describe('LeaderboardrbgComponent', () => {
  let component: LeaderboardrbgComponent;
  let fixture: ComponentFixture<LeaderboardrbgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaderboardrbgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaderboardrbgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
