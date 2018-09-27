import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuildDetailComponent } from './guild-detail.component';

describe('GuildDetailComponent', () => {
  let component: GuildDetailComponent;
  let fixture: ComponentFixture<GuildDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuildDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuildDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
