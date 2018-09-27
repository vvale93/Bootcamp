import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharDetailComponent } from './char-detail.component';

describe('CharDetailComponent', () => {
  let component: CharDetailComponent;
  let fixture: ComponentFixture<CharDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
